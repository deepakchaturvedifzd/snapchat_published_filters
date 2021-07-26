// -----JS CODE-----

// @input Component.FaceMaskVisual mymask1;
// @input Component.FaceMaskVisual mymask2;
// @input Component.FaceMaskVisual mymask3;
// @input Component.FaceMaskVisual mymask4;


// @input SceneObject hairColor1;
// @input SceneObject hairColor2;
// @input SceneObject hairColor3;
// @input SceneObject hairColor4;

var i=1;
var event = script.createEvent("BrowsRaisedEvent");
event.faceIndex = 0;
event.bind(function (eventData)
{
    if(i==4)
    {
        i=1;
    }
    i=i+1;
    print(i);
});
var event = script.createEvent("UpdateEvent");
event.bind(function (eventData)
{
    if(i==1)
    {
        script.mymask1.enabled=true;
        script.mymask2.enabled=false;
        script.mymask3.enabled=false;
        script.mymask4.enabled=false;
        
        script.hairColor1.enabled=true;
        script.hairColor2.enabled=false;
        script.hairColor3.enabled=false;
        script.hairColor4.enabled=false;
        
        print("ok1");
        
    }
        if(i==2)
    {
        script.mymask1.enabled=false;
        script.mymask2.enabled=true;
        script.mymask3.enabled=false;
        script.mymask4.enabled=false;  
        
        script.hairColor1.enabled=false;
        script.hairColor2.enabled=true;
        script.hairColor3.enabled=false;
        script.hairColor4.enabled=false;
        print("ok2");
    }
        if(i==3)
    {
        script.mymask1.enabled=false;
        script.mymask2.enabled=false;
        script.mymask3.enabled=true;
        script.mymask4.enabled=false; 
        
        script.hairColor1.enabled=false;
        script.hairColor2.enabled=false;
        script.hairColor3.enabled=true;
        script.hairColor4.enabled=false;
    }
        if(i==4)
    {
        script.mymask1.enabled=false;
        script.mymask2.enabled=false;
        script.mymask3.enabled=false;
        script.mymask4.enabled=true; 
        
        script.hairColor1.enabled=false;
        script.hairColor2.enabled=false;
        script.hairColor3.enabled=false;
        script.hairColor4.enabled=true;
    }
});