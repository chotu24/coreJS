var Repo = function(){

	console.log('new Repo is created');
	var called = 0; 
	var save = function(save){
		called++;
		console.log('saving the task'+ save);
	}

	return {
		save: save
	}
}

module.exports = Repo;
