//var h1 = document.getElementById('object');
//h1.innerText = 'My object text is changed';


//document.getElementsByClassName('object')[0].innerHTML = 'My object';

//var body = document.getElementsByTagName('body')[0];
//var paragraphTags = body.getElementsByTagName('p');
//
//for(var i=0; i<paragraphTags.length; i++){
//    paragraphTags[i].innerText = 'Index of paragraph ' + i;
//}


//CSS kimi secilir
//var myObj = document.querySelector('#object.object');
//myObj.innerText = 'Query Selector';

var myObj = document.querySelectorAll('.object');

//for-un diger yazlish qaydasi
myObj.forEach(myObj => {
    myObj.innerText = 'Geliz mesele';
})

//myObj.forEach(myObj => {
//    myObj.innerHTML = '<h4>Inner HTML</h4>';
//})

//myObj.forEach(myObj => {
//    myObj.style.color = 'yellow';
//})
//
//myObj.forEach(myObj => {
//    myObj.style.backgroundColor = 'grey';
//})

//document.querySelector('p').classList.add('orange');
//document.querySelector('h1').classList.remove('object');

function changeColor(){
    document.querySelector('p').classList.toggle('orange');

}

function changeImage(){
   var img = document.querySelector('img');  
   console.log(img.getAttribute('src'));
   img.setAttribute('src', 'cat2.jpeg');
   console.log(img.getAttribute('src'));

}



var messageBlock = document.querySelector('#message');


function deleteMessage(element) {
    var parentParagraphTag = element.parentElement;
    messageBlock.removeChild(parentParagraphTag);    

}


var input =  document.querySelector('#message-text');

function sendMessage(){
    var messageText = document.querySelector('#message-text').value;

    var paragraph= document.createElement('p');
    paragraph.innerText = messageText
    paragraph.classList.add('message');

    var iconTag = document.createElement('i');
    iconTag.classList.add('fas', 'fa-trash-alt');
    iconTag.setAttribute('onclick', 'deleMessage(this)');

    paragraph.appendChild(iconTag);

    messageBlock.appendChild(paragraph);
    input.value = ' ';

}