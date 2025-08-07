import React from 'react';
import Image from 'next/image';

interface GoogleReviewCardProps {
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  reviewCount?: number;
  photoCount?: number;
  isLocalGuide?: boolean;
}

const GoogleReviewCard: React.FC<GoogleReviewCardProps> = ({
  name,
  avatar,
  rating,
  comment,
  reviewCount,
  photoCount,
  isLocalGuide = false,
}) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
      >
        ★
      </span>
    ));
  };

  const getReviewerInfo = () => {
    const parts = [];
    if (isLocalGuide) parts.push('Local Guide');
    if (reviewCount) parts.push(`${reviewCount} reviews`);
    if (photoCount) parts.push(`${photoCount} photos`);
    return parts.join(' • ');
  };

  return (
    <div className="google-review-card bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start mb-4">
        <div className="mr-3">
          {avatar ? (
            <Image
              src={avatar}
              alt={`${name}'s avatar`}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 text-base">{name}</h4>
          {getReviewerInfo() && (
            <p className="text-sm text-gray-600 mt-0.5">{getReviewerInfo()}</p>
          )}
          <div className="flex items-center mt-1">
            <div className="flex text-lg">{renderStars()}</div>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed italic">{comment}</p>
      <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
        <svg
          className="w-5 h-5 mr-2"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44.5 24C44.5 35.3 35.3 44.5 24 44.5C12.7 44.5 3.5 35.3 3.5 24C3.5 12.7 12.7 3.5 24 3.5C35.3 3.5 44.5 12.7 44.5 24Z"
            fill="#4285F4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.1 25.4H24V31.9H29.8C29.3 33.5 27.7 34.6 25.8 34.6C23.1 34.6 20.9 32.4 20.9 29.7C20.9 27 23.1 24.8 25.8 24.8C27 24.8 28.1 25.2 28.9 26L33.3 21.6C31.2 19.6 28.6 18.5 25.8 18.5C19.6 18.5 14.6 23.5 14.6 29.7C14.6 35.9 19.6 40.9 25.8 40.9C31.5 40.9 36.2 36.8 36.2 29.7C36.2 28.8 36.1 28 35.9 27.3L34.1 25.4Z"
            fill="white"
          />
          <path
            d="M13.5 19.6L18.3 23.2C19.5 20.7 22.4 18.9 25.8 18.9C28.1 18.9 30.2 19.7 31.8 21L35.8 17C33.1 14.6 29.6 13 25.8 13C19.5 13 14.1 16.7 11.5 22L13.5 19.6Z"
            fill="#EA4335"
          />
          <path
            d="M25.8 35.5C29.4 35.5 32.6 34.1 35.2 31.9L31.1 28.2C29.9 29.2 28.3 29.8 26.5 29.8C23.5 29.8 21 27.7 20.2 24.9L15.9 28.7C18.4 32.7 21.8 35.5 25.8 35.5Z"
            fill="#34A853"
          />
          <path
            d="M36.2 24C36.2 23.2 36.1 22.5 35.9 21.8H25.8V26.5H31.7C31.4 28 30.5 29.2 29.2 30L33.2 33.5C35.6 31.3 36.9 28 36.9 24.4C36.9 23.6 36.8 22.8 36.6 22L36.2 24Z"
            fill="#FBBC04"
          />
        </svg>
        <span className="text-xs text-gray-500">Google Review</span>
      </div>
    </div>
  );
};

export default GoogleReviewCard;