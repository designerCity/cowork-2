// // description: mbti test 설문지
// // 1. 설문지 창
// // html express 를 이용해서 설문지 창을 만들어야 한다. 
// // 한 사람이 여러개 의 질문을 하는데, 각 질문의 선택을 하면 그 데이터가 누적되어서 다음 질문으로 넘어가게 하는 코드


// function  mbtiQuestion() {
//     var  question  = document .getElementById( "question" );
//     var  answer  = document .getElementById( "answer" );
//     var  questionNum  = document .getElementById( "questionNum" );
//     var  questionCount  = document .getElementById( "questionCount" );
//     var  questionList  = [
//         { q : "당신은 어떤 사람인가요?" , a : [ "A. 늘 긍정적이고 즐거운 사람" , "B. 늘 긍정적이고 즐거운 사람" , "C. 늘 긍정적이고 즐거운 사람" , "D. 늘 긍정적이고 즐거운 사람" ]},
//         { q : "당신은 어떤 사람인가요?" , a : [ "A. 늘 긍정적이고 즐거운 사람" , "B. 늘 긍정적이고 즐거운 사람" , "C. 늘 긍정적이고 즐거운 사람" , "D. 늘 긍정적이고 즐거운 사람" ]},
//         { q : "당신은 어떤 사람인가요?" , a : [ "A. 늘 긍정적이고 즐거운 사람" , "B. 늘 긍정적이고 즐거운 사람" , "C. 늘 긍정적이고 즐거운 사람" , "D. 늘 긍정적이고 즐거운 사람" ]},
//         { q : "당신은 어떤 사람인가요?" , a : [ "A. 늘 긍정적이고 즐거운 사람" , "B. 늘 긍정적이고 즐거운 사람" , "C. 늘 긍정적이고 즐거운 사람" , "D. 늘 긍정적이고 즐거운 사람" ]},
//         { q : "당신은 어떤 사람인가요?" , a : [ "A. 늘 긍정적이고 즐거운 사람" , "B. 늘 긍정적이고 즐거운 사람" , "C. 늘 긍정적이고 즐거운 사람" , "D. 늘 긍정적이고 즐거운 사람" ]},
//         { q : "당신은 어떤 사람인가요?" , a : [ "A. 늘 긍정적이고 즐거운 사람" , "B. 늘 긍정적이고 즐거운 사람" , "C. 늘 긍정적이고 즐거운 사람" , "D. 늘 긍정적이고 즐거운 사람" ]},
//         { q : "당신은 어떤 사람인가요?" , a : [ "A. 늘 긍정적이고 즐거운 사람" , "B. 늘 긍정적이고 즐거운 사람" , "C. 늘 긍정적이고 즐거운 사람" , "D. 늘 긍정적이고 즐거운 사람" ]},
//     ]
//     var  questionIndex  =  0 ;
//     var  selectAnswer  =  "" ;
//     var  result  =  "" ;
//     var  resultCount  =  0 ;
//     var  resultCountA  =  0 ;
//     var  resultCountB  =  0 ;
//     var  resultCountC  =  0 ;
//     var  resultCountD  =  0 ;
//     var  resultCountE  =  0 ;
//     var  resultCountF  =  0 ;
//     //     
// function  nextQuestion() {
//         question .innerHTML  = questionList[questionIndex].q;
//         answer .innerHTML  =  "" ;
//         for  ( var  i  =  0 ; i < questionList[questionIndex].a.length; i++) {
//             var  answerBtn  = document .createElement( "button" );
//             answerBtn .innerHTML  = questionList[questionIndex].a[i];   
//             answerBtn .addEventListener( "click" , selectAnswerFunc);
//             answer .appendChild(answerBtn);
//         }
//         questionNum .innerHTML  = questionIndex +  1 ;
//         questionCount .innerHTML  = questionList.length;
//     }
//     nextQuestion();
//     function  selectAnswerFunc(e) {
//         selectAnswer  = e.target.innerHTML;
//         if  (selectAnswer  ==  "A. 늘 긍정적이고 즐거운 사람" ) {
//             resultCountA  +=  1 ;
//         }  else   if  (selectAnswer  ==  "B. 늘 긍정적이고 즐거운 사람" ) {
//             resultCountB  +=  1 ;
//         }  else   if  (selectAnswer  ==  "C. 늘 긍정적이고 즐거운 사람" ) {
//             resultCountC  +=  1 ;
//         }  else   if  (selectAnswer  ==  "D. 늘 긍정적이고 즐거운 사람" ) {
//             resultCountD  +=  1 ;
//         }  else   if  (selectAnswer  ==  "E. 늘 긍정적이고 즐거운 사람" ) {
//             resultCountE  +=  1 ;
//         }  else   if  (selectAnswer  ==  "F. 늘 긍정적이고 즐거운 사람" ) {
//             resultCountF  +=  1 ;
//         }
//         questionIndex  +=  1 ;
//         if  (questionIndex  < questionList.length) {
//             nextQuestion();
//         }  else  {
//             result  =  "당신은 " ;
//             if  (resultCountA  > resultCountB) {
//                 result  +=  "A" ;
//             }  else  {
//                 result  +=  "B" ;
//             }
//             if  (resultCountC  > resultCountD) {
//                 result  +=  "C" ;
//             }  else  {
//                 result  +=  "D" ;
//             }
//             if  (resultCountE  > resultCountF) {
//                 result  +=  "E" ;
//             }  else  {
//                 result  +=  "F" ;
//             }
//             question .innerHTML  =  "당신의 MBTI는 "  + result +  " 입니다." ;
//             answer .innerHTML  =  "" ;
//             questionNum .innerHTML  =  "" ;
//             questionCount .innerHTML  =  "" ;
//         }
//     }




// // 설문지

// // 2. 설문지 결과 창
// // 설문지를 다 채우고 제출을 하면 결과 창이 나오는 것이다.
// // 결과 창에는 설문지에 대한 설명이 나오고, 설문지에 대한 설명을 클릭하면 설문지로 돌아가는 것이다.

// // 3. 설문지 데이터 저장
// // 설문지를 다 채우고 제출을 하면 설문지 데이터가 저장되는 것이다.
// // 4. 설문지 데이터 불러오기
// // 설문지 데이터를 불러오는 것이다.
// // 5. 설문지 데이터 수정
// // 설문지 데이터를 수정하는 것이다.






// // 그리고 마지막에는 결과 창이 나오는 것이다. 결과로는 mbti 가 나오는데 그 아래에 각 mbti 에 대한 설문도 나와야 한다.   
