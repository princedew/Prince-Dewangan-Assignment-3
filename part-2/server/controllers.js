import { Router } from "express";
import {
  members,
  expenses,
  inExpense,
  findExpenseByQuery,
  findExpense,
  getSummary,
  findMember,
  isNameExist,
  deleteMember,
  deleteExpense,
} from "./db.js";

const appRouter = Router();

appRouter.get("/members", (req, res) => {
  try {
    console.log("all-members :", members);
    return res.status(200).json({ members: members });
  } catch (error) {
    console.log("ERROR :", error);
    return res.status(500).json({ error: "server error" });
  }
});

appRouter.post("/members", (req, res) => {
  try {
    const { name, phoneNo } = req.body;

    if (!name || !phoneNo) {
      return res.status(400).json({ error: "name or phone no is missing" });
    }

    if (isNameExist(name)) {
      return res.status(409).json({ error: "name already exist" });
    }

    const member = {
      id: crypto.randomUUID(),
      name: name,
      phoneNo: phoneNo,
    };
    console.log("member :", member);

    members.push(member);
    return res.status(201).json({ message: "member added" });
  } catch (error) {
    console.log("ERROR :", error);
    return res.status(500).json({ error: "server error" });
  }
});

appRouter.delete("/members/:id", (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    if (!id) {
      return res.status(204).json({ error: "missing required data" });
    }
    const member = findMember(id);
    if (!member) {
      return res.status(404).json({ error: "member not found" });
    }
    const isMemberInExpense = inExpense(member.id);
    if (isMemberInExpense) {
      return res.status(409).json({ error: "member is in expense" });
    }
    const isDeleted = deleteMember(id);
    if (isDeleted) {
      return res.status(204);
    } else {
      return res.status(409).json({ error: "failed to delete member" });
    }
  } catch (error) {
    console.log("ERROR :", error);
    return res.status(500).json({ error: "server error" });
  }
});

appRouter.get("/expenses/:id", (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "missing required data" });
    }
    const expense = findExpense(id);

    if (!expense) {
      return res.status(404).json({ error: "expense not found" });
    }

    return res.status(200).json({ expense: expense });
  } catch (error) {
    console.log("ERROR :", error);
    return res.status(500).json({ error: "server error" });
  }
});

appRouter.post("/expenses", (req, res) => {
  try {
    const { description, amount, paidBy, participants } = req.body;

    console.log("body :", req.body);
    if (!description || !amount || !paidBy || participants.length === 0) {
      return res.status(400).json({ error: "missing required data" });
    }
    console.log(2);
    const expense = {
      id: crypto.randomUUID(),
      description: description,
      amount: amount,
      paidBy: paidBy,
      participants: participants,
      createdAt: Date.now(),
    };
    console.log("id :", expense.id);

    expenses.push(expense);
    return res.status(200).json({ message: "expense added" });
  } catch (error) {
    console.log("ERROR :", error);
    return res.status(500).json({ error: "server error" });
  }
});

appRouter.delete("/expenses/:id", (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ error: "expense notfound" });
    }
    const isDelete = deleteExpense(id);
    if (isDelete) {
      return res.status(204);
    } else {
      return res.status(409).json({ error: "failed to delete expense" });
    }
  } catch (error) {
    console.log("ERROR :", error);
    return res.status(500).json({ error: "server error" });
  }
});

appRouter.get("/expenses", (req, res) => {
  try {
    const { paidBy, search, limit, offset } = req.query; //  every thing will be string.
    if (
      paidBy === undefined ||
      search === undefined ||
      limit === undefined ||
      offset === undefined
    ) {
      return res.status(400).json({ error: "missing required data" });
    }
    const expense = findExpenseByQuery(paidBy, search, limit, offset);
    console.log("expense :", expense);
    if (expense.length === 0) {
      return res.status(404).json({ error: "expense not found" });
    }
    return res.status(200).json({ expense: expense });
  } catch (error) {
    console.log("ERROR :", error);
    return res.status(500).json({ error: "server error" });
  }
});

appRouter.get("/summary", (req, res) => {
  try {
    const summary = getSummary();
    return res.status(200).json({ summary: summary });
  } catch (error) {
    console.log("ERROR :", error);
    return res.status(500).json({ error: "server error" });
  }
});

export default appRouter;
