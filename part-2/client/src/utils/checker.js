export function memberInputCheker(memberFormData, member) {
  const issue = [];

  if (memberFormData.name === "") {
    issue.push("Name can not be empty");
  }
  if (memberFormData.name.length < 3) {
    issue.push("Name too short");
  }
  if (memberFormData.name.includes(" ")) {
    issue.push("Name should not contain spaces");
  }
  member.forEach((mem) => {
    if (
      mem.name.trim().toLowerCase() === memberFormData.name.trim().toLowerCase()
    ) {
      issue.push("Name already exist.");
    }
  });

  if (memberFormData.phoneNo === "") {
    issue.push("Phone no can not be empty");
  } else if (memberFormData.phoneNo.length !== 10) {
    issue.push("Phone no. is not correct.");
  }

  return issue;
}

export function expenseInputCheker(expenseFormData, expense, members) {
  const issue = [];
  const description = expenseFormData.description.trim();
  const paidBy = expenseFormData.paidBy.trim();
  const amount = expenseFormData.amount.trim();

  if (description === "") {
    issue.push("Description can not be empty");
  }

  if (description.length < 3) {
    issue.push("Description too short");
  }

  expense.forEach((exp) => {
    if (
      exp.description.trim().toLowerCase() === description.trim().toLowerCase()
    ) {
      issue.push("Description already exist.");
    }
  });

  if (paidBy === "") {
    issue.push("Paid by can not be empty");
  }

  if (paidBy.length < 3) {
    issue.push("Paid by name too short");
  }

  if (amount === "") {
    issue.push("Amount can not be empty");
  } else {
    expenseFormData.amount.split("").forEach((num) => {
      num = Number(num);
      if (Number.isNaN(num)) {
        issue.push("Amount is not a pure number.");
      }
    });
  }

  for (let i = 0; i < expenseFormData.participants.length; i++) {
    const part = expenseFormData.participants[i];

    if (part.name.trim() === "") {
      issue.push("Name can not be empty");
    } else if (part.name.trim().length < 3) {
      issue.push("Participant name too short");
    }
    const isEmptySpace = part.name.trim().includes(" ");
    if (isEmptySpace) {
      issue.push("Should not be ' '");
    }
  }

  return issue;
}
