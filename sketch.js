var bullet, wall;

var speed, weight, thickness;

function setup(){

    createCanvas(1600,400);

    speed=random(223,321);
    weight=random(30,52);
    thickness=random(22,83);

    bullet=createSprite(50, 200, 50, 20);
    bullet.velocityX = speed;
    bullet.shapeColor=color(255,255,255);

    wall=createSprite(1200,200,thickness,height/2);
    wall.shapeColor=color(80,80,80);
}

function draw(){

    background("black");
Collide(wall,bullet);
    drawSprites();

}

function Collide(object1,object2){
    if(object1.x-object2.x < (object2.width+object1.width)/2){
        object2.velocityX=0;

        object2.collide(object1);

        var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
        
        if(damage<10){
            object1.shapeColor=color(0,128,0);
        }else    
        if(damage>=10){
            object1.shapeColor=color(255,0,0);
        }
    }
}