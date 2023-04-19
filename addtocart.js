const count = document.getElementById("count")
const car = document.getElementById("car")
const val = count.nextElementSibling.textContent
count.addEventListener('mouseout',function alist(){
  count.removeEventListener('mouseout',alist)
 var counted = document.createElement("h1")
 counted.id = "hi"
 counted.appendChild(document.createTextNode(val))
 car.appendChild(counted)
 console.log(val)
 
})
let counting = 0;
counting1 = 0;
counting2 = 0;
data = 0;
 
const drink = document.getElementById("lineF").firstElementChild.textContent
const drink1 = document.getElementById("lineT").firstElementChild.textContent
const drink2 = document.getElementById("lineTr").firstElementChild.textContent
const bile = document.getElementById("bile")
// click to addd
document.getElementById("add").addEventListener("click",(e)=>{data = data + 1;total(); counting = counting + 1 ; document.getElementById("tot").innerText = counting
var cos = document.getElementById("price").lastChild.textContent; 
document.getElementById("hMany").innerHTML = 'Amount: ' + counting * cos
})
document.getElementById("add1").addEventListener("click",(e)=>{ data = data + 1;total();counting1 = counting1 + 1;document.getElementById("tot1").innerText = counting1
 
})
document.getElementById("add2").addEventListener("click",(e)=>{data = data + 1;total();counting2 = counting2 + 1;document.getElementById("tot2").innerText = counting2})
// mouse up will create new text in div  mouse up event
document.getElementById("add").addEventListener("mouseup",function bill(){
document.getElementById("add").removeEventListener("mouseup",bill)
  
  var gats = document.createElement('h2')
  gats.id = 'gats'
  gats.appendChild(document.createTextNode('Item :' +drink))
  bile.appendChild(gats)
  var cost = document.getElementById("price").lastChild.textContent ;
  var hav =  document.createElement('h2')
  hav.id = 'cost'
  hav.appendChild(document.createTextNode('price: '+ cost))
  bile.appendChild(hav)
})
document.getElementById("add1").addEventListener("mouseup",function bill(){
document.getElementById("add1").removeEventListener("mouseup",bill)
  
  var gats = document.createElement('h2')
  gats.id = 'gats'
  gats.appendChild(document.createTextNode(drink1))
  bile.appendChild(gats)
  var cost = document.getElementById("price").lastChild.textContent;
  var hav = document.createElement('h2')
  hav.id = 'cost'
  hav.appendChild(document.createTextNode(cost))
  bile.appendChild(hav)
})
document.getElementById("add2").addEventListener("mouseup",function bill(){
document.getElementById("add2").removeEventListener("mouseup",bill)
  
  var gats = document.createElement('h2')
  gats.id = 'gats'
  gats.appendChild(document.createTextNode(drink2))
  bile.appendChild(gats)
  var cost = document.getElementById("price").lastChild.textContent;
  var hav = document.createElement('h2')
  hav.id = 'cost'
  hav.appendChild(document.createTextNode(cost))
  bile.appendChild(hav)
})
document.getElementById("sub").addEventListener("click",(e)=>{ data = data -1 ;total();counting = counting -1;document.getElementById("tot").innerText = counting;if (data <= -1) {
  alert("minimum order is one")
  document.getElementById("tot").innerText = null;
};total();
document.getElementById("sub").addEventListener('mouseup',function clear (){
  document.getElementById("sub").removeEventListener('mouseup', clear)
  if (counting <=  0  ) {
  bile.style.display = 'none'
  }
 
})
})
document.getElementById("sub1").addEventListener("click",(e)=>{ data = data -1 ;counting1 = counting1 -1;document.getElementById("tot1").innerText = counting1;if (data <= -1) {
  alert("minimum order is one")
  document.getElementById("tot1").innerText = null;
}total() })
document.getElementById("sub2").addEventListener("click",(e)=>{ data = data -1;counting2 = counting2 -1 ;document.getElementById("tot2").innerText = counting2; ;if (data <= -1) {
  alert("minimum order is one")
  document.getElementById("tot2").innerText = null;
}total()})
function total() {
 
var total = document.getElementById("price").lastChild.textContent;
var tota1 = parseInt(total) * `${data}`;
  document.getElementById("qtyTotal").textContent = ' TOTAL :' + '$'+tota1
  if (`${data}` <=-1) {
    document.getElementById("qtyTotal").textContent = null
  }
  
 
}
//   const item2
//   const item2
var total = document.getElementById("tota").textContent;
console.log(total)
var tota = parseInt(total)
data = 0;
document.getElementById("add").addEventListener('click',increment)
document.getElementById("sub").addEventListener('click',decrement)
document.getElementById("add1").addEventListener("click",(e)=>{data = data + 1;document.getElementById("tot1").innerText = data;totl()})
document.getElementById("sub1").addEventListener("click",(e)=>{ data = data -1 ;document.getElementById("tot1").innerText = data; totl(); if (data <= -1) {
  alert("minimum order is one")
  document.getElementById("tot1").innerText = null;
} })
document.getElementById("add2").addEventListener("click",(e)=>{data = data + 1;document.getElementById("tot2").innerText = data;totl()})
document.getElementById("sub2").addEventListener("click",(e)=>{ data = data -1 ;document.getElementById("tot2").innerText = data; totl();if (data <= -1) {
  alert("minimum order is one")
  document.getElementById("tot2").innerText = null;
}})
//initialising a variable name datazzzzzzZ
//printing default value of data that is 0 in h2 tag
document.getElementById("tot").innerText = data;
document.getElementById("tot1").innerText = data;
document.getElementById("tot2").innerText = data;
//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("tot").innerText = data;
totl()
}
