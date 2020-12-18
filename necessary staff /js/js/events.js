var sumBtn = document.querySelector('#sum-btn');

sumBtn.addEventListener('click', function(){
    var a = document.querySelector('#input1').value;
    var b = document.querySelector('#input2').value;
    a = parseFloat(a);
    b = parseFloat(b);

    var result = a + b;

    document.querySelector('#result').innerText = result;
    document.querySelector('p').style.display = 'block';
});




document.querySelector('#input1').addEventListener('change', function(){
    console.log(this);
});



