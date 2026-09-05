import { createContext, useContext, useState } from "react";
import { expenseInputCheker, memberInputCheker } from "../utils/checker";
import useAddMember from "../hooks/useAddMember";

const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [member, setMember] = useState([]);
  const [expense, setExpense] = useState([]);
  const [expenseFormData, setExpenseFormdata] = useState({
    description: "",
    amount: "",
    paidBy: "",
    participants: [{ id: crypto.randomUUID(), name: "" }],
  });

  return (
    <ApiContext.Provider
      value={{
        member,
        setMember,
        expense,
        setExpense,
        expenseFormData,
        setExpenseFormdata,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);
