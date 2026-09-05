import React, { useEffect, useState } from "react";
import { useApiContext } from "../context/context";
import { Search, ChevronDown, Trash2, Filter } from "lucide-react";
import useExpense from "../hooks/useExpense";

const Expense = () => {
  const { expense, setExpense } = useApiContext();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSearchFilter, setOpenSearchFilter] = useState(false);
  const [expenseFilter, setExpenseFilter] = useState({
    paidBy: "",
    search: "",
    limit: "",
    offset: "",
  });
  const { data, isPending, isSuccess, isError } = useExpense(
    expenseFilter.paidBy,
    expenseFilter.search,
    expenseFilter.limit,
    expenseFilter.offset,
  );
  useEffect(() => {
    if (isSuccess && data?.expense) {
      setExpense(data.expense);
    }
  }, [isSuccess, data, setExpense]);

  return (
    <div className="grid grid-cols-2 gap-2 px-2 h-screen overflow-y-scroll custom-scrollbar content-start shadow-sm ">
      <div className="col-span-full h-fit my-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search expenses..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
          />
          <Filter
            // onClick={setOpenSearchFilter((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
          />
          {openSearchFilter && (
            <div
              className="absolute right-0 top-full z-20 mt-2 w-48 rounded-lg border border-gray-200 bg-white p-2 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-50">
                <span className="text-sm text-gray-700">name</span>
                <span className="text-sm font-medium text-gray-800">450</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {isPending ? (
        <div>loading ...</div>
      ) : (
        expense.map((expense) => (
          <div
            key={expense.id}
            className="relative rounded-xl h-fit border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-5">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Description
              </p>
              <p className="mt-1 text-sm font-medium text-gray-800">
                {expense.description}
              </p>
            </div>
            <div className="absolute top-4 right-4 p-1.5 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition">
              <Trash2 className="h-4 w-4" />
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-4">
              <div>
                <p className="text-xs text-gray-400">Amount</p>
                <p className="mt-1 font-semibold text-gray-800">
                  ₹{expense.amount}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Paid by</p>
                <p className="mt-1 font-medium text-gray-800">
                  {expense.paidBy}
                </p>
              </div>

              <div className="relative">
                <p className="text-xs text-gray-400">Split between</p>

                <div
                  className="mt-1 flex items-center gap-2 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();

                    setOpenDropdown(
                      openDropdown === expense.id ? null : expense.id,
                    );
                  }}
                >
                  <p className="font-medium text-gray-800">
                    {expense.participants.length} people
                  </p>

                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === expense.id ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openDropdown === expense.id && (
                  <div
                    className="absolute left-0 top-full z-20 mt-2 w-48 rounded-lg border border-gray-200 bg-white p-2 shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {expense.participants.map((mem) => (
                      <div
                        key={mem.name}
                        className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-50"
                      >
                        <span className="text-sm text-gray-700">
                          {mem.name}
                        </span>

                        <span className="text-sm font-medium text-gray-800">
                          ₹{mem.share}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Expense;
