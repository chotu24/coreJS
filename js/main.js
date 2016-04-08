var menu = document.getElementsByClassName('menuItems');

	for(var i =0; i< menu.length; i++){

		menu[i].onclick = function(){

			$(this).next().css('display','block');

	}
}	