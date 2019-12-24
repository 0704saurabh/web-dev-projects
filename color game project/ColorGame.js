var numsquares = 6;
var colors = generaterandomcolors(numsquares);

var squares = document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetbutton = document.getElementById("reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsquares= 3;
	colors = generaterandomcolors(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click", function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numsquares = 6;
	colors = generaterandomcolors(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		}
	}
);



resetbutton.addEventListener("click", function(){
	colors = generaterandomcolors(numsquares);
	messagedisplay.textContent= "";
	pickedcolor=pickcolor();
	colordisplay.textContent = pickedcolor;
	this.textContent = "NEW COLORS";
for(var i=0;i<squares.length;i++)
	{
	squares[i].style.background = colors[i];	
	}
	h1.style.background = "steelblue";
})

colordisplay.textContent= pickedcolor;

for(var i=0;i<squares.length;i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor= this.style.background;
		if(clickedcolor === pickedcolor){
			messagedisplay.textContent="Correct!";
			resetbutton.textContent = "PLAY AGAIN?";
			changecolors(clickedcolor);
			h1.style.background = clickedcolor;
			
		}else{
			this.style.background="#232323";
			messagedisplay.textContent="Try Again";
		}
	});
}

function changecolors(color){
for(var i=0;i<squares.length;i++){
	squares[i].style.background= color;
}

}

function pickcolor(){
	var random= Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolors(num){
	var arr = []
	for(var i=0;i<num;i++)
		{
			arr.push(randomcolor())
		}
	return arr;
}

function randomcolor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}