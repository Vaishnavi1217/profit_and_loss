var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-btn");
var outputDiv = document.querySelector("#output-div");

function profitLoss(initial,quantity,current){
    if(initial>current){
        var loss = (initial-current)*quantity
        var loss_percent = (loss/initial)*100
        showMsg("Oops!The loss is "  + " " +loss + " and the percentage of the loss is " + " " + loss_percent + "%")
    }
    else if(initial<current){
        var profit = (current-initial)*quantity
        var profit_percent = (profit/initial)*100
        showMsg("Yay!The profit is" +" " +profit + " and the percentage of the profit is" +" " +profit_percent +"%")
    }
    else{
        showMsg("no gain no pain;no pain no gain")
    }
}

function checkhandler(){
    var initialP = initialPrice.value;
    var quant = stocksQuantity.value;
    var curr = currentPrice.value;

    profitLoss(initialP,quant,curr)
}

function showMsg(msg){
    outputDiv.innerText=msg
}

checkBtn.addEventListener("click",checkhandler)

