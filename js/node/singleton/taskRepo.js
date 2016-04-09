
var Repo = require('./repo');
var repo;
var TaskRepo = function(){
	var repo = new Repo();
	var createRepo = function(repos){
		repo.save(repos);
	};

	return {
		createRepo: createRepo
	}
}

module.exports = TaskRepo;