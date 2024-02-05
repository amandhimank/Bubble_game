// RANDOM NUMBER KAISE NIKALTE HAI 
// Math.random()   =>   between 0 and 1 dega [but excluding 0 and 1]
// AGAR MEIN Math.randome() ko multiply krddu 10 se toh 0 se 9 tk ke number miljayenge
// lekin isse toh point mein aayega number ==> use karenge Math.floor()

var pbtm = document.querySelector("#pbottom");
var timer = 60;
var score = 0;
var hit = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit(){
    hit = Math.floor(Math.random()*10 + 1);
    document.querySelector("#hitVal").textContent = hit;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            pbtm.innerHTML = "<h1>Game Over!</h1>";
        }
    }, 1000);
}

function makeBubble(){
    var clutter = "";
    for(var i = 0; i < 140; i++){
        var rn = Math.floor(Math.random()*10 + 1);
        clutter += `<div class="bubble">${rn}</div>`; 
    }
    pbtm.innerHTML = clutter;
}


// event bubbling -
// jispe click karoge wo element par event raise hoga, aur event listener naa milne par, event element ke parent par listener dhoondega, wahan bhi naa milne par, event parent ke parent ke parent par listener dhoondega 

// yahan bubble ka parent kaun hai -> "pbtm", toh hum pbtm par listener laga denge
// aisa kyu krr rhe hai ??? ==> dekho click kispe karenge ?? -> bubble pe toh, bubble pe lagana chahiye listener but yahan ek bubble nahi hai bahut saare hai sab pe thodi lagayenge, toh hum kya krr rhe hai bubble ke parent pe listener laga rhe hai, usse kya hoga??? => koi bhi bubble pe click hoga toh bubble pe toh koi listener nahi milega => fhir wo uske parent pe dhoondega listener #pbtm par ==> aur jab bubble ka parent ek hii hai


// jab pbtm kahin bhi click hoga toh yeh function chalega
pbtm.addEventListener("click", function(details){
    // target => jispe click hua tha wo hai 
    // toh bubble click krunga toh target kya hoga ===> "<div class="bubble">7</div>" yeh wala bubble click hua tha toh target ke ander yeh puri value hogi
    // details.target.textContent ==> isse mujhe bus wo text milega jo target ke ander likha hai ==> yahan 7 likha hai
    // AUR HAMESHA WO STRING KE FORMAT MEIN MILEGA YAHAN 7, STRING HAI NUMBER NAHI HAI
    // convert kaise karenge ===> Number(iske wo text daal denge)
    // console.log(details.target.textContent);
    // console.log(Number(details.target.textContent)); // ab 7 number hoga
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === hit){
        increaseScore();
        makeBubble();
        getNewHit();
    }

})

makeBubble();
runTimer();
getNewHit();