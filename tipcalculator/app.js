var bill = document.querySelector("#bill");
var rating = document.querySelector("#rating");
var btn = document.querySelector(".calc_btn");
var calctip = document.querySelector(".tip-output");

var cost;
var star;
var tip;

btn.addEventListener("click",function(){
    cost = parseFloat(bill.value);
    star=parseInt(rating.value);
    console.log(star);

    if(star=="1")
    {
        tip=0.05*cost;
    }
    if(star=="2")
    {
        tip=0.1*cost;
    }
    if(star=="3")
    {
        tip=0.15*cost;
    }
    if(star=="4")
    {
        tip=0.2*cost;
    }
    if(star=="5")
    {
        tip=0.3*cost;
    }

    tip = tip.toFixed(2);

    calctip.innerHTML=tip;
});

