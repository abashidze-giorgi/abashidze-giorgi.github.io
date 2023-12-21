let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "@2cab37";

let item = "";

let btn1 = document.getElementById(btn1);
let btn2 = document.getElementById(btn2);
let btn3 = document.getElementById(btn3);
let btn4 = document.getElementById(btn4);
let btn5 = document.getElementById(btn5);
let btn6 = document.getElementById(btn6);

btn1.addEventListener("click", function(){
if((tg.MainButton.isVisible)){
    tg.MainButton.hide();
}else {
    tg.MainButton.setText("You choose game 1!");
    item = "1";
    tg.MainButton.shoe();
}
});

btn2.addEventListener("click", function(){
    if((tg.MainButton.isVisible)){
        tg.MainButton.hide();
    }else {
        tg.MainButton.setText("You choose game 2!");
        item = "2";
        tg.MainButton.shoe();
    }
});


btn3.addEventListener("click", function(){
    if((tg.MainButton.isVisible)){
        tg.MainButton.hide();
    }else {
        tg.MainButton.setText("You choose game 3!");
        item = "3";
        tg.MainButton.shoe();
    }
});

btn4.addEventListener("click", function(){
    if((tg.MainButton.isVisible)){
        tg.MainButton.hide();
    }else {
        tg.MainButton.setText("You choose game 4!");
        item = "4";
        tg.MainButton.shoe();
    }
});

btn5.addEventListener("click", function(){
    if((tg.MainButton.isVisible)){
        tg.MainButton.hide();
    }else {
        tg.MainButton.setText("You choose game 5!");
        item = "5";
        tg.MainButton.shoe();
    }
});

btn6.addEventListener("click", function(){
    if((tg.MainButton.isVisible)){
        tg.MainButton.hide();
    }else {
        tg.MainButton.setText("You choose game 6!");
        item = "6";
        tg.MainButton.shoe();
    }
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
Telegram.sendData(item);
});

let userCard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${Telegram.initDataUnsafe.first_name} 
${Telegram.initDataUnsafe.last_name}. user id:
${Telegram.initDataUnsafe.user_id}`

userCard.appendChild(p);