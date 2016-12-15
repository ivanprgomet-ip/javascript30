var secondHand = document.querySelector(".sec-hand");

        setInterval(GetCurrentTime, 1000);

        function GetCurrentTime() {
            var now = new Date();
         
            var currentSeconds = now.getSeconds();
            const degreesPerSecond = ((currentSeconds / 60) * 360) + 90;
            secondHand.style.transform = `rotate(${degreesPerSecond}deg)`;

            var currentMinute = now.getMinutes();

               // now.getHours();
        }