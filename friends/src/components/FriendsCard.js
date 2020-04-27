import React from "react";

const FriendsCard = ({friends}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
  <div className="font-bold text-xl mb-2">{friends.name}</div>
        <p className="text-gray-700 text-base">
            {friends.email} age: {friends.age}
        </p>
      </div>
    </div>
  );
}

export default FriendsCard;
