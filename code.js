var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0573912b-1a8a-4629-86d6-b741c0b523a7","8a39c9cd-be32-4f12-9a55-3dfbc957a9a5"],"propsByKey":{"0573912b-1a8a-4629-86d6-b741c0b523a7":{"name":"ding","categories":["faces"],"frameCount":1,"frameSize":{"x":13,"y":13},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:03:31 UTC","pngLastModified":"2021-01-05 19:03:19 UTC","version":"XJ4pR5BX.BU.0dv.0OJRCiOG70FNd7T8","sourceUrl":null,"sourceSize":{"x":13,"y":13},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/0573912b-1a8a-4629-86d6-b741c0b523a7.png"},"8a39c9cd-be32-4f12-9a55-3dfbc957a9a5":{"name":"dong","categories":["faces"],"frameCount":1,"frameSize":{"x":13,"y":13},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:03:31 UTC","pngLastModified":"2021-01-05 19:03:19 UTC","version":"6LG6DicFTzflrWXOKjerxiqpeN_5z9qs","sourceUrl":null,"sourceSize":{"x":13,"y":13},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/8a39c9cd-be32-4f12-9a55-3dfbc957a9a5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

  var wall1 = createSprite(190,120,250,3);
  var wall2 = createSprite(190,260,250,3);
  var wall3 = createSprite(67,145,3,50);
  var wall4 = createSprite(67,235,3,50);
  var wall5 = createSprite(313,145,3,50);
  var wall6 = createSprite(313,235,3,50);
  var wall7 = createSprite(41,170,50,3);
  var wall8 = createSprite(41,210,50,3);
  var wall9 = createSprite(337,210,50,3);
  var wall10 = createSprite(337,170,50,3);
  var wall11 = createSprite(18,190,3,40);
  var wall12 = createSprite(361,190,3,40);
  
  
  var ding = createSprite(40,190,13,13);
  ding.shapeColor = "green";
  ding.setAnimation("ding");
  
  var dong1 = createSprite(100,130,10,10);
  dong1.shapeColor = "red";
  dong1.setAnimation("dong");
  var dong2 = createSprite(215,130,10,10);
  dong2.shapeColor = "red";
  dong2.setAnimation("dong");
  var dong3 = createSprite(165,250,10,10);
  dong3.shapeColor = "red";
  dong3.setAnimation("dong");
  var dong4 = createSprite(270,250,10,10);
  dong4.shapeColor = "red";
  dong4.setAnimation("dong");
  
  dong1.velocityY = 8;
  dong2.velocityY = 8;
  dong3.velocityY = -8;
  dong4.velocityY = -8;
  
  var count = 0;
  
  playSound("assets/category_background/wavering_wind.mp3", true);


function draw() {
  background("black");
  textSize(20);
  fill("#87FF00");
  text("Deaths: " + count,200,100);
  strokeWeight(0);
  fill("#001255");
  rect(18,170,52,40);
  rect(308,170,52,40);
  
  dong1.bounceOff(wall1);
  dong1.bounceOff(wall2);
  dong2.bounceOff(wall1);
  dong2.bounceOff(wall2);
  dong3.bounceOff(wall1);
  dong3.bounceOff(wall2);
  dong4.bounceOff(wall1);
  dong4.bounceOff(wall2);
  
 
  if(keyDown("right")){
    ding.x = ding.x + 2;
  }
  if(keyDown("left")){
    ding.x = ding.x - 2;
  }
  
  if(ding.isTouching(wall11)||
     ding.isTouching(wall12)||
     ding.isTouching(dong1)||
     ding.isTouching(dong2)||
     ding.isTouching(dong3)||
     ding.isTouching(dong4))
  {
     ding.x = 40;
     ding.y = 190;
     count = count + 1;
  }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
