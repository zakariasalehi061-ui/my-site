

let count = 0;
let total=0;
let cartcount = document.getElementById("cart-count");
let totalprice = document.getElementById("total-price");

let buttons=document.querySelectorAll(".buy-btn");
buttons.forEach(function(btn){
    btn.addEventListener("click",function(){
        let price = btn.getAttribute("data-price");
        count++;
        total +=Number(price);
        cartcount.innerText=count;
        totalprice.innerText=total;
    });
});