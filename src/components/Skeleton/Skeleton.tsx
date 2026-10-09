import React from 'react';

const CardSkeleton = () => {
    return (
        <div>
      <div>
        <div>
          {/* Heading Skeleton */}
          <div className="flex gap-2 items-center mt-8 mb-8">
            <div className="w-7 h-7 rounded-full bg-gray-200 animate-pulse" />

            <div className="w-40 h-7 rounded-md bg-gray-200 animate-pulse" />
          </div>

          {/* Cards Skeleton */}
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index}>
                <div className="border border-gray-100 rounded-xl p-4">
                  {/* Image */}
                  <div className="w-full h-40 rounded-lg bg-gray-200 animate-pulse" />

                  {/* Name */}
                  <div className="w-3/4 h-5 rounded-md bg-gray-200 animate-pulse mt-4" />

                  {/* Unit */}
                  <div className="w-1/3 h-4 rounded-md bg-gray-200 animate-pulse mt-2" />

                  {/* Price */}
                  <div className="w-1/2 h-6 rounded-md bg-gray-200 animate-pulse mt-4" />

                  {/* Percentage */}
                  <div className="w-20 h-6 rounded-full bg-gray-200 animate-pulse mt-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    );
};

export default CardSkeleton;