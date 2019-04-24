var numSquares=6;
var colors=generateRandomColors(numSquares);

var squares=document.querySelectorAll(".square")
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset")
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
easyBtn.addEventListener("click",function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numSquares=3;
colors=generateRandomColors(numSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
message.textContent="";
for(var i=0;i<squares.length;i++){
  if(colors[i]){
     squares[i].style.backgroundColor=colors[i];
    }else{
       squares[i].style.display="none";
  }
}
h1.style.backgroundColor="steelblue";

});

hardBtn.addEventListener("click",function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares=6;
  colors=generateRandomColors(numSquares);
  message.textContent="";
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
       squares[i].style.display="block";
  
}
h1.style.backgroundColor="steelblue";

  });

resetButton.addEventListener("click",function(){
  colors=generateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  this.textContent="New Colors"
  message.textContent="";
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
  }
h1.style.backgroundColor="steelblue";
  
});


colorDisplay.textContent=pickedColor;
for( var i=0; i<squares.length; i++){
  squares[i].style.backgroundColor=colors[i];
  squares[i].addEventListener("click",function(){
    var clickedColor=this.style.backgroundColor;
    if(clickedColor===pickedColor){
      message.textContent="Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor=clickedColor;
      resetButton.textContent="Play Again?";
    }
    else{
      message.textContent="Try Again";
      this.style.backgroundColor="#232323";
    }
  });
}
function changeColors(color){
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=color;
  }
}

function pickColor(){
   random=Math.floor(Math.random()*colors.length)
   return colors[random];
}

function generateRandomColors(num){
  var arr=[];
 for(var i=0; i<num; i++){
  arr.push(randomColor()) ;
 }

  return arr;
}

function randomColor(){
             var r= Math.floor(Math.random()*256);
             var g= Math.floor(Math.random()*256);
             var b= Math.floor(Math.random()*256);
            
    return  "rgb("+ r+", "+ g +", " + b +")";
}