function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  return shout(string);
}

function logWhisper(string){
  return whisper(string);
}

function sayHiToGrandma(string){
  (string === string.toUpperCase) => "YES  INDEED!"; 
}