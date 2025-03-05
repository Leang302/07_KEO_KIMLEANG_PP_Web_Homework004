import { dashboard } from "../../data/dashboard";
import DashboardItemComponent from "./DashboardItemComponent";

export default function DashboardComponent() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

      {/* display summary on each card */}
      <div className="grid grid-cols-4 w-full gap-6">
        {dashboard.map((item) => (
          <DashboardItemComponent item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
