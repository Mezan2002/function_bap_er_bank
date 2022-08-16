// step 1 : add event listener on the button
document.getElementById("deposit_btn").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit_input");
  const newDepositValueString = depositInput.value;
  const newDepositValue = parseFloat(newDepositValueString);
  depositInput.value = "";
  const depositInputAmount = document.getElementById("deposit_total");
  const depositInputAmountString = depositInputAmount.innerText;
  const depositInputResult = parseFloat(depositInputAmountString);
  const newDepositTotal = depositInputResult + newDepositValue;
  depositInputAmount.innerText = newDepositTotal;
  const totalBalance = document.getElementById("balance_total");
  const totalBalanceValueString = totalBalance.innerText;
  const totalBalanceValue = parseFloat(totalBalanceValueString);
  const totalBalanceUpdate = totalBalanceValue + newDepositValue;
  totalBalance.innerText = totalBalanceUpdate;
});
