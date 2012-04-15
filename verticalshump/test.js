window.onload = function(){
    initialize();
}
    
function initialize(){
    var game = jam.Game(800, 600, document.body);
    game._canvas.style.border="1px solid black";

    game.run();
}

    
function initialize(){
    var game = jam.Game(800, 600, document.body);
    game._canvas.style.border="1px solid black";
    var player = jam.Sprite(400, 500);
    player.setImage("ship.png");
    player.update = jam.extend(player.update, function(elapsed){
	player.velocity.x = 0;
	player.velocity.y = 0;
	if( jam.Input.keyDown("UP") ){
	    player.velocity.y = -250;
	}
	if( jam.Input.keyDown("DOWN") ){
	    player.velocity.y = 250;
	}
	if( jam.Input.keyDown("LEFT") ){
	    player.velocity.x = -250;
	}
	if( jam.Input.keyDown("RIGHT") ){
	    player.velocity.x = 250;
	}
    });
    game.add(player);
    game.run();
}