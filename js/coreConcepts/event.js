// 1.HTML attributes
function htmlAttributes(e){

	if(confirm('are you sure to accept this')){
		console.log('Confirmed');
		//True is the default value
		//return true;
	}else{
		console.log('not Confirmed');
		//return false;
	}
}

(function(){

//2. DOM Object

var btn = document.getElementById('DOMEvent');

btn.onclick  = clickHandler;

function clickHandler(){
	console.log(" 2nd click Handler ");
}

function handleEvents(event){
	console.log('DOM event');
}


// 3.Special methods
var btn1 = document.getElementById('btnSpecialEvent');

function SpecialEvents(){
	console.log(' SpecialEventsCalled ');
}
function SpecialEventsCalledToo(){
	console.log(' SpecialEventsCalledToo ');
}

btn1.addEventListener('click',SpecialEvents);
btn1.addEventListener('click',SpecialEventsCalledToo);

})();

function SpecialEvent1(){
	console.log(' Sepcial events');
}
