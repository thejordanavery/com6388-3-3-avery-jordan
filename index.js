var questionsArr = [
    {   question: 'Was Last Night by Morgan Wallen a US Billboard Hot 100 number one chart hit?',
        answer: true},

    {   question: 'Was Crazy In Love by Beyoncé a US Billboard Hot 100 number one chart hit?',
        answer: true},

    {   question: 'Was Toxic by Britney Spears a US Billboard Hot 100 number one chart hit?',
        answer: false},

    {   question: 'Was Often by The Weeknd a US Billboard Hot 100 number one chart hit?',
        answer: false},

    {   question: 'Was Waffle House by the Jonas Brothers a CA Billboard Hot 100 number one chart hit?',
        answer: false},
]

var correctAnswers = 0;

function runQuiz (){
    for (var i=0; i <questionsArr.length; i++){
        if (confirm(questionsArr[i].question)===questionsArr[i].answer){
            correctAnswers++}
        }
    }

    if (correctAnswers <= 5) {
        alert(Math.round(100 * correctAnswers / 5) + "%")
    }
document.write (runQuiz());

