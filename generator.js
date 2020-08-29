function generateChordProg(){
  rootKey = ""; // Declare the necessary variables.
  keyType = "";
  var repeats, i, difficulty;
  var fourIntervals = [];
  var fourChords = [];
  var usedNumbers = [];



  if(document.getElementById("basic").checked){ //Check the difficulty requested.
    console.log("Basic is selected.");
    difficulty = "basic";
  } else if(document.getElementById("intermediate").checked){
    console.log("Intermediate is selected.");
    difficulty = "intermediate";
  } else{
    console.log("Advanced is selected.");
    difficulty = "advanced";
  }

  if(document.getElementById("repeats").checked){ // Check if repeats are allowed or not.
    console.log("Repeating chords are not allowed.")
    repeats = true;
  } else{
    console.log("Repeating chords are allowed.")
    repeats = false;
  }


  console.log(" ");
  pickKey() //Generate a random key.

  keyTypeDecider = randomBoolean(); //Generate a boolean, for major or minor. Later on when hard mode is an option, this might be various modes too.
  if(keyTypeDecider){
    keyType = "major";
  } else{
    keyType = "minor";
  }
  console.log("Key type has been decided to be " + keyType);
  console.log(" ");

  if(repeats == false){ // If repeating chords ARE allowed.
    console.log("REPEATS DETECTED");
    for(i = 0; i <= 3; i++){ //Pick 4 different numbers between 1 and 7.
      fourIntervals[i] = randomWithinBounds(7);
      console.log("Interval " + i + " has been set to " + fourIntervals[i]);
    }
    console.log(" ");

    for(i = 0; i <= 3; i++){//Generate all 4 chords using the format above, and add the names to an array.
      fourChords[i] = teoria.note(rootKey).scale(keyType).get(fourIntervals[i]);
      console.log("Chord " + i + " is " + fourChords[i] + " in a repeat-possible system.");
      updateDoc(fourChords, i, difficulty);
    }
  } else{ // If repeating chords AREN'T allowed.
    var totalIntervals = [1, 2, 3, 4, 5, 6, 7];
    console.log("The unshuffled array is: " + totalIntervals);
    totalIntervals = shuffle(totalIntervals);
    console.log("The shuffled array of total possible intervals is now: " + totalIntervals);

    for(i = 0; i <= 3; i++){//Generate all 4 chords using the format above, and add the names to an array.
      fourChords[i] = teoria.note(rootKey).scale(keyType).get(totalIntervals[i]);
      console.log("Chord " + i + " is " + fourChords[i] + " in a repeat-possible system.");
      updateDoc(fourChords, i, difficulty);
    }

      // console.log("Let's generate 4 non-repeating numbers between 1 and 7!");
      // console.log(" ");
      // var hasBeenUsed = false;
      // var amountOfNumbers = 3;
      // var i = 0; // Could this just be 'var i = j = 0;'?
      // var j = 0;
      // while(i < amountOfNumbers){
      //   attemptedNumber = randomWithinBounds(7);
      //   if(usedNumbers.length > 0){ // If there is at least one used number already.
      //     for(j = 0; j < usedNumbers.length; j++){
      //       console.log("Comparing attemptedNumber " + attemptedNumber + " with usedNumber[" + j + "] " + usedNumbers[j] + ".");
      //       if(attemptedNumber == usedNumbers[j]){
      //         hasBeenUsed = true // If the number is found to have already been used.
      //         console.log("Numbers found to match already used.");
      //       }
      //
      //       if(hasBeenUsed == false){ // If the number has not already been used.
      //         console.log("Numbers found NOT to match already used.");
      //         usedNumbers.push(attemptedNumber);
      //         i = i + 1;
      //         console.log("i has been incremented and is now " + i + ".")
      //         break;
      //       }
      //     }
      //   } else{
      //     attemptedNumber = randomWithinBounds(7);
      //     console.log("Nothing was in usedNumbers yet, so we added " + attemptedNumber + ".");
      //     usedNumbers.push(attemptedNumber);
      //     i = i + 1;
      //     console.log("i has been incremented and is now " + i + ".")
      //     console.log(" ");
      //   }
      // }



    // i = 0
    // var usedIntervals = [];
    // hasBeenUsed = false;
    // while(i <= 3){ //Pick 4 different numbers between 1 and 7.
    //   attemptedInterval = randomWithinBounds(7); // Pick a random number between 1-7.
    //   console.log("New attemptedInterval has been generated, it is " + attemptedInterval);
    //
    //   if(usedIntervals.length > 0){ // If something has already been generated.
    //     for(j = 0; j < usedIntervals.length; j++){ // For every already created interval.
    //       console.log("Checking usedInterval[" + j + "] which is " + usedIntervals[j] + " against generated interval " + attemptedInterval);
    //       if(usedIntervals[j] == attemptedInterval){ // Check to see if it is equivalent to the attemptedInterval.
    //         hasBeenUsed = true; // If so, then mark this hasBeenUsed variable true.
    //         console.log("This interval has been used.");
    //       }
    //     }
    //
    //     if(hasBeenUsed == false){ // If the attempted interval has not been used, then add i and add this interval to usedIntervals
    //       console.log("This interval has not been used.");
    //       fourChords[i] = teoria.note(rootKey).scale(keyType).get(attemptedInterval).chord().toString(); // Create the chord and its name from the rootkey, keytype and attempted interval.
    //       usedIntervals.push(attemptedInterval) // Add the interval used to the used intervals array.
    //       console.log("Chord " + i + " is " + fourChords[i] + " in a non-repeating system.");
    //       console.log(" ");
    //       i+=1; // Increment the while loop running this that's binding us to four chords.
    //       console.log("i has been incremented to " + i);
    //     }
    //
    //   } else{ // If nothing has been generated yet.
    //     fourChords[i] = teoria.note(rootKey).scale(keyType).get(attemptedInterval).chord().toString();
    //     usedIntervals.push(attemptedInterval)
    //     console.log("Chord " + i + " is " + fourChords[i] + " in a non-repeating system.");
    //     i+=1; // Increment the while loop running this that's binding us to four chords.
    //     console.log("i has been incremented to " + i);
    //   }
    //   // i+=1; // Increment the while loop running this that's binding us to four chords.
    //   // console.log("i has been incremented to " + i);
    //   console.log(" ");
    // }
    // console.log(" ");
    //
    // // for(i = 0; i <= 3; i++){//Generate all 4 chords using the format above, and add the names to an array.
    // //   fourChords[i] = teoria.note(rootKey).scale(keyType).get(fourIntervals[i]).chord().toString();
    // //   console.log("Chord " + i + " is " + fourChords[i]);
    // //   i+=1;
    // // }
    console.log(" ");
    console.log(" ");
    console.log(" ");
    var counter = 0;
    for(counter = 0; counter < usedNumbers.length; counter++){
      console.log("Number " + counter + ": " + usedNumbers[counter]);
    }
  }

}



function updateDoc(fourChords, i, difficulty){
  if(fourChords.length != 4){
    console.log("ERROR: You need to give the updateDoc() function four chords. It has only " + fourChords.length + " entries.");
  }
  if(i == 0){
    setByDifficulty(fourChords, i, "firstchord", difficulty);
  }else if(i == 1){
    setByDifficulty(fourChords, i, "secondchord", difficulty);
  }else if(i == 2){
    setByDifficulty(fourChords, i, "thirdchord", difficulty);
  }else if(i == 3){
    setByDifficulty(fourChords, i, "fourthchord", difficulty);
    // document.getElementById("fourthchord").innerText = "Chord " + (i + 1) + ": " + fourChords[i].chord().toString();
  }
}

function setByDifficulty(fourChords, i, chordId, difficulty){
  var determinedChord; // This is where the resulting chord will be set to until it is used.
  if(difficulty === "basic"){
    var majOrMin = randomBoolean() // If this comes out as true, then the chord will be minor. Otherwise, the chord will be major.
    if(majOrMin){
      determinedChord = fourChords[i].chord('m').toString();
    } else{
      determinedChord = fourChords[i].chord().toString()
    }
  } else if(difficulty === "intermediate"){
    var chordDecider = randomWithinBounds(8);
    if(chordDecider === 1){ // It outputs as a major chord.
      determinedChord = fourChords[i].chord().toString();
    } else if(chordDecider === 2){ // It outputs as a minor chord.
      determinedChord = fourChords[i].chord('m').toString();
    } else if(chordDecider === 3){ // It outputs as a major 7th chord.
      determinedChord = fourChords[i].chord('maj7').toString();
    } else if(chordDecider === 4){ // It outputs as a minor 7th chord.
      determinedChord = fourChords[i].chord('m7').toString();
    } else if(chordDecider === 5){ // It outputs as a diminished chord.
      determinedChord = fourChords[i].chord('dim').toString();
    } else if(chordDecider === 6){ // It outputs as a augmented chord.
      determinedChord = fourChords[i].chord('aug').toString();
    } else if(chordDecider === 7){ // It outputs as a sus2 chord.
      determinedChord = fourChords[i].chord('sus2').toString();
    } else if(chordDecider === 8){ // It outputs as a sus4 chord.
      determinedChord = fourChords[i].chord('sus4').toString();
    }
  } else if(difficulty === "advanced"){ // Then randomly decide if they are major 7th, minor 7th, dimmaj7, dimmin7, augmaj7, augmin7, 7b5, major minor 7th, major 9th, minor 9th.
    var chordDecider = randomWithinBounds(9);
    if(chordDecider === 1){ // It outputs as a major 7th chord.
      determinedChord = fourChords[i].chord('min7').toString();
    } else if(chordDecider === 2){ // It outputs as a minor 7th chord.
      determinedChord = fourChords[i].chord('maj7').toString();
    } else if(chordDecider === 3){ // It outputs as a diminished major 7th chord.
      determinedChord = fourChords[i].chord('dimmaj7').toString();
    } else if(chordDecider === 4){ // It outputs as a diminished minor 7th chord.
      determinedChord = fourChords[i].chord('dimmin7').toString();
    } else if(chordDecider === 5){ // It outputs as a augmented major 7th chord.
      determinedChord = fourChords[i].chord('augmaj7').toString();
    } else if(chordDecider === 6){ // It outputs as a augmented minor 7th chord.
      determinedChord = fourChords[i].chord('augmin7').toString();
    } else if(chordDecider === 7){ // It outputs as a 7b5 chord.
      determinedChord = fourChords[i].chord('7b5').toString();
    } else if(chordDecider === 8){ // It outputs as a major minor 7th chord.
      determinedChord = fourChords[i].chord('minmaj').toString();
    } else if(chordDecider === 9){ // It outputs as a major 9th chord.
      determinedChord = fourChords[i].chord('maj9').toString();
    } else if(chordDecider === 10){ // It outputs as a minor 9th chord.
      determinedChord = fourChords[i].chord('min9').toString();
    }
  }

  document.getElementById(chordId).innerText = "Chord " + (i + 1) + ": " + determinedChord;
}

function shuffle(arrayToShuffle){ // This is an implementation of the Fisher-Yates Shuffle, used to randomize a permutation. Found here: https://bost.ocks.org/mike/shuffle/ .
  var i = arrayToShuffle.length;
  var j = 0;
  var temp;

  while(i--){
    j = Math.floor(Math.random() * (i+1));

    temp = arrayToShuffle[i];
    arrayToShuffle[i] = arrayToShuffle[j];
    arrayToShuffle[j] = temp;
  }

  return arrayToShuffle;
}

function randomBoolean(){
  var booleanDecider = randomWithinBounds(2);
  if(booleanDecider == 1){
    return true;
  } else{
    return false;
  }
}

function randomWithinBounds(max){ // console.log(Math.floor(Math.random() * 12) + 1);
  return Math.floor(Math.floor(Math.random() * max) + 1);
}

function pickKey(){ //Generate a random key.
  var keyDeterminer = randomWithinBounds(12);

  if(keyDeterminer == 1){
    rootKey = "a";
  } else if(keyDeterminer == 2){
    rootKey = "a#";
  } else if(keyDeterminer == 3){
    rootKey = "b";
  } else if(keyDeterminer == 4){
    rootKey = "c";
  } else if(keyDeterminer == 5){
    rootKey = "c#";
  } else if(keyDeterminer == 6){
    rootKey = "d";
  } else if(keyDeterminer == 7){
    rootKey = "d#";
  } else if(keyDeterminer == 8){
    rootKey = "e";
  } else if(keyDeterminer == 9){
    rootKey = "f";
  } else if(keyDeterminer == 10){
    rootKey = "f#";
  } else if(keyDeterminer == 11){
    rootKey = "g";
  } else if(keyDeterminer == 12){
    rootKey = "g#";
  } else{
    throw "keyDeterminer not fitting.";
  }

  console.log("Key has been determined to be " + rootKey);
}
