 import {log,
getQuoteById,
getParagraph,
findDeniroRanID,
NSFWFilter} from "cool-shit-pkg";

log("Go to hell world");
 
//hello world is for the weak, be a man
const myPNum = document.getElementById("numberParagraphs") as HTMLInputElement;
const headerInput = document.getElementById("headerInsert") as HTMLInputElement;
const headerArray = [
"Thus sayith De Niro!!",
"The De Niro has spoken",
"Never question the De Niro",
"This is the De Niro way", 
"Who you calling Robert?",
"It's Mr. De Niro to you!",
"Does De Niro like brownies?",
"Everyone likes brownies right?", 
"What's not to like about a brownie?",
"With some Milk ya know?",
"Even tough guys like brownies." ]
 const ptagger = document.getElementById("pTag") as HTMLButtonElement;


myPNum.addEventListener("input", generateOutputText)
ptagger.addEventListener("click", e => boxCheck(e)); 

//number of paragraphs linking
function getParagraphNums () {
    const myPNum = document.getElementById("numberParagraphs") as HTMLInputElement;
   
    return Number(myPNum.value)
    
};
console.log(getParagraphNums)

function generateOutputText () {
    const numOfP = getParagraphNums();
    const arrayMaker = ([...Array(numOfP)]);
    const mapArray = arrayMaker.map((item,index) => {
        console.log(item,index)
    });
}

function headerGenerator () {
     headerArray.map((headerArray,index) => {
       
       return {headerArray, index}  
     })
     //pull in array, 
}
function headerRandom (min: number, max: number) {
return Math.floor(Math.random()* (max-min+1)+min);
}

function boxCheck(e:Event) {
    const tag1 = "<p>";
    const tag2 = "</p>";

    if(e){
        console.log(`${tag1} ${getParagraphNums} ${tag2}`);
    } 
   
}






//Header size config function

//P tag generation functions

//NSF filter toggle linking

//generate paragraph linking button

//clear/reset text box button


