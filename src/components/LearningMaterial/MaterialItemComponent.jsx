import { Star } from "lucide-react";
import { useState } from "react";

export default function MaterialItemComponent({ item }) {
  const [material, setMaterial] = useState(item);
  const toggleStatus = () => {
    setMaterial({ ...material, isFavorite: !material.isFavorite });
  };
  return (
    <div className="space-y-3">
      <div className="bg-light-gray px-4 py-2 flex gap-5 items-center">
        <img
          src={material.image}
          alt="HTML5"
          width={50}
          height={50}
          className="rounded-xl"
        />

        <div className="w-full">
          <div className="flex justify-between">
            <p className="text-base font-medium">{material.title}</p>
            <Star
              size={20}
              fill={material.isFavorite ? "#FFA725" : "transparent"}
              strokeWidth={material.isFavorite ? 0 : 1}
              onClick={toggleStatus}
            />
          </div>
          <p className="text-gray-400 text-sm">{material.postedAt}</p>
        </div>
      </div>
    </div>
  );
}
