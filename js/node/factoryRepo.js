var factoryRepo = function(task){

	
	this.getRepo = function(repoType){

		if(repoType ==="task"){
			if(this.taskRepo){
				console.log('NOT getting cached here .. it should have used the cached version for next instance');
				return this.taskRepo;

			}else{
				this.taskRepo = require('./taskRepo.js');
				console.log('getRepo is creating task');
				return this.taskRepo;
			}
		}

		if(repoType ==="user"){
			var userRepo = require('./userRepos');
			console.log('getting Repo for user');
			return userRepo;
		}	

		if(repoType ==="project"){	
			var projRepo = require('./projRepo');
			console.log('inside project repo');
			return projRepo;
		}
	}
	
}

module.exports = factoryRepo;