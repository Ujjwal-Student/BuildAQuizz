var question=[{
    que:"What is 2+2?",
    options: [1,2,3,4],
    ans:4,
},
{
    que:"What is 2+1?",
    options: [1,2,3,4],
    ans:3,
},
{
    que:"What is 2+0?",
    options: [1,2,3,4],
    ans:2,
},
{
    que:"What is 0+2?",
    options: [1,2,3,4],
    ans:2,
},
{
    que:"What is 1+0?",
    options: [1,2,3,4],
    ans:1,
},
{
    que:"What is 1+1?",
    options: [1,2,3,4],
    ans:2,
},
{
    que:"What is 1+3?",
    options: [1,2,3,4],
    ans:4,
},
{
    que:"What is 2+0?",
    options: [1,2,3,4],
    ans:2,
},
{
    que:"What is 2+(-1)?",
    options: [1,2,3,4],
    ans:1,
},
{
    que:"What is 3+0?",
    options: [1,2,3,4],
    ans:3,
},

];
var questionCount=0;
var score=0;
function getOption1(){
var op1=document.getElementById("lab1");
return op1.innerHTML;
}
function whichOneIsCheck(){
    for(var i=1;i<=4;i++)
    {
        var opt="rad"+i;
        if(document.getElementById(opt).checked===true)
        break;
    }
    //console.log("lab",i);
    return "rad"+i;
}
function isCorrect(optval)
{
    //console.log(question[questionCount].ans);
    if(question[questionCount].ans==optval)
    {
        score++;
    return true;
    }
    return false;
}
function checkAnswer(){
   var opt= whichOneIsCheck();
   if(opt=="rad5")
   {
       alert("click on one option ");
       return;
   }
   //console.log(typeof document.getElementById(opt).value);
   var optVal=document.getElementById(opt).value;
   
   if(isCorrect(optVal))
   {
      let btn=document.createElement("button");
      let div=document.getElementById("nob");
      btn.innerHTML="Correct";

      btn.setAttribute("id","btn2");
      div.appendChild(btn);
   }
   else
   {
       let btn=document.createElement("button");
      let div=document.getElementById("nob");
      btn.innerHTML="Wrong";

      btn.setAttribute("id","btn2");
      div.appendChild(btn);
   }
   var btn=document.getElementById("btn1");
   btn.innerHTML="Next";
   btn.setAttribute("onclick","gotoNextQuestion()");

}
function removeAll()
{
    let h=document.getElementById("score1");
    h.innerHTML="Score : "+score;
    let q=document.getElementById("question");
    q.innerHTML="Answer Key";
let del2=document.getElementById("nob");
    for(var i=1;i<=4;i++)
    {
        let rad="rad"+i;
        let lab="lab"+i;
        let del=document.getElementById(rad);
         let del1=document.getElementById(lab);
         del1.removeChild(del);
         del1.innerHTML="";
    }
    let div=document.getElementById("nob");
     let btn5=document.getElementById("btn2");
     div.removeChild(btn5);
         for(var i=0;i<10;i++)
    {
        let para=document.createElement("p");
        para.innerHTML="Question"+(i+1)+": "+question[i].que+"      Answer  =  "+question[i].ans;
        del2.appendChild(para);
    }
        let btn=document.getElementById("btn1");
    btn.innerHTML="Reset";
    btn.setAttribute("onclick","reset()");
}
function reset()
{

    
      let h=document.getElementById("score1");
    h.innerHTML="Quiz";
    let q=document.getElementById("question");
    questionCount=0;
    q.innerHTML=question[questionCount].que;
    let btn0=document.getElementById("btn1");
    btn0.innerHTML="Submit";
    btn0.setAttribute("onclick","checkAnswer()");
    let para=document.getElementsByTagName("p")
    console.log(para);
    let div3=document.getElementById("nob");
 div3.innerHTML="";

    for(let k=1;k<=4;k++)
    {
        let rad="rad"+k;
        let lab="lab"+k;
        let del=document.createElement("input");
        del.setAttribute("value",k);
        del.setAttribute("type","radio");
        del.setAttribute("id",rad);
        del.setAttribute("name","optradio");
         let del1=document.getElementById(lab);
        
         del1.innerHTML=k;
         del1.appendChild(del);
          
    }
        



}
function gotoNextQuestion()
{
     
    if(questionCount>=9)
    {
        console.log(score);
        removeAll();
        return;
    }
    let div=document.getElementById("nob");
     let btn5=document.getElementById("btn2");
     div.removeChild(btn5);
    var para=document.getElementById("question");
    para.innerHTML=question[++questionCount].que;
    var btn=document.getElementById("btn1");
    btn.innerHTML="Submit";
    btn.setAttribute("onclick","checkAnswer()");
}
//console.log(question););