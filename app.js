// gets a new object (the architecture allows u to not have to use the 'new keyword here)
// let g = G$('John', 'Doe');

// // use our chainable methods
// g.greet().setLang('es').greet(true).log();

// // let's use our object on the click of the login button
// $('#login').click(function(){

//     // create a new 'Greetr' object (let's pretend we know hte name of the login)
//     let loginGrtr = G$('John', 'Doe');

//     $('#logindiv').hide();

//     // fire off an html greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
//     loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

// })