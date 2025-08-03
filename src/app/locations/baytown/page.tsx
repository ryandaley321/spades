import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BaytownLocationPage() {
  return (
    <div className="min-h-screen bg-[#181510]">
      <Header />
      <main>
        {/* BaytownLocationPage content will go here */}
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-[#f7e7ce] text-3xl font-bold">BaytownLocation</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}