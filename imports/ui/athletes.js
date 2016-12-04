import { Athletes } from '../api/athletes.js';
import './athletes.html';



Template.athletes.helpers({
	Athletes() {
    return Athletes.find({}, {sort:{ createdAt:-1} });
  },
  	even(value) {
  	return (value % 2) === 0;
  },
});

Template.athletes.events({
	'click .athlete-link' : function(e){
		$(window).scrollTop(0);
	}
})