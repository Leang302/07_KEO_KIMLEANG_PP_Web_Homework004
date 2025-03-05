import { useState } from "react";
import { learningMaterials } from "../../data/learningMaterials";
import FilterComponent from "./FilterComponent";
import MaterialItemComponent from "./MaterialItemComponent";

export default function LearningMaterialsComponent() {
  const [allMaterial, setAllMaterial] = useState(learningMaterials);
  const sort = (sorting) => {
    if (sorting === "A-Z") {
      setAllMaterial(
        [...allMaterial].sort((a, b) => a.title.localeCompare(b.title))
      );
    } else {
      setAllMaterial(
        [...allMaterial].sort((a, b) => b.title.localeCompare(a.title))
      );
    }
  };
  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent sort={sort} />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={24} height={24} />
      </div>

      {/* materials list */}
      {allMaterial.map((item) => (
        <MaterialItemComponent item={item} key={item.id} />
      ))}
    </div>
  );
}
