import { search, summary } from "./utils.js";

// export let members = [];
// {id: uuid, name: string, phoneNo: string}

// export let expenses = [];
// {id: uuid, description :string, amount: number, paidBy:member-name, participants: [{id: uuid, name: member-name}], createdAt: date}

export let members = [
  {
    id: "member-001",
    name: "Rahul",
    phoneNo: "9876543210",
  },
  {
    id: "member-002",
    name: "Aman",
    phoneNo: "9876543211",
  },
  {
    id: "member-003",
    name: "Priya",
    phoneNo: "9876543212",
  },
  {
    id: "member-004",
    name: "Neha",
    phoneNo: "9876543213",
  },
];

export let expenses = [
  {
    id: "expense-001",
    description: "Dinner",
    amount: 1200,
    paidBy: "Rahul",
    participants: [
      { id: "member-001", name: "Rahul" },
      { id: "member-002", name: "Aman" },
      { id: "member-003", name: "Priya" },
    ],
    createdAt: new Date("2026-08-01T20:00:00"),
  },

  {
    id: "expense-002",
    description: "Movie",
    amount: 800,
    paidBy: "Aman",
    participants: [
      { id: "member-001", name: "Rahul" },
      { id: "member-002", name: "Aman" },
    ],
    createdAt: new Date("2026-08-03T19:00:00"),
  },

  {
    id: "expense-003",
    description: "Groceries",
    amount: 1600,
    paidBy: "Priya",
    participants: [
      { id: "member-001", name: "Rahul" },
      { id: "member-003", name: "Priya" },
      { id: "member-004", name: "Neha" },
    ],
    createdAt: new Date("2026-08-05T17:00:00"),
  },

  {
    id: "expense-004",
    description: "Hotel",
    amount: 2400,
    paidBy: "Neha",
    participants: [
      { id: "member-001", name: "Rahul" },
      { id: "member-002", name: "Aman" },
      { id: "member-003", name: "Priya" },
      { id: "member-004", name: "Neha" },
    ],
    createdAt: new Date("2026-08-07T12:00:00"),
  },

  {
    id: "expense-005",
    description: "Cab",
    amount: 600,
    paidBy: "Rahul",
    participants: [
      { id: "member-001", name: "Rahul" },
      { id: "member-004", name: "Neha" },
    ],
    createdAt: new Date("2026-08-09T10:00:00"),
  },

  {
    id: "expense-006",
    description: "Lunch",
    amount: 900,
    paidBy: "Aman",
    participants: [
      { id: "member-002", name: "Aman" },
      { id: "member-003", name: "Priya" },
      { id: "member-004", name: "Neha" },
    ],
    createdAt: new Date("2026-08-10T13:00:00"),
  },
  {
    id: "expense-001",
    description: "Dinner",
    amount: 1200,
    paidBy: "Rahul",
    participants: [
      { id: "member-001", name: "Rahul" },
      { id: "member-002", name: "Aman" },
      { id: "member-003", name: "Priya" },
    ],
    createdAt: new Date("2026-08-01T20:00:00"),
  },

  {
    id: "expense-002",
    description: "Movie",
    amount: 800,
    paidBy: "Aman",
    participants: [
      { id: "member-001", name: "Rahul" },
      { id: "member-002", name: "Aman" },
    ],
    createdAt: new Date("2026-08-03T19:00:00"),
  },

  {
    id: "expense-003",
    description: "Groceries",
    amount: 1600,
    paidBy: "Priya",
    participants: [
      { id: "member-001", name: "Rahul" },
      { id: "member-003", name: "Priya" },
      { id: "member-004", name: "Neha" },
    ],
    createdAt: new Date("2026-08-05T17:00:00"),
  },

  {
    id: "expense-004",
    description: "Hotel",
    amount: 2400,
    paidBy: "Neha",
    participants: [
      { id: "member-001", name: "Rahul" },
      { id: "member-002", name: "Aman" },
      { id: "member-003", name: "Priya" },
      { id: "member-004", name: "Neha" },
    ],
    createdAt: new Date("2026-08-07T12:00:00"),
  },

  {
    id: "expense-005",
    description: "Cab",
    amount: 600,
    paidBy: "Rahul",
    participants: [
      { id: "member-001", name: "Rahul" },
      { id: "member-004", name: "Neha" },
    ],
    createdAt: new Date("2026-08-09T10:00:00"),
  },

  {
    id: "expense-006",
    description: "Lunch",
    amount: 900,
    paidBy: "Aman",
    participants: [
      { id: "member-002", name: "Aman" },
      { id: "member-003", name: "Priya" },
      { id: "member-004", name: "Neha" },
    ],
    createdAt: new Date("2026-08-10T13:00:00"),
  }
];

export function isNameExist(name) {
  let isExist = false;
  members.forEach((mem) => {
    if (mem.name === name) {
      isExist = true;
    }
  });
  return isExist;
}

export function findMember(id) {
  console.log(1);

  let isExist = null;
  members.forEach((mem) => {
    if (mem.id === id) {
      console.log(2);
      isExist = mem;
    }
  });
  return isExist;
}

export function inExpense(id) {
  if (expenses.length === 0) {
    return false;
  }
  let inExp = false;
  expenses.forEach((exp) => {
    exp.participants.forEach((part) => {
      if (part.id === id) {
        inExp = true;
      }
    });
  });
  return inExp;
}

export function deleteMember(id) {
  let len = members.length;
  members = members.filter((mem) => {
    mem.id !== id;
  });
  if (members.length + 1 === len) {
    return true;
  }
  return false;
}

export function findExpense(id) {
  let found = null;
  expenses.forEach((exp) => {
    if (exp.id === id) {
      found = exp;
    }
  });
  return found;
}

export function deleteExpense(id) {
  const len = expenses.length;
  expenses = expenses.filter((exp) => {
    exp.id !== id;
  });
  if (expenses.length + 1 === len) {
    return true;
  } else {
    return false;
  }
}

export function findExpenseByQuery(paidBy, str, limit, offset) {
  if (paidBy === "") {
    return expenses
  }
  const filteredExp = expenses.filter(
    (exp) => exp.paidBy === paidBy && search(exp.description, str),
  );
  if (limit === "" && offset === "") {
    console.log("filteredExp :", filteredExp);
    return filteredExp;
  }
  if (limit === "") {
    return filteredExp.slice(Number(offset));
  }
  if (offset === "") {
    return filteredExp.slice(0, Number(limit));
  }
  return filteredExp.slice(Number(offset), Number(offset) + Number(limit));
}

export function getSummary() {
  return summary(members, expenses);
}
