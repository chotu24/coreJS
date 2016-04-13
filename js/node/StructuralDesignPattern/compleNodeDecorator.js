var Task = function(name){
	this.name = name;
	this.completed = false;
}

Task.prototype.save = function(){
	console.log('saving the task '+ this.name);
}

Task.prototype.complete = function(){
	console.log('user task completed');
}

var UrgentTask = function(name, priority){
	Task.call(this, name);
	this.priority = priority;
};

// ut will have all the properties but we cannot access prototype methods of it
// to be able to achieve that we have to create an object as below
// so we cannot access ut.save after instantiating 
// var ut = new UrgentTask('urgetnTask', 2);

UrgentTask.prototype = Object.create(Task.prototype);

var ut = new UrgentTask('urgetnTask', 2);

console.log(ut);
ut.save();

UrgentTask.prototype.notify = function(){
	console.log('notifying the user');
};

UrgentTask.prototype.save = function(){
	this.notify();
	Task.prototype.save.call(this);
	Task.prototype.complete.call(this);
}

var taskNew = new Task('newOld');
console.log(taskNew);
taskNew.save();
taskNew.complete();
