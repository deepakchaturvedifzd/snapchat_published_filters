// -----JS CODE-----
// @input SceneObject container
// @input Component.LiquifyVisual liquify1;
// @input Component.LiquifyVisual liquify2;

// @input SceneObject gujiya;
// @input SceneObject mouth;
// @input Component.AudioComponent sound;

// TweenTransform.js

script.liquify1.radius=0.50;
script.liquify2.radius=0.50;
var arr = [2.6,3.2,3.8,4.4,5.0,5.5];
var i=0;
var elapsedTime=0.0;
var mouthOpen=false;
var startCounting=false;
var full=false;

var initialpos=(1.1853,-187.9991,177.2215);

var event = script.createEvent("MouthOpenedEvent");
event.faceIndex = 0;
event.bind(function (eventData)
{
    mouthOpen=true;
    startCounting=true;
    startAnimation();

});


function startAnimation()
{
    print("Gujhiya Animation");
}


var transform = script.getTransform();
var event = script.createEvent("UpdateEvent");
event.bind(function (eventData)
{ 
    if(mouthOpen && startCounting)
    {
        elapsedTime+=getDeltaTime();
        print("elapsed time = " + elapsedTime);
    }
    if(elapsedTime>1.0)
    {

        if(i<6)
        {
            script.sound.play(0);
            script.liquify1.radius=arr[i];
            script.liquify2.radius=arr[i]; 
   //         script.gujiya.getTransform().setWorldPosition(new vec3(1.1853,-187.9991,177.2215));
            i++;
            elapsedTime=0.0;
            if(i==6)
            {
                full=true;
            }
        }
        
        if(full && elapsedTime>1.0)
        {
            elapsedTime=0.0;
  //          script.gujiya.getTransform().setWorldPosition(new vec3(1.1853,-187.9991,177.2215));
            script.sound.play(0);
        }
        
    }
});



var event = script.createEvent("MouthClosedEvent");
event.faceIndex = 0;
event.bind(function (eventData)
{
    mouthOpen=false;
    elapsedTime=0.0;
    script.gujiya.getTransform().setWorldPosition(new vec3(1.1853,-187.9991,177.2215));
});


