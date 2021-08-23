document.getElementById('deposit-button').addEventListener('click', function () {

    //get the amount deposited: 

    const depositInput = document.getElementById('deposit-input');

    const newdepositAmounttext = depositInput.value
    const newdepositAmount = parseFloat(newdepositAmounttext);
    // console.log(depositAmount);

    //update deposit total 

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmounttext = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmounttext);

    const newDepostiTotal = previousDepositAmount + newdepositAmount;

    depositTotal.innerText = newDepostiTotal;

    // update account balance  total:

    const balanceTotal = document.getElementById('total-balance');

    const previousTotalAmounttext = balanceTotal.innerText;

    const previousTotalAmount = parseFloat(previousTotalAmounttext);

    const newTotalbalanceAmount = previousTotalAmount + newdepositAmount;

    balanceTotal.innerText = newTotalbalanceAmount;


    depositInput.value = '';

    //withdraw handler


});

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInputtext = document.getElementById('withdraw-input');
    const withdrawInput = withdrawInputtext.value;
    const withdrawInputvalue = parseFloat(withdrawInput);

    //get value withdraw section

    const Previouswithdrawtotaltext = document.getElementById('widthdraw-total');
    const Previouswithdrawtotal = (Previouswithdrawtotaltext.innerText);

    const newwithdrawTotalvalue = parseFloat(Previouswithdrawtotal);
    const newwithdrawTotal = withdrawInputvalue + newwithdrawTotalvalue;

    Previouswithdrawtotaltext.innerText = newwithdrawTotal;

    //calculate total value after withdraw :

    const balanceTotalvaluetext = document.getElementById('total-balance');

    const balanceTotalvalue = (balanceTotalvaluetext.innerText);

    const Previousalancetotalvalue = parseFloat(balanceTotalvalue);


    const newTotalbalancetotalvalue = Previousalancetotalvalue - withdrawInputvalue;

    balanceTotalvaluetext.innerText = newTotalbalancetotalvalue;

    withdrawInputtext.value = '';










})

