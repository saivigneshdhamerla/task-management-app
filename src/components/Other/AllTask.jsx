import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#353439c3] p-5 rounded mt-5  ">
      <div className=" bg-orange-900 py-2 px-4 flex justify-between rounded mt-2 text-lg">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Accepted Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5">Failed Task</h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {authData.employees.map(function (elem,idx) {
          return (
            <div key={idx} className=" border-2 border-white-400 mb-2 py-2 px-4 flex justify-between rounded mt-2 text-lg">
              <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-violet-600">{elem.taskCount.newTask}</h3>
              <h5 className="text-lg font-medium w-1/5 text-green-600">{elem.taskCount.active}</h5>
              <h5 className="text-lg font-medium w-1/5 text-blue-500">{elem.taskCount.completed}</h5>
              <h5 className="text-lg font-medium w-1/5 text-red-500">{elem.taskCount.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
