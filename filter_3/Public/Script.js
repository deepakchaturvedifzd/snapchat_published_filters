// -----JS CODE-----
var i=1;
// @input Component.RenderMeshVisual meshVisual;
// @input Asset.Material material1;
// @input Asset.Material material2;
script.meshVisual.mainMaterial=script.material1;
function onTapped(eventData)
{
    if(i==1)
    {
        script.meshVisual.mainMaterial=script.material2;
        i=2;
 
    }
    else
    {
        script.meshVisual.mainMaterial=script.material1;
        i=1;        
    }
}

var event = script.createEvent("TapEvent");
event.bind(onTapped);