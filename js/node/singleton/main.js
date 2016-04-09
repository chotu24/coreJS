var Repo = require('./repo');
var TaskRepo = require('./taskRepo');

var repo = new Repo();
repo.save();

var taskRepo = new TaskRepo();
taskRepo.createRepo('proj');