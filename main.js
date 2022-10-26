prediction_1= "";
emoji_means = "";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="Captured_image" src="'+data_uri+'"/>' ;
    });
}
console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Owv_U3xdY/model.json",modelloaded);

function  modelloaded(){
    console.log("Model Loaded!")
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The prediction is "+ prediction_1;
  var utterThis = new SpeechSynthesisUtterance(speak_data_1);
  synth.speak(utterThis);
  }


  function check(){
    img = document.getElementById("Captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    if(results){
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = emoji_means;
        prediction_1= emoji_means;
        speak();
    
    if(results[0].label == "👍"){
        emoji_means= "All the best";
        document.getElementById("update_emoji").innerHTML = "&#128077;";
    }
    if(results[0].label == "👌"){
        emoji_means= "This is looking amazing";
        document.getElementById("update_emoji").innerHTML = "&#128076;";
    }
    if(results[0].label == "✌"){
        emoji_means= "That was amarvelous victory";
        document.getElementById("update_emoji").innerHTML = "&#9996;";
    }
    document.getElementById("result_emotion_name").innerHTML = emoji_means;
        prediction_1= emoji_means;
        speak();
}}