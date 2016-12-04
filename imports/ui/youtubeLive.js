import { Athletes } from '../api/athletes.js';

import './youtubeLive.html';

Template.youtubeLive.helpers({
	Athletes() {
    return Athletes.find({}, {sort:{ createdAt:-1} });
  },
	
});

Template.youtubeLive.events({
	'click .removedata' : function(e){
		Athletes.remove(this._id);
	}
	
});

// var d = new Date()

// console.log((new Date().getMonth()+1)+"/"+ new Date().getDate());