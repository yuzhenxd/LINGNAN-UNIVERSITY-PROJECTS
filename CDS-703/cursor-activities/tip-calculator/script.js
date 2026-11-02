(function () {
  const billInput = document.getElementById("bill");
  const tipSelect = document.getElementById("tip-percent");
  const peopleInput = document.getElementById("people");
  const calculateBtn = document.getElementById("calculate");
  const resultEl = document.getElementById("result");

  function formatMoney(value) {
    return value.toFixed(2);
  }

  function showMessage(message, type) {
    resultEl.textContent = message;
    resultEl.classList.remove("error", "success");
    if (type) {
      resultEl.classList.add(type);
    }
  }

  function parseBill(raw) {
    const trimmed = String(raw).trim();
    if (trimmed === "") {
      return { ok: false, message: "Please enter a bill amount." };
    }
    const bill = Number(trimmed);
    if (Number.isNaN(bill)) {
      return { ok: false, message: "Bill amount must be a valid number." };
    }
    if (bill < 0) {
      return { ok: false, message: "Bill amount cannot be negative." };
    }
    return { ok: true, bill };
  }

  function parsePeople(raw) {
    const trimmed = String(raw).trim();
    if (trimmed === "") {
      return { ok: false, message: "Please enter the number of people." };
    }
    const people = Number(trimmed);
    if (!Number.isInteger(people) || Number.isNaN(people)) {
      return { ok: false, message: "Number of people must be a whole number." };
    }
    if (people <= 0) {
      return { ok: false, message: "Number of people must be at least 1." };
    }
    return { ok: true, people };
  }

  function calculate() {
    const billResult = parseBill(billInput.value);
    if (!billResult.ok) {
      showMessage(billResult.message, "error");
      return;
    }

    const peopleResult = parsePeople(peopleInput.value);
    if (!peopleResult.ok) {
      showMessage(peopleResult.message, "error");
      return;
    }

    const tipPercent = Number(tipSelect.value);
    const tipAmount = billResult.bill * (tipPercent / 100);
    const total = billResult.bill + tipAmount;
    const perPerson = total / peopleResult.people;

    showMessage(
      `Tip: $${formatMoney(tipAmount)}\n` +
        `Total: $${formatMoney(total)}\n` +
        `Per person: $${formatMoney(perPerson)}`,
      "success"
    );
  }

  calculateBtn.addEventListener("click", calculate);
})();
