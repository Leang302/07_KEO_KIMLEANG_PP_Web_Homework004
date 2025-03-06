import { Plus } from "lucide-react";
import { useState } from "react";
export default function AddNewProjectComponent({ addAssignment }) {
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    dueDate: false,
    progress: false,
  });
  const lorem =
    "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequuntur dolore distinctio ab enim pariatur hic incidunt provident, ipsa tenetur accusantium doloremque veniam beatae deserunt ratione nulla repellat blanditiis optio.";
  const [assignment, setAssignment] = useState({
    name: "",
    dueDate: "",
    progress: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {
      name: assignment?.name?.trim() ? "" : "*Project name is required.",
      dueDate: assignment?.dueDate
        ? ""
        : "*Please choose the deadline of your project.",
      progress: assignment?.progress?.trim()
        ? ""
        : "*Please select your project progress.",
    };
    setErrors(newErrors);
    //validate all field
    if (!newErrors.name && !newErrors.dueDate && !newErrors.progress) {
      const currentDate = new Date().setHours(0, 0, 0, 0);
      const dueDate = new Date(assignment.dueDate).setHours(0, 0, 0, 0);

      if (!(dueDate >= currentDate)) {
        newErrors.dueDate = "*Selected date cannot be lower than current date";
        setErrors(newErrors);
        return;
      }
      addAssignment({
        ...assignment,
        description: assignment?.description ? assignment?.description : lorem,
      });
      toggleModal();
    }
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);

    setAssignment({});
    setErrors({ name: false, dueDate: false, progress: false });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAssignment({ ...assignment, [name]: value });
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className=" text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500  font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500  dark:focus:ring-custom-sky-blue-500  flex items-center gap-2"
        type="button"
      >
        <Plus size={22} /> <span className="text-base">New Project</span>
      </button>
      {/* Modal */}
      {isOpen && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="overflow-hidden fixed flex items-center left-0 z-50 justify-center  w-full md:inset-0  h-full"
        >
          {/* Backdrop */}
          <div
            id="backdrop"
            className="w-full h-full bg-black opacity-35 absolute "
            onClick={toggleModal}
          ></div>
          {/* Modal Content */}
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-2xl shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3
                  className="text-lg font-semibold text-gray-900 dark:text-white"
                  onClick={toggleModal}
                >
                  Create New Project
                </h3>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  {/* project name */}
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Project Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={handleInputChange}
                      className={`border ${
                        errors.name
                          ? " border-red-600"
                          : "bg-gray-50 border-gray-300"
                      } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                      placeholder="Type Project Name"
                    />
                    {/* error msg */}
                    <p
                      className={`${
                        !errors?.name ? "" : "hidden"
                      }text-md text-red-600 dark:text-red-500 h-4`}
                    >
                      {errors.name}
                    </p>
                  </div>
                  {/* Due date */}
                  <div className="col-span-2">
                    <label
                      htmlFor="dueDate"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Due Date
                    </label>
                    <input
                      type="date"
                      name="dueDate"
                      id="dueDate"
                      onChange={handleInputChange}
                      className={`border ${
                        errors.dueDate
                          ? " border-red-600"
                          : "bg-gray-50 border-gray-300"
                      } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    />
                    {/* error msg */}
                    <p
                      className={`${
                        !errors?.dueDate ? "" : "hidden"
                      }text-md text-red-600 dark:text-red-500 h-4`}
                    >
                      {errors.dueDate}
                    </p>
                  </div>
                  {/* progress */}
                  <div className="col-span-2">
                    <label
                      htmlFor="progress"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Progress
                    </label>
                    <select
                      name="progress"
                      id="progress"
                      className={`border ${
                        errors.progress
                          ? " border-red-600"
                          : "bg-gray-50 border-gray-300"
                      } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                      onChange={handleInputChange}
                    >
                      <option defaultValue="">Select Progress</option>
                      <option value="100">100</option>
                      <option value="75">75</option>
                      <option value="50">50</option>
                      <option value="25">25</option>
                    </select>
                    {/* error msg */}
                    <p
                      className={`${
                        !errors?.progress ? "" : "hidden"
                      }text-md text-red-600 dark:text-red-500 h-4`}
                    >
                      {errors.progress}
                    </p>
                  </div>
                  {/* description */}
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Project Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write product description here"
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-4 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
