console.log("hi welcome to quiz");
(function(){
function QuestionObj(question,answers,correctAns){
        this.question = question;
        this.answers = answers;
        this.correctAns = correctAns;
}
QuestionObj.prototype.displayQuestion = function(){
    console.log(this.question);
    for (let i = 0; i < this.answers.length; i++){
    console.log(i+" : " + this.answers[i]);
    }
};
QuestionObj.prototype.checkAnswer = function (){
    let number = window.prompt(this.question);
    if(number == this.correctAns){
    console.log("Correct Answer " + number);
    }
    else{
        console.log("Wrong Answer");
    }
};

var question1 = new QuestionObj("what is the name of your teacher??",["jhon","Jonas",                "emily"],1);
var question2 = new QuestionObj("what is the captial city of Copenhagen?",                           ['stockholm','copenhagen','berlin'],1);
var question3 = new QuestionObj("What is the population of Denmark",['6 Millions','2 Millions'],0);

var questions = [question1, question2, question3];

let randNum = Math.floor(Math.random()* questions.length);
questions[randNum].displayQuestion();
questions[randNum].checkAnswer();
})();