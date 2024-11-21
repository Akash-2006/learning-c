
const part1 = "2.1 Comments  \n\nComments are the things which are ignored by your compiler There are two types of them they are : \n\nSingle line comments : \n\nwhich is represented by //this is comment \n\nMultiLine comments : \n\nwhich is represented by /* this is comment */ \n\n";
const gap = "\t\t\n\n";
const part2 = "2.2 Identifier \n\nthe first character must be alphabetic. The underscore ‘_’ counts as alphabetic. Upper and lower case letters are considered \n different. No more than the first eight characters are significant, and only the first seven for external identifiers.  \n\n";
const part3 = "2.3 Keywords \n\n The following identifiers are reserved for use as keywords, and may not be used otherwise: \n\n";
const list = "int\t\tbreak\nchar\t\tcontinue\nfloat\t\tif\ndouble\t\telse\nstruct\t\tfor \nauto\t\tdo \nextern\t\twhile \nregister\tswitch \nstatic\t\tcase \ngoto\t\tdefault \nreturn\t\tentry \nsizeof \n\n";
const end = "End of lesson ";

function lessons(lessonContent) {
  console.clear();
  console.log("\t\t\t\twelcome to interactive learning \n\n\n");
  console.log(lessonContent);
  prompt('press enter to write quiz');
  console.clear();
}

function quiz(questionContent, answer) {
  console.log("\n", questionContent);
  const answerEntered = prompt("enter the answer");
  console.log("\n the answer is:", answer);
  return answer === answerEntered;
}

function quizQuestions(question, answer) {
  const isCorrect = quiz(question, answer);

  return isCorrect ? 1 : 0;
}

function quizManagement() {
  let marks = 0;
  marks += quizQuestions("keywords are ____________  words.", "reserved");
  marks += quizQuestions("Which special character can be used as identifier ?", "underscore");
  marks += quizQuestions("how many types of comments are there", '2');
  marks += quizQuestions("which things are ignored by compiler ? ", "comments");
  if (marks > 3) {
    console.log("you passed the test");
  } else {
    console.log("your are falied try the again");
    process();
  }
}

function process() {
  lessons(part1 + gap + part2 + gap + part3 + list + gap + end);
  quizManagement();
}

process();
