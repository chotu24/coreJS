var userRepo = function(){

	return {
		get: function(id){
			console.log('inside userRepo.js '+ id);
		}
	}
}

module.exports = userRepo;