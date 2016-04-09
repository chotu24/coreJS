var TaskRepo = (function(){

	var taskRepo;
	function createRepo(){
		taskRepo = new Object();
		console.log('this should get executed only once as it is singleton pattern');
		return taskRepo;
	}	
	return {
		getInstance: function(){
			if(!taskRepo){
				taskRepo = createRepo();	
			}
		return taskRepo;
				
		}		
	}
})();

var taskRepos1 = new TaskRepo.getInstance();

var taskRepos2 = new TaskRepo.getInstance();

var isSingleton = taskRepos1 === taskRepos2;

if(isSingleton)
{
	console.log('this is Singleton pattern as taskRepos1 === taskRepos2 is'+ isSingleton);
}