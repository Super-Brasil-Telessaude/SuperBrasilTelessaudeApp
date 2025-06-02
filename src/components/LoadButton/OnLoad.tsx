import React, { ReactNode, HTMLAttributes } from 'react';

interface OnLoadProps extends HTMLAttributes<HTMLDivElement> {
  loading: boolean;
  children: ReactNode;
}

const OnLoad: React.FC<OnLoadProps> = ({ loading, children, ...props }) => {
  return (
    <div
      className={`relative ${loading ? 'opacity-70 pointer-events-none' : ''}`}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <svg
            className="size-5 animate-spin text-indigo-500"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      )}
      {children}
    </div>
  );
};

export default OnLoad;
