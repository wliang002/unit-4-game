window.onload = function() {
    
    // variables
    var randNum = randNum;
    var red = red;
    var blue = blue;
    var yellow = yellow;
    var green = green;
    var total = 0;
    var wins = 0;
    var losses = 0;

    // initialize the game;
    initialize();


    function initialize() {
        // generate a random number 19 -120
        randNum = Math.ceil(Math.random() * 102 + 18);
       
        // generate randeom crystal values 1-12
        red = Math.ceil(Math.random() * 12);
        blue = Math.ceil(Math.random() * 12);
        yellow = Math.ceil(Math.random() * 12);
        green = Math.ceil(Math.random() * 12);

        // refresh total to 0;
        total = 0;

        //update the html
        document.getElementById("total").innerHTML = total;
        document.getElementById("rand").innerHTML = randNum;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("lose").innerHTML = losses;
    }

    function winning() {
        wins++;
        initialize();
    }

    function losing() {
        losses++;
        initialize();
    }

    // game play
    if (total < randNum) {
        // click red crystal 
        document.getElementById("red").onclick = function () {
            if (total == 0) {
                total = red;
                document.getElementById("total").innerHTML = red;
            } else {
                total = total + red;
                document.getElementById("total").innerHTML = total;
                if (total == randNum) {
                    winning();
                }
                if (total > randNum) {
                    losing();
                }
            }
        }
        // click blue crystal
        document.getElementById("blue").onclick = function () {
            if (total == 0) {
                total = blue;
                document.getElementById("total").innerHTML = blue;
            } else {
                total = total + blue;
                document.getElementById("total").innerHTML = total;
                if (total == randNum) {
                    winning();
                }
                if (total > randNum) {
                    losing();
                }
            }
        }
        // click yellow crystal
        document.getElementById("yellow").onclick = function () {
            if (total == 0) {
                total = yellow;
                document.getElementById("total").innerHTML = yellow;
            } else {
                total = total + yellow;
                document.getElementById("total").innerHTML = total;
                if (total == randNum) {
                    winning();
                }
                if (total > randNum) {
                    losing();
                }
            }
        }
        //  click green crystal
        document.getElementById("green").onclick = function () {
            if (total == 0) {
                total = green;
                document.getElementById("total").innerHTML = green;
            } else {
                total = total + green;
                document.getElementById("total").innerHTML = total;
                if (total == randNum) {
                    winning();
                }
                if (total > randNum) {
                    losing();
                }
            }
        }
    }
}