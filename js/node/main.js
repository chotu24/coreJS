var Task = require('./tasks');

var factoryRepo = require('./factoryRepo');

var task1 = new Task(new factoryRepo().getRepo('task'));
var task1_1 = new Task(new factoryRepo().getRepo('task'));
var task = new Task(new factoryRepo().getRepo('user'));

var task2 = new Task(new factoryRepo().getRepo('project'));
