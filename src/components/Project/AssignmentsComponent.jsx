import { useEffect } from "react";
import AddNewProjectComponent from "./AddNewProjectComponent";
import CardComponent from "./CardComponent";

export default function AssignmentsComponent({ assignments, setAssignments }) {
  // const [assignments, setAssignments] = useState([
  //   {
  //     id: 1,
  //     name: "Title",
  //     description:
  //       "loremasdasdasd asdasd asdasd loremasdasdasd asdasd asdasdloremasdasdasd asdasd asdasdloremasdasdasd asdasd asdasd",
  //     progress: 30,
  //     dueDate: "3/3/2025",
  //   },
  // ]);
  const addAssignment = (assignment) => {
    setAssignments([
      ...assignments,
      { id: assignments.length + 1, ...assignment },
    ]);
  };
  return (
    <div>
      <div className="flex justify-between mb-4">
        {/* assignments  */}
        <h2 className="text-xl font-semibold">Assignments</h2>
        <AddNewProjectComponent addAssignment={addAssignment} />
      </div>
      <div className="grid grid-cols-3 gap-6 justify-items-stretch">
        {assignments?.map((assignment) => (
          <CardComponent item={assignment} key={assignment.id} />
        ))}
      </div>
    </div>
  );
}
