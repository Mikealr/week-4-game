var computersRandomNumber = Math.floor(Math.random() * 80 + 35);

    var wins = 0;
    var losses = 0;
    var Guess = 0;
    var button1 = Math.floor(Math.random() * 20) + 1;
    var button2 = Math.floor(Math.random() * 20) + 2;
    var button3 = Math.floor(Math.random() * 20) + 3;
    var button4 = Math.floor(Math.random() * 20) + 4;

    // Display computers random number

    $("#randomNumber").html(computersRandomNumber);

    // Onclick image
    $("#img1").on("click", function () {
        Guess += button1;
        $("#currentScore").html(Guess);
        results();
    });

    $("#img2").on("click", function () {
        Guess += button2;
        $("#currentScore").html(Guess);
        results();
    });

    $("#img3").on("click", function () {
        Guess += button3;
        $("#currentScore").html(Guess);
        results();
    });

    $("#img4").on("click", function () {
        Guess += button4;
        $("#currentScore").html(Guess);
        results();
    });
