// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('./script/sw.js/').then(function(reg) {
//     // registration worked
//     console.log('Registration succeeded. Scope is ' + reg.scope);
//   }).catch(function(error) {
//     // registration failed
//     console.log('Registration failed with ' + error);
//   });
// };

if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./script/sw.js')
           .then(function() { console.log("Service Worker Registered"); })
	.catch(function(error) {
	    // registration failed
	    console.log('Registration failed with ' + error);
	  });
}