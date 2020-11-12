const tipCalc = () => {

  let bill = document.getElementById("billAmount").value;
  let tipPercent = document.getElementById("tipPercentage").value;
  let tipAmount = bill * (tipPercent / 100);
  let total = tipAmount + Number(bill);
  document.getElementById("tipTotal").value = tipAmount;
  document.getElementById("totalBill").value = total;
}
