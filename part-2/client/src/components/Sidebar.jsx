import React, { useEffect } from "react";
import { Plus, Search } from "lucide-react";
import { useApiContext } from "../context/context.jsx";
import useMembers from "../hooks/useMemers.js";

const Sidebar = ({ handleExpenseInputBox }) => {
  const { member, setMember } = useApiContext();
  const { data, isPending, isSuccess, isError } = useMembers();
  useEffect(() => {
    if (isSuccess && data?.members) {
      console.log(data.members);
      
      setMember(data.members)
    }
  }, [data]);

  function deleteMember() {
    
  }

  return (
    <div className="grid h-screen grid-rows-[48px_48px_1fr] gap-2 overflow-hidden rounded-xl bg-gray-50 p-2">
      {/* Header */}
      <div className="relative flex items-center justify-between rounded-lg bg-white px-6 shadow-sm">
        <p className="text-sm font-semibold text-gray-700">Members</p>
        <Plus onClick={handleExpenseInputBox} className="h-5 w-5" />
      </div>

      {/* search bar */}
      <div className="relative rounded-lg bg-white shadow-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search members..."
          className="w-full pl-10 pr-4 py-2.5 text-sm bg-transparent outline-none"
        />
      </div>

      {/* Members */}
      <div className="custom-scrollbar overflow-y-auto rounded-lg bg-white shadow-sm">
        <div className="divide-y divide-gray-100">
          {/* Member */}
          <div className="flex items-center justify-between px-6 py-3 transition hover:bg-gray-100">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-600">
                J
              </div>

              <p className="text-sm font-medium text-gray-700">Joy</p>
            </div>

            <button
              type="button"
              className="rounded-md px-3 py-1.5 text-xs font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600"
            >
              Delete
            </button>
          </div>

          {member.map((mem, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-6 py-3 transition hover:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-600">
                  {mem.name.slice(0, 1).toUpperCase()}
                </div>

                <p className="text-sm font-medium text-gray-700">{mem.name}</p>
              </div>

              <button
                onClick={() => {
                  deleteMember(mem.name);
                }}
                type="button"
                className="rounded-md px-3 py-1.5 text-xs font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
