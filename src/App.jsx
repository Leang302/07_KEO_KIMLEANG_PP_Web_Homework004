import { useState, useContext, createContext, useEffect } from "react";
import "./App.css";
import DashboardComponent from "./components/Dashboard/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterial/LearningMaterialsComponent";
import TopNavbarComponent from "./components/Navbar/TopNavbarComponent";
import AssignmentsComponent from "./components/Project/AssignmentsComponent";
import SidebarComponent from "./components/Sidebar/SidebarComponent";

function App() {
  //sample data
  const [assignments, setAssignments] = useState([]);
  const [filteredAssignment, setFilteredAssignment] = useState([]);
  return (
    <div className="grid grid-cols-6 bg-light-gray h-[100vh] overflow-hidden">
      {/* side bar */}
      <aside className="col-span-1 h-[100vh]">
        <SidebarComponent />
      </aside>

      <div className="col-span-5 p-6 ">
        {/* top navbar with search and profile */}
        <header>
          <TopNavbarComponent
            assignments={assignments}
            setFilteredAssignment={setFilteredAssignment}
            key={1}
          />
        </header>
        {/* main dashboard content */}
        <main className="grid grid-cols-5 mt-10 gap-10">
          {/* left side: dashboard,assignment */}
          <section className="col-span-4 h-[90vh] overflow-y-auto no-scrollbar mb-6">
            <DashboardComponent />
            {/* assignment and new project */}
            <section className="mt-10 mb-5">
              <AssignmentsComponent
                assignments={
                  filteredAssignment.length > 0
                    ? filteredAssignment
                    : assignments
                }
                setAssignments={setAssignments}
              />
            </section>
          </section>
          {/* right side: learning materials */}
          <aside className="col-span-1">
            <LearningMaterialsComponent />
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
