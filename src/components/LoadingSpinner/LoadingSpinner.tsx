import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        className={`${sizeClasses[size]} animate-spin`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        role="status"
        aria-label="Loading"
      >
        <defs>
          <radialGradient
            id="a11"
            cx=".66"
            fx=".66"
            cy=".3125"
            fy=".3125"
            gradientTransform="scale(1.5)"
          >
            <stop offset="0" stopColor="#506CF0"></stop>
            <stop offset=".3" stopColor="#506CF0" stopOpacity=".9"></stop>
            <stop offset=".6" stopColor="#506CF0" stopOpacity=".6"></stop>
            <stop offset=".8" stopColor="#506CF0" stopOpacity=".3"></stop>
            <stop offset="1" stopColor="#506CF0" stopOpacity="0"></stop>
          </radialGradient>
        </defs>
        <circle
          fill="none"
          stroke="url(#a11)"
          strokeWidth="21"
          strokeLinecap="round"
          strokeDasharray="200 1000"
          strokeDashoffset="0"
          cx="100"
          cy="100"
          r="70"
        />
        <circle
          fill="none"
          opacity=".2"
          stroke="#506CF0"
          strokeWidth="21"
          strokeLinecap="round"
          cx="100"
          cy="100"
          r="70"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
