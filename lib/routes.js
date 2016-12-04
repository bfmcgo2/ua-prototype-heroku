import { Router } from 'meteor/iron:router';
import { Athletes } from '../imports/api/athletes.js';

Router.route('/', function () {
  this.render('athletes');
});

Router.route('/admin', function(){
	this.render('admin');
});

Router.route('/:_id', function(){
	this.render('youtubeLive',{
		data:function(){
			return Athletes.findOne({_id:this.params._id});
		}
	});
});