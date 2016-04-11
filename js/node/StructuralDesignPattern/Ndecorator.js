var Task = function(data){
	this.name = data.name;
	this.completed = data.completed;
}

Task.prototype.save = function(){
	console.log('saving the task'+ this.name);
}

Task.prototype.complete = function(){
	console.log('user task completed');
}

var task1 = new Task({name:'task',completed: false});
task1.save();
task1.complete();

var taskNew = new Task({name:'USER task',completed: false});

taskNew.notify = function(){
	console.log('task that needs to be notified');
};

/* this is the example of decorator pattern*/
taskNew.save = function(){
	this.notify();
	Task.prototype.save.call(this);
}

taskNew.save();
