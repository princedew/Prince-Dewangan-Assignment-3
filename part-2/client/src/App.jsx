import { useState } from "react";
import Add from "./components/Add";
import Sidebar from "./components/Sidebar";
import Expense from "./components/Expense";
import Summary from "./components/Summary";
import { Toaster } from 'react-hot-toast';

function App() {
  const [openExpenseInputBox, setOpenExpenseInputBox] = useState(false);

  const handleExpenseInputBox = () => {
    setOpenExpenseInputBox((prev) => (prev ? false : true));
  };

  return (
    <div className="relative grid grid-cols-[300px_1fr_400px] h-screen">
      {openExpenseInputBox ? (
        <Add handleExpenseInputBox={handleExpenseInputBox} />
      ) : (
        <></>
      )}

      <Sidebar handleExpenseInputBox={handleExpenseInputBox} />

      <Expense />

      <Summary />
      <Toaster />
    </div>
  );
}

export default App;
