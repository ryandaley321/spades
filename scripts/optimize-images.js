const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Configuration
const CONFIG = {
  inputDir: './public/images',
  outputDir: './public/images/optimized',
  formats: ['webp', 'original'], // Generate WebP and keep original format
  quality: {
    jpeg: 85,
    webp: 85,
    png: 90
  },
  maxWidth: 1920, // Max width for images
  preserveAspectRatio: true
};

// Supported image extensions
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (error) {
    console.error(`Error creating directory ${dir}:`, error);
  }
}

async function getImageFiles(dir) {
  const files = [];
  
  async function walk(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (SUPPORTED_EXTENSIONS.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  await walk(dir);
  return files;
}

async function optimizeImage(inputPath, outputDir) {
  const filename = path.basename(inputPath);
  const nameWithoutExt = path.parse(filename).name;
  const ext = path.extname(filename).toLowerCase();
  
  console.log(`Optimizing: ${filename}`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Resize if larger than maxWidth
    let pipeline = image;
    if (metadata.width > CONFIG.maxWidth) {
      pipeline = pipeline.resize(CONFIG.maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Keep original format optimized
    if (CONFIG.formats.includes('original')) {
      const outputPath = path.join(outputDir, filename);
      
      if (ext === '.jpg' || ext === '.jpeg') {
        await pipeline
          .jpeg({ quality: CONFIG.quality.jpeg, progressive: true })
          .toFile(outputPath);
        
        const originalSize = (await fs.stat(inputPath)).size;
        const optimizedSize = (await fs.stat(outputPath)).size;
        const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`  ✓ JPEG: ${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB (-${reduction}%)`);
      } else if (ext === '.png') {
        await pipeline
          .png({ quality: CONFIG.quality.png, compressionLevel: 9 })
          .toFile(outputPath);
        
        const originalSize = (await fs.stat(inputPath)).size;
        const optimizedSize = (await fs.stat(outputPath)).size;
        const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`  ✓ PNG: ${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB (-${reduction}%)`);
      }
    }
    
    // Generate WebP version
    if (CONFIG.formats.includes('webp') && ext !== '.webp') {
      const webpPath = path.join(outputDir, `${nameWithoutExt}.webp`);
      
      await pipeline
        .webp({ quality: CONFIG.quality.webp })
        .toFile(webpPath);
      
      const originalSize = (await fs.stat(inputPath)).size;
      const webpSize = (await fs.stat(webpPath)).size;
      const reduction = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
      
      console.log(`  ✓ WebP: ${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB (-${reduction}%)`);
    }
    
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Image Optimization Tool');
  console.log('==========================\n');
  
  // Ensure output directory exists
  await ensureDir(CONFIG.outputDir);
  
  // Get all image files
  const imageFiles = await getImageFiles(CONFIG.inputDir);
  
  if (imageFiles.length === 0) {
    console.log('No images found to optimize.');
    return;
  }
  
  console.log(`Found ${imageFiles.length} images to optimize.\n`);
  
  // Process each image
  for (const imagePath of imageFiles) {
    await optimizeImage(imagePath, CONFIG.outputDir);
  }
  
  console.log('\n✅ Image optimization complete!');
  console.log(`Optimized images saved to: ${CONFIG.outputDir}`);
  
  // Show summary
  const originalStats = await fs.stat(CONFIG.inputDir);
  const optimizedStats = await fs.stat(CONFIG.outputDir);
  
  console.log('\n📊 Summary:');
  console.log(`- Original images: ${imageFiles.length} files`);
  console.log(`- Formats generated: ${CONFIG.formats.join(', ')}`);
  console.log(`- Output directory: ${CONFIG.outputDir}`);
}

// Run the script
main().catch(console.error);