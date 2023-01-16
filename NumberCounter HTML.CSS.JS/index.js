let count = 0;

const countLabel = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");




function decreaseCount(){
      count-=1;
      countLabel.innerText = count;
}

function increaseCount(){
      count+=1;
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
}





