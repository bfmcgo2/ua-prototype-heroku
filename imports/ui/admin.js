import { Athletes } from '../api/athletes.js';

import './admin.html';

Template.admin.events({
	'submit #new-athlete'(event) {

	  // Prevent default browser form submit
	  event.preventDefault();
	  // Get value from form element
	  const target 			= event.target;
	  const athleteBio 		= document.querySelector(".athlete-achievements").value;
	  const athleteName		= target.name.value;
	  const youtubeLiveId	= target.youtubeID.value;
	  const sport			= target.sport.value;
	  const img				= target.img.value;
	  // current time
	  const createdAt = new Date();


	  // Insert a task into the collection
	  Athletes.insert({
	  	athleteName,
	  	athleteBio,
	  	youtubeLiveId,
	  	sport,
	  	img,
	  	createdAt
	  });
	
	  // Clear form
	  target.name.value ='';
	  target.youtubeID.value ='';
	  target.sport.value = '';
	  target.img.value	= '';
	  document.querySelector(".athlete-achievements").value = '';
	}

});