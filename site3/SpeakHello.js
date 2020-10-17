
var helloSpeaker = {};
(helloSpeaker.speak = function(name) {
		var speakWord = "Hello";
  if ( name!= undefined){
  console.log(speakWord + " " + name);}
})();

