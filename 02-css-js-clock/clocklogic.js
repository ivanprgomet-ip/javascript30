var secondHand = document.querySelector("#sec-hand");
var minuteHand = document.querySelector("#min-hand");
var HourHand = document.querySelector("#hour-hand");



        setInterval(UpdateClockHands, 1000);

        function UpdateClockHands() {
            //getting current date for every interval (every second) (required to stay updated)
            var now = new Date(); 

            //getting current second
            var currentSecond = now.getSeconds(); //sample: 20,21,22,23,24 etc.
            var degreesPerSecond = ((currentSecond / 60) * 360)+90;
            secondHand.style.transform = `rotate(${degreesPerSecond}deg)`;

            var currentMinute = now.getMinutes();//sample: 5 (60s later), 6 (60s later), 7... etc.
            var degreesPerMinute = ((currentMinute/60)*360)+90;
            minuteHand.style.transform = `rotate(${degreesPerMinute}deg)`;

            var currentHour = now.getHours(); //sample: 16 (60min later),17 (60 min later).. etc.
            var degreesPerHour = ((currentHour/60)*360)+90;
            HourHand.style.transform = `rotate(${degreesPerHour}deg)`;

            //setting the transition property to none when we tick into 60th second 
            //to avoid the 'bug' when the hands get reset back to their intiiali position
            //and then right into current date positions 
            if(currentSecond == 0)
                secondHand.style.transition = "none";
            else
                secondHand.style.transition = "all 0.2s cubic-bezier(0.34,-1.15, 0, 1.98)";
        }