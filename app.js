// variables
const word=document.querySelector('.word');
let input=document.querySelector('input');
let timeLeft=document.querySelector('.time');
const scored=document.querySelector('.score');
const message=document.querySelector('.message');

let haveTime=5;
let playing;
let score=0;

const words=[
  'salom',
  'while',
  'if',
  'asynch',
  'amazing',
  'wonderful',
  'fetch',
  'api',
  'good',
  'morning',
  'afternoon'
];

window.addEventListener('load',init);

function init(){
  console.log('loading')
  showWord(words);
  setInterval(checkStatus,100);
  setInterval(count,1000);
  input.addEventListener('input',starting)
}
function starting(){
  if(matchWords()){
    playing=true;
    timeLeft=6;
    showWord(words);
    input.value="";
    score++;
  }

  if (score===-1) {
    scored.innerHTML=0;    
  } else {
    scored.innerHTML=score;
  }
}

function matchWords(){
  if(input.value===word.innerHTML){
    message.innerHTML="correct!!!";
    return true;
  }
  else{
    message.innerHTML="";
    return false;
  }
}
function showWord(words) {
  const ranWord=Math.floor(Math.random()*words.length);
  word.innerHTML=words[ranWord];
}
function count(){
  if (haveTime>0) {
    haveTime--;
  }
  else if(haveTime===0){
    playing=false;
  }
  timeLeft.innerHTML=haveTime;
}
function checkStatus(){
  if(playing==false && haveTime===0){
    message.innerHTML="Game over";
    score=-1;
  }
}