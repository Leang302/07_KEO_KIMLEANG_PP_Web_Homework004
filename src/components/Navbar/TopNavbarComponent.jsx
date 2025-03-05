import { Bell, Search } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function TopNavbarComponent({
  assignments,
  setFilteredAssignment,
}) {
  const [nameSearch, setNameSearch] = useState("");
  // handle on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInputChange = (e) => {
    setNameSearch(e.target.value);
  };
  useEffect(() => {
    console.log(nameSearch);

    console.log("Assignment before sort", assignments);
    if (nameSearch !== "") {
      let filteredAssignment = assignments?.filter((assignment) =>
        assignment.name?.toLowerCase().includes(nameSearch)
      );
      console.log("Assignment after sort", filteredAssignment);
      setFilteredAssignment(filteredAssignment);
    } else {
      setFilteredAssignment([]);
    }
  }, [nameSearch]);

  return (
    <div className="grid grid-cols-5 items-center gap-10 content-center">
      <form className="relative col-span-4" onSubmit={handleSubmit}>
        {/* search button */}
        <button className="cursor-pointer">
          <Search className="w-6 h-6 text-primary-text absolute top-3 left-4" />
        </button>

        {/* search input */}
        <input
          name="name"
          type="text"
          onChange={handleInputChange}
          placeholder="Search assignment here"
          className="w-full bg-white py-3 pl-14 pr-5 rounded-xl h-12 border-none focus:border-none focus:ring-0 focus:outline-custom-sky-blue"
        />
      </form>

      <div className="grid grid-cols-4 cols-span-1 content-center">
        {/* notification bell */}
        <div className="relative w-12 h-12 bg-white p-2.5 rounded-full cols-span-1">
          <Bell className="w-7 h-7 text-primary-text" />
          {/* red dot */}
          <div className="bg-red-600 w-2.5 h-2.5 rounded-full absolute top-2 right-3"></div>
        </div>
        {/* profile  */}
        <div className="h-16 rounded-xl bg-white py-2.5 px-3 flex gap-3 items-start col-span-3">
          <img
            src="https://i.pinimg.com/736x/39/2a/50/392a5042102c7d7e4ed87527a2d7e74a.jpg"
            alt="profile image"
            width={34}
            height={34}
            className="rounded-full"
          />

          <div>
            <p className="capitalize text-base">dark moon</p>
            <p className="text-gray-400 text-sm">darkmoon@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
