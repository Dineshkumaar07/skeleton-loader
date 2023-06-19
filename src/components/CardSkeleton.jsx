import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((i) => (
      <div className="flex gap-3 border-2 border-gray-500 ml-2 mb-2 rounded-md px-3 py-2 w-96" key={i}>
        <div>
          <Skeleton circle width={56} height={56} />
        </div>
        <div className="w-full flex-1">
          <Skeleton count={4} />
        </div>
      </div>
    ));
};

export default CardSkeleton;
