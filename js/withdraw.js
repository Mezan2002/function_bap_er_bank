document.getElementById("withdraw_btn").addEventListener("click", function () {
  const withdrawInputField = document.getElementById("withdraw_input");
  const withdrawInputString = withdrawInputField.value;
  const withdrawInput = parseFloat(withdrawInputString);
  withdrawInputField.value = "";
  const withdrawTotal = document.getElementById("withdraw_total");
  const withdrawTotalString = withdrawTotal.innerText;
  const previousWithdrawValue = parseFloat(withdrawTotalString);
  const previousWithdrawValueAdd = withdrawInput + previousWithdrawValue;
  withdrawTotal.innerText = previousWithdrawValueAdd;
  const totalBalance = document.getElementById("balance_total");
  const totalBalanceValueString = totalBalance.innerText;
  const totalBalanceValue = parseFloat(totalBalanceValueString);
  const totalBalanceAfterWithdraw = totalBalanceValue - withdrawInput;
  totalBalance.innerText = totalBalanceAfterWithdraw;
  if (withdrawInput > totalBalance) {
    alert("Sorry ! Baper Bank a Eto Taka Nai.");
    return;
  }
});
