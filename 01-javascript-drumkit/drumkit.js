function playSound(e){
    // whenever a keydown event occurs, the function runs 
    //is there an audio element on the page that has a data-key of the same keycode that we get 
    //through the event variable?
    //we use the document.queryselector to look for 1 only, and document.queryselectorall to look for more.
    //important to get the backticks right in the queryselector
    //we get null when we have no audio element associated with the pressed keys keycode
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);

     //also select corresponding key because we want to add animation to it when it gets pressed
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);//selects the div with the key class in this case
    //can also put div where we have .key in the queryselector

    if (audio == null) return; //stop the functiion from running alltogether
    
    audio.currentTime = 0;//rewind to the start
    audio.play();//if you call play on an audio elemtn thats already playing, it wont play again
    //what we want to do is rewind it to the start if we re-press the button.

    key.classList.add("playing");
}

function removeTransition(e){
    if(e.propertyName !== 'transform')
        return;//skip it if its not a transform 

        //we reverse the transition...
    //this is equal to the key. its allways equal to whatever got called against it
    //so addEventListener got called, and you can see that 'key' was called against it (below)
    this.classList.remove("playing");
}

//get all elemtns with class .key
const keys = document.querySelectorAll('.key');
//we want to listen on an transition end event on each of the keys (pads)
//so we must iterate over each and every key and attach the eventlistener to it
keys.forEach(key=>key.addEventListener("transitionend",removeTransition));

/*
    listen for the keydown event. first get whatever element you are listening for, in this case 
    its the window (but can also be eg. document, div etc.)

    the event (whatever name: in this case its 'e' and its just an object full of data)
*/
window.addEventListener('keydown', playSound);