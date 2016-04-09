var Repo = require('./repo');
var TaskRepo = require('./taskRepo');

//var repo = Repo();
Repo.save('sample');

var taskRepo = new TaskRepo();
taskRepo.createRepo('proj');