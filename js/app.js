 //* decreaseBtn
 let decreaseBtn= document.querySelector(`.decreaseBtn`)
  let output= document.querySelector(`.output`);


function decrease(){
    let newValue= Number(output.value);
    if( newValue == 0){
      return false
    }
    newValue= newValue-1;
    output.value= newValue;
    
}

  decreaseBtn.addEventListener(`click`,decrease);

  //* increaseBtn

   let increaseBtn= document.querySelector(`.increaseBtn`);


    function increase(){
      let newValue= Number(output.value);
      newValue= newValue+1 ;
      output.value= newValue;
    }

   increaseBtn.addEventListener(`click`,increase);

   //*  Reset


   let Reset= document.querySelector(`.reset`);

function reset(){
  let newValue= Number(output.value);
  newValue= 0;
  output.value= newValue;

}

   Reset.addEventListener(`click`, reset);

//* rangeslider
  
let slider= document.querySelector(`.slider`)
let result= document.querySelector(`.rangeslider .output h1 span`)  

function updatePrice(){
  let newValue= slider.value
  result.innerHTML= newValue
}  

slider.addEventListener(`input`, updatePrice)

//* colorchanger

let colorChanger= document.querySelector(`.colorChanger`)

  let body= document.querySelector(`body`);

 function colorChange(){
  let red= Math.round(Math.random()*255);
  let green= Math.round(Math.random()*255);
  let blue= Math.round(Math.random()*255);

  body.style.backgroundColor= `rgb(${red}, ${green}, ${blue})`
 }
colorChanger.addEventListener(`click`, colorChange);

//* hover

let box= document.querySelector(`.box`);
 let front= box.document.querySelector(`.front`);
 let back= box.document.querySelector(`.back`);


 function changeImageFront(){
  console.log(box.classList)
 }
 box.addEventListener(`mouseenter`,changeImageFront);



 