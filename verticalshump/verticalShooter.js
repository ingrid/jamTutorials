jam.includeModule("RectCollision");

window.onload = function(){
    initialize();
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
	if( jam.Input.justPressed("X") ){
	    player.shoot();
	}
    });
    player.shoot = function(){
	var bullet = jam.Sprite(player.x, player.y);
	bullet.setImage("shot.png");
	bullet.update = jam.extend(bullet.update, function(elapsed){
	    if(bullet.y <= 0){
		console.log("Bullet died.");
		game.remove(bullet);
	    }
	});
	bullet.velocity.y = -300;
	game.add(bullet);
    };
    game.add(player);

    var spawnEnemy = function(x, y){
	var enemy = jam.Sprite(x, y);
	enemy.setImage("enemy.png");
	enemy.update = jam.extend(enemy.update, function(elapsed){
	    if(enemy.y >= 810){
		console.log("Enemy died.");
		game.remove(enemy);
	    }
	});
	enemy.velocity.y = 100;
	game.add(enemy);
    };

    spawnEnemy(200, 0);

    game.run();
}