let count = 0;

const countLabel = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const add5Btn = document.getElementById("plus5");
const take5Btn = document.getElementById("minus5");
const randomBtn = document.getElementById("randomNum");

function randomNum(){
      let random = Math.floor(Math.random()*1001);
      count = random;
      countLabel.innerText = count;
}

function decreaseCount(){
      count-=1;
      countLabel.innerText = count;
}

function increaseCount(){
      count+=1;
      countLabel.innerText = count;
}

function add5(){
      count+=5;
      countLabel.innerText = count;
}

function take5(){
      count-=5;
      countLabel.innerText = count;
}

function resetCount(){
      count = 0;
      countLabel.innerText = count;
      window.alert("Count has been reset!");
}



document.addEventListener("DOMContenLoaded", begin());

function begin(){
decreaseBtn.addEventListener('click', () =>{
      decreaseCount();
});

increaseBtn.addEventListener('click', () =>{
      increaseCount();
});

resetBtn.addEventListener('click', () =>{
      resetCount();
});

add5Btn.addEventListener('click', () =>{
      add5();
});

take5Btn.addEventListener('click', () =>{
      take5();
});

randomBtn.addEventListener('click', () => {
      randomNum();
})
}





