const loginbtn = document.getElementById("button");
loginbtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transitionArea = document.getElementById("transition-area");
    transitionArea.style.display = "block";
});

const Depositbtn = document.getElementById("addDeposit");
Depositbtn.addEventListener("click", function() {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    const curentDeposit = document.getElementById("curentDeposit").innerText;
    const curentdepositNumber = parseFloat(curentDeposit);
    const totalDeposit = depositNumber + curentdepositNumber;
    document.getElementById("curentDeposit").innerText = totalDeposit;


    const curentBalance = document.getElementById("curentBalance").innerText;
    const curentBalanceNumber = parseFloat(curentBalance);
    const totalBalance = depositNumber + curentBalanceNumber;
    document.getElementById("curentBalance").innerText = totalBalance;
    document.getElementById("depositAmount").value = "";


});
//-----------------------------------------
const addWithdrawbtn = document.getElementById("addWithdraw");
addWithdrawbtn.addEventListener("click", function() {
    const Withdrawbalance = document.getElementById("Withdrawbalance").value;
    const WithdrawbalanceNumber = parseFloat(Withdrawbalance);
    const withdrawmoney = document.getElementById("withdrawmoney").innerText;
    const withdrawmoneyNumber = parseFloat(withdrawmoney);
    const totalwithdraw = WithdrawbalanceNumber + withdrawmoneyNumber;
    document.getElementById("withdrawmoney").innerText = totalwithdraw;



    const curentBalance = document.getElementById("curentBalance").innerText;
    const curentBalanceNumber = parseFloat(curentBalance);
    const totalBalance = curentBalanceNumber - WithdrawbalanceNumber;
    document.getElementById("curentBalance").innerText = totalBalance;
    document.getElementById("Withdrawbalance").value = "";

});