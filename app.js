const answerArray = ['It will work', 'Maybe, maybe not', 'Probably not', 'Highly Likely', 'It\'s worth a shot.']
const message = document.querySelector('.message');
const question = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log(question.value);
    let res = Math.floor(Math.random()* answerArray.length);
    message.innerText = question.value + ': ' + answerArray[res];
    question.value = '';
})