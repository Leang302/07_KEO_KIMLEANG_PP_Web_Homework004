import { EllipsisVertical } from "lucide-react";

export default function CardComponent({ item }) {
  const progressWidths = {
    25: "w-1/4",
    50: "w-2/4",
    75: "w-3/4",
    100: "w-full",
  };
  const progressColors = {
    25: "bg-custom-pink",
    50: "bg-custom-yellow",
    75: "bg-custom-carrot",
    100: "bg-custom-sky-blue",
  };
  const textColors = {
    25: "text-custom-pink",
    50: "text-custom-yellow",
    75: "text-custom-carrot",
    100: "text-custom-sky-blue",
  };
  //calculate date
  const calculateDate = () => {
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const dueDate = new Date(item.dueDate).setHours(0, 0, 0, 0);
    const dateDiff = new Date(dueDate - currentDate);
    const totalDay = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    if (totalDay >= 7) {
      let weeks = Math.floor(totalDay / 7);
      return (weeks === 0 ? 1 : weeks) + (weeks === 1 ? " week" : " weeks");
    }
    return totalDay + (totalDay === 1 ? " day" : " days");
  };
  return (
    <div>
      <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-5">
          {/* date */}
          <p className={`${textColors[item?.progress]} font-medium`}>
            {new Date(item.dueDate).toLocaleDateString("en-us", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
          <EllipsisVertical size={20} color="#374957" />
        </div>
        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400 h-12">
          {item.description}
        </p>
        z{/* progress bar */}
        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>{item.progress}%</p>
        </div>
        <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className={`${progressWidths[item?.progress]} h-2.5 rounded-full ${
              progressColors[item?.progress]
            }`}
          ></div>
        </div>
        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-40 text-center">
            {calculateDate()} left
          </p>
        </div>
      </div>
    </div>
  );
}
