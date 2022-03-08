
var submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    var q1 = document.getElementById('q1Correct').checked;
var q2 = document.getElementById('q2Correct').checked;
var q3 = document.getElementById('q3Correct').checked;

var count = 0;
if(q1){
    count++;
}
if(q2){
    count++;
}
if(q3){
    count++;
}
alert('Your Result is' + count)
})