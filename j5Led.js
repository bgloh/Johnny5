var five = require("johnny-five");
var EtherPortClient = require("etherport-client").EtherPortClient;

// update host to the IP address for your ESP board
var board = new five.Board({
    port: new EtherPortClient({
        host: "192.168.1.188",
        port: 3030
    }),
    timeout: 1e5,
    repl: true
});

board.on("ready", function() {
    console.log("READY!");
        
        // adc on pin A0
	adc0 = new five.Sensor({pin:"A0",freq:500});
        // uncomment below to enable adc callback
	/*adc0.on("data",function(){
		console.log("adc:",this.value);
	});*/
	    
      // Inject the `led` hardware into
      // the Repl instance's context;
      // allows direct command line access
	var led = new five.Led(2);
        
        //led.blink(500)
	this.repl.inject({
                led: led
         });
   
  // attach a button object to a pin 0
   button = new five.Button({pin:0, invert:true});

  // Button Event API
  // "down" the button is pressed
  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
   
   button.on("press", function() {
    console.log( "Button pressed" );
     });

   button.on("release", function() {
    console.log( "Button released" );
   });
  
});
