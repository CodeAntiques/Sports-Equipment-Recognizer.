
Webcam.set({
    width:400,
    height:400,
    image_format:'jpeg',
    jpeg_quality:100

})
camera=document.getElementById("camera")

Webcam.attach(camera);
function take_snapshot(){
Webcam.snap(function(data_uri){
 document.getElementById("output").innerHTML='<img src="'+data_uri+'"  id="selfie">';
});
}

console.log("ml5.version" , ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rtELkZVUE/model.json",modelLoaded)

function modelLoaded(){
    console.log("Model Is Loaded");
}

function Check(){
  img=document.getElementById("selfie");
  classifier.classify(img,gotResult)
}

function gotResult(error,result){
    if (error) {
        console.error(error)
        
    }else{
        console.log(result);
   document.getElementById("object_name").innerHTML=result[0].label;
   document.getElementById("object_accurate").innerHTML=result[0].confidence.toFixed(3)

    }
}
function openchat(){
    document.getElementById("chatbox").style.display = "inline-block"; document.getElementById("chatbox").innerHTML = "<iframe id='bot' height='480' width='460' src='https://console.dialogflow.com/api-client/demo/embedded/e5019ff8-ef3a-4bf9-8796-56e68dd132d5'>"
}

function close(){
    document.getElementById("chatbox").style.display = "none";
}