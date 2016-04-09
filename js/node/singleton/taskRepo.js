
var Repo = require('./repo');

var TaskRepo = function(){
	var repo = Repo;
	var createRepo = function(repos){
		repo.save(repos);
	};

	return {
		createRepo: createRepo
	}
}

module.exports = TaskRepo;