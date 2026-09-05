import React, { useState } from "react";
import { useApiContext } from "../context/context.jsx";
import ParticitantsInput from "./ParticitantsInput.jsx";
import toast from "react-hot-toast";
import useAddMember from "../hooks/useAddMember.js";
import { expenseInputCheker, memberInputCheker } from "../utils/checker.js";
import useAddExpense from "../hooks/useAddExpense.js";
import { useQueryClient } from "@tanstack/react-query";

const Add = ({ handleExpenseInputBox: toggleAddComponent }) => {
  const queryClient = useQueryClient();
  const {
    mutate: addMemberMutate,
    isPending,
    isSuccess,
    isError,
  } = useAddMember();
  const {
    mutate: addExpenseMutate,
    isPending:isExpMutationPending,
    isSuccess:isExpMutationSuccess,
    isError:isExpenseMutationError,
  } = useAddExpense();
  const { setExpense, member, setMember, expenseFormData, setExpenseFormdata } =
    useApiContext();
  const [isAddExpenseTrue, setIsAddExpenseTrue] = useState(false);
  const [memberFormData, setMemberFormdata] = useState({
    name: "",
    phoneNo: "",
  });
  const [issue, setIssue] = useState([]);

  function handleAddExpense(e) {
    e.preventDefault();
    const issue = expenseInputCheker(expenseFormData, member);
    
    if (issue.length > 0) {
      console.log("[issue] :", issue);
      setIssue(issue);
      return;
    }
    addExpenseMutate(expenseFormData, {
      onSuccess: (data) => { 
        // console.log("addExpenseMutation [data] :", data);
        toast.success("expense added");
        toggleAddComponent();
        setExpense((prev) => [...prev, expenseFormData]);
        queryClient.invalidateQueries({
          queryKey:["summary"]
        })
       },
       onError: (error) => { 
        // console.log("addExpenseMutation [ERROR] :", error.message);
        toast.error("failed to add expense");
        }
    })
  }

  function handleAddMember(e) {
    e.preventDefault();
    const issue = memberInputCheker(memberFormData, member);
    
    if (issue.length > 0) {
      console.log("[issue]", issue);
      setIssue(issue);
      return;
    }

    addMemberMutate({name:memberFormData.name, phoneNo:memberFormData.phoneNo}, {
      onSuccess: () => {
        setMember((prev) => [...prev, memberFormData]);
        toast.success("member added");
        toggleAddComponent();
      },
      onError: (error) => {
        console.log("ERROR addMemberMutate :", error.message);
        toast.error("failed to add member.");
      },
    });
  }

  function toggleAddExpenseAndMember() {
    setIsAddExpenseTrue((prev) => (prev ? false : true));
  }

  return (
    <div className="z-10 absolute top-0 bottom-0 left-0 right-0 border border-gray-200 bg-white p-5 flex items-center">
      <div className="w-1/3 mx-auto border p-4 rounded-lg overflow-y-scoll">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <h2
              onClick={toggleAddExpenseAndMember}
              className={`${isAddExpenseTrue ? "bg-gray-200" : ""} cursor-default mb-4 border rounded-lg p-3 text-base font-semibold text-gray-800`}
            >
              Add Expense
            </h2>
            <h2
              onClick={toggleAddExpenseAndMember}
              className={`${isAddExpenseTrue ? "" : "bg-gray-200"} cursor-default mb-4 border rounded-lg p-3 text-base font-semibold text-gray-800`}
            >
              Add Member
            </h2>
          </div>
          <div>
            <h2
              onClick={toggleAddComponent}
              className={`cursor-default mb-4 rounded-lg p-3 text-base font-semibold text-gray-800`}
            >
              back
            </h2>
          </div>
        </div>
        {isAddExpenseTrue ? (
          <form onSubmit={handleAddExpense} className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500">
                Description
              </label>
              <input
                value={expenseFormData.description}
                onChange={(e) => {
                  setExpenseFormdata({
                    ...expenseFormData,
                    description: e.target.value,
                  });
                }}
                type="text"
                placeholder="e.g. Dinner"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500">
                Amount
              </label>
              <input
                value={expenseFormData.amount}
                onChange={(e) => {
                  setExpenseFormdata({
                    ...expenseFormData,
                    amount: e.target.value,
                  });
                }}
                type="number"
                placeholder="e.g. 1200"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500">
                Paid by
              </label>
              <input
                value={expenseFormData.paidBy}
                onChange={(e) => {
                  setExpenseFormdata({
                    ...expenseFormData,
                    paidBy: e.target.value,
                  });
                }}
                type="text"
                placeholder="e.g. Rahul"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
            </div>

            <ParticitantsInput />

            <div className="text-xs text-red-500 font-medium px-4">
              {issue.map((isu, idx) => (
                <p key={idx}>{isu}</p>
              ))}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
            >
              Add Expense
            </button>
          </form>
        ) : (
          <form onSubmit={handleAddMember} className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500">
                Name
              </label>
              <input
                value={memberFormData.name}
                onChange={(e) => {
                  setMemberFormdata({
                    ...memberFormData,
                    name: e.target.value,
                  });
                }}
                type="text"
                placeholder="e.g. Dinner"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500">
                Phone No.
              </label>
              <input
                value={memberFormData.phoneNo}
                onChange={(e) => {
                  setMemberFormdata({
                    ...memberFormData,
                    phoneNo: e.target.value,
                  });
                }}
                type="number"
                placeholder="e.g. 6005000787"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
            </div>

           <div className="text-xs text-red-500 font-medium px-4">
              {issue.map((isu, idx) => (
                <p key={idx}>{isu}</p>
              ))}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gray-900 px-4 py-2.5 h-10 text-sm font-medium text-white transition hover:bg-gray-700"
            >
              Add Member
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Add;
