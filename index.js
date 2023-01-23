let count = 0;

const countLabel = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const add5Btn = document.getElementById("add5");
const take5Btn = document.getElementById("take5");
const randomBtn = document.getElementById("randomNum");


function add5(){
      count+=5;
      countLabel.innerText = count;
}

function increaseCount(){
      count+=1;
      countLabel.innerText = count;
}

function decreaseCount(){
      count-=1;
      countLabel.innerText = count;
}

function take5(){
      count-=5;
      countLabel.innerText = count;
}

function randomNum(){
      let random = Math.floor(Math.random()*5001);
      count = random;
      countLabel.innerText = count;
}

function resetCount(){
      count=0;
      countLabel.innerText = count;
      window.alert("Count has been reset!");
}

document.addEventListener("DOMContenLoaded", begin());

function begin(){

add5Btn.addEventListener('click', () =>{
      add5();
});

increaseBtn.addEventListener('click', () =>{
      increaseCount();
});

decreaseBtn.addEventListener('click', () =>{
      decreaseCount();
});

take5Btn.addEventListener('click', () =>{
      take5();
});

randomBtn.addEventListener('click', () =>{
      randomNum();
});

resetBtn.addEventListener('click', () =>{
      resetCount();
});
}





