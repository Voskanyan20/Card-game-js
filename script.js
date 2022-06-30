// function g(){
//     div.style.background = "red"
// }
// function f(){
//     div.style.background = "pink"
// }

// function k(e){
//     var x = e.clientX
//     var y = e.clientY
//     console.log(x,y)
// }

// unenq mihat mec div ekrani chapov ev vortex click anenq aydtex stexci et kordinatnerov u et chaperov div 
// var dd = document.getElementById("dd")
// var x = 0
// var y = 0
// var t = 0
// function f(e){
//     x = e.clientX
//     y = e.clientY
//     console.log(x,y)
//     var t = Math.floor(Math.random() * 255)
// }
// function j(){
//     var xx = document.createElement("div")
//         xx.style.marginTop = y + "px"
//         xx.style.marginLeft = x + "px"
//         xx.style.width = x + "px"
//         xx.style.height = y + "px"
//         // xx.style.backgroundColor = "gold"
//         xx.style.position = "absolute"
//         xx.style.backgroundColor = "rgb("+x+" "+y+" "+t+")"
//     dd.appendChild(xx)
// }


// var x = document.getElementById("div1")
// var y = document.getElementById("div2")
// xx = 0
// yy = 0
// t = 0
// function v(e){
//     xx = e.clientX
//     yy = e.clientY
//     console.log(xx,yy)
//     var t = Math.floor(Math.random() * 240)
//     y.style.backgroundColor = "rgb("+yy+" "+xx+" "+t+")"
// }

// function f(z){
    
// }
// function h(ee){
//     ee.style.backgroundColor = "grey"
// }
// var x = 0
// function f(zz){
//     x++
//     if(x == 5){
//         var y = document.createElement("div")
//         y.style.width = "100px"
//         y.style.height = "100px"
//         y.style.backgroundColor = "red"
//         y.style.marginBottom = "10px"
//         document.body.appendChild(y)
//         x = 0
//     }
    
// }

// function j(vv){
//     vv.style.backgroundColor = "grey"
// }



// unenq 10/10 nkar ur mknik@ tanenq tox nkar@ het@ ga

// function f(e){
//     var z = document.getElementById("apple")
//     x = e.clientX
//     y = e.clientY

//     z.style.marginTop = y + "px"
//     z.style.marginLeft = x + "px"

//     console.log(x,y)
// }


// unenq 2 div voronc mej kan 5 -4 nkarner ayd nkarner@ antesaneli petq e linen sexmelis ayd nkarnerin ete erku sexmac nkarner@ hamnknen tox mnan tesaneli 


var imgDiv = document.querySelectorAll(".img__div")
for(var i = 0;i < imgDiv.length;i++){
    imgDiv[i].setAttribute("onclick","f(this)")
}

var arr = []
var arr2 = []
function  f(z){
	z.style.background = "none";
	arr.push(z.innerHTML);
	console.log(arr)
	var imgs = document.querySelectorAll(".img__div");
	if(arr[0] == arr[1]){
	    for (var j = 0; j < imgs.length; j++) {
			if(arr[0] == imgs[j].innerHTML){
				imgs[j].parentNode.style.display = 'none';
			}
			
        }
		arr.shift()
			arr.pop()
    }
						
}







// var images = document.getElementsByClassName("imgg")

// var divs = document.querySelectorAll(".divv")
// var arr = [];
// var array = [];

// var y = 1
// var z = 2
// var c = 3
// var v = 4
// function f(x){
//     x.style.display = "none"
//     arr.push(y)
//     console.log(arr)
//     if(arr[0] == arr[1]){
//     for(var i = 0;i < images.length;i++){
//         images[i].style.display = "none" 
//     }
//     }
// }
// function j(q){
//     q.style.display = "none"
//     arr.push(z)
//     console.log(arr)
// }
// function g(w){
//     w.style.display = "none"
//     arr.push(c)
//     console.log(arr)
// }
// function k(e){
//     e.style.display = "none"
//     arr.push(v)
//     console.log(arr)
// }


// var divs = document.querySelectorAll(".x .bac");
// 	for (var i = 0; i < divs.length; i++) {
// 		divs[i].setAttribute("onclick","f(this)");
// 	}
	
// 	var arr = [];
// 	var arr2 = [];
// 	function  f(z){
// 		z.style.background = "none";
// 		arr.push(z.innerHTML);
// 		console.log(arr)
// 		var dds = document.querySelectorAll(".x .bac");
// 		if(arr[0] == arr[1]){
// 			for (var i = 0; i < dds.length; i++) {
// 				if(arr[0] == dds[i].innerHTML){
// 				dds[i].parentNode.style.display = 'none';
// 		}
// 				}
// 			arr.shift()
// 			arr.pop()
// }

