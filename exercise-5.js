var word = 'Welcome';
var second = 'to';
var third = 'Konohamaru';
var wordTotal = 1;
var wordIndex = 2;
var wordIndex2 = 3;
var wordIndex3 = 1;

/* Let's Form A Sentence */
switch(wordTotal) {
   case 1:
      console.log(word);
      break;
   case 2:
      console.log(word + ' ' + second);
      break;
   case 3:
      console.log(word + ' ' + second + ' ' + third);
      break;
   default:
      console.log('Add more the word total, please!');
      break;
}

/* Index Accessing One By One */
switch(wordIndex) {
   case 1:
      console.log(word[0] + word[1] + word[2] + word[3] + word[4] + word[5] + word[6]);
      break;
   case 2:
      console.log(second[0] + second[1]);
      break;
   case 3:
      console.log(third[1] + third[2] + third[3] + third[4] + third[5] + third[6] + third[7] + third[8] + third[9] + third[10]);
      break;
   default:
      console.log('Sorry, there are no words on your sentence anymore.');
      break;
}

/* Breaking Sentence (Again) With Substring */
switch(wordIndex2) {
   case 1:
      console.log(word.substring(0, 7));
      break;
   case 2:
      console.log(second.substring(0, 2));
      break;
   case 3:
      console.log(third.substring(0, 10));
      break;
   default:
      console.log('Sorry, there are no words on your sentence anymore.');
      break;
}

/* Breaking Sentence (Yet Again) and Count Each Length */
switch(wordIndex3) {
   case 1:
      console.log(word.substring(0, 7) + ', with length: ' + word.length);
      break;
   case 2:
      console.log(second.substring(0, 2) + ', with length: ' + second.length);
      break;
   case 3:
      console.log(third.substring(0, 10) + ', with length: ' + third.length);
      break;
   default:
      console.log('Sorry, there are no words on your sentence anymore.');
      break;
}
