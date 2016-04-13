var Task = function(data){
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
}

var TaskService = function(){
	return{
		complete: function(task){
			task.completed= true;
			console.log('completed'+this.task);
		},
		setCompletedDate: function(task){
			var isTaskCompleted = (this.completed == true);
			this.completed = new Date();
			if(isTaskCompleted){
				console.log('task '+ this.task + 'completed on '+ task.setCompletedDate );
			}
		},

		notifyCompletion: function(task, user){
			console.log('notifying user '+ user + 'of completion of '+ task.name);
		},

		save: function(task){
			console.log('saving task'+ task.name);
		}
	}
}();

var TaskSeviceWrapper = function(){
	
	var completeAndNotify = function(myTask){
	TaskService.complete(myTask);
		if( myTask.completed == true){
			TaskService.setCompletedDate(myTask);
			TaskService.notifyCompletion(myTask, myTask.user);
			TaskService.save(myTask);
		}
	}
	return{
		completeAndNotify: completeAndNotify
	}
}();

var myTask = new Task({
	name: 'mondayTask',
	priority: 5,
	project: 'nodeJS',
	user: 'Anand',
	completed: true
});

TaskSeviceWrapper.completeAndNotify(myTask);
console.log(myTask);
