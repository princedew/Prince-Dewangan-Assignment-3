import { Filter } from "lucide-react";
import useSummary from "../hooks/useSummary.js";

const Summary = () => {
  const {data, isPending, isSuccess, isError} = useSummary();
  
  if (isPending) {
    return (
      <div>
        loading ... 
      </div>
    )
  }
  return (
    <div className="rounded-xl bg-white p-5  shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div
          type="button"
          className="text-sm font-semibold text-gray-800 transition hover:text-gray-500"
        >
          Summary
        </div>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-md text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
        >
          <Filter className="h-4 w-4" />
        </button>
      </div>

      {/* Stats */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Total spend</p>
          <p className="text-sm font-semibold text-gray-800">
            ₹{data.summary.total}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Number of expenses</p>
          <p className="text-sm font-semibold text-gray-800">
            {data.summary.count}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Biggest spender</p>
          <p className="text-sm font-semibold text-gray-800">
            {data.summary.biggestSpender.name}
          </p>
        </div>

        <div className="flex items-center justify-between border-gray-100">
          <p className="text-sm text-gray-500">Average expense</p>
          <p className="text-sm font-semibold text-gray-800">
            ₹{data.summary.average}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
