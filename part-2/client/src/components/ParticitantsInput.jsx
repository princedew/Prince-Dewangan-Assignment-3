import { Plus, Trash2 } from "lucide-react";
import { useApiContext } from "../context/context";

const ParticitantsInput = () => {
  // {description :string, amount: number, paidBy:member-name, participants: [{id: uuid, name: member-name}]}
  const { expenseFormData, setExpenseFormdata } = useApiContext();

  function addInput() {
    const newPart = { id: crypto.randomUUID(), name: "" };
    setExpenseFormdata((prev) => ({
      ...prev,
      participants: [...prev.participants, newPart],
    }));
  }

  function removeInput(id) {
    const filteredPart = expenseFormData.participants.filter(
      (part) => part.id !== id,
    );
    setExpenseFormdata((prev) => ({ ...prev, participants: filteredPart }));
  }

  function handleChangeParticipants(e, id) {
    e.preventDefault();
    const part = expenseFormData.participants.map((part) => {
      if (part.id === id) {
        return { id: part.id, name: e.target.value };
      }
      return part;
    });
    setExpenseFormdata((prev) => ({
      ...prev,
      participants: part,
    }));
  }

  return (
    <div>
      <div className="flex justify-between">
        <label className="mb-1 block text-xs font-medium text-gray-500">
          Participants
        </label>
        <Plus onClick={addInput} />
      </div>
      {expenseFormData.participants.map((part, idx) => (
        <div key={part.id} className="flex mb-2 gap-2">
          <input
            value={part.name}
            onChange={(e) => {
              handleChangeParticipants(e, part.id);
            }}
            type="text"
            placeholder="e.g. Bhola"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
          />
          <button>
            <Trash2
              width={20}
              onClick={() => {
                removeInput(part.id);
              }}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ParticitantsInput;
