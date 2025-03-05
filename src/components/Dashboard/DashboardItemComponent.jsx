export default function DashboardItemComponent({ item }) {
  return (
    <div className="flex gap-5 col-span-1">
      <div className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-full">
        <div className={`p-3 rounded-xl ${item.color}`}>
          <img src={item.icon} alt="file icon" />
        </div>
        <div>
          <p className="text-xl font-semibold">{item.totalTasks}</p>
          <p className="text-gray-400">{item.label}</p>
        </div>
      </div>
    </div>
  );
}
