$(function () {
    $('.btn').click(() => {
        var a = $('.inp').val();
        alert("YOUR ENTERED VALUE IS --> " + a);

        if (a === 'element selector in jquery') {
            // alert("hello");
            $("#textfiled").text(
                "there are three types of element selector. 1.element selector                                                     2.id selector                                                            3.class selector"
            );
        }

        if (a === 'what is jquery') {
            // alert("hello");
            $("#textfiled").text(
                " jQuery is a lightweight, 'write less, do more', JavaScript library."
            );
        }

        if (a === 'why use jquery') {
            // alert("hello");
            $("#textfiled").text(
                " The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code."
            );
        }

        if (a === 'others element selector in jquery') {
            // alert("hello");
            $("#textfiled").text(
                "1. $('*').click(); //use for clicks on all the elements                                                                                                                                         2. $('p.odd').click(); //use for clicks on all the elements                                                                                                                           3. $('p:first').click(); //use for clicks on all the elements"
            );
        }

        if (a === 'what is event') {
            // alert("hello");
            $("#textfiled").text(
                "click on any object or tap is called event."
            );
        }

        if (a === 'events in jquery') {
            // alert("hello");
            $("#textfiled").text(
                "1. mouse events                                                                      2. keyboard events                                                                      3. form events                                                                    4. window events"
            );
        }

        if (a === 'who is makes this app') {
            // alert("hello");
            $("#textfiled").text(
                "this app made by the kuldeep saini from rajasthan jaipur pragpura."
            );
        }

        if (a === 'who is makes this software') {
            // alert("hello");
            $("#textfiled").text(
                "this app made by the kuldeep saini from rajasthan jaipur pragpura."
            );
        }

        if (a === 'which class do you read') {
            // alert("hello");
            $("#textfiled").text(
                '"now standard 9th class"'
            );
        }

        if (a === 'why use the this keyword') {
            // alert("hello");
            $("#textfiled").text(
                'such as i have many paragraph lines if which line i click on that and that is clicked or selected. and this also use for show html tag. such as console.log("hi hello",this);'
            );
        }

        if (a === 'hints') {
            // alert("hello");
            $("#textfiled").text(
                'do not give extra space                                                          1. which class do you read                                                    2.why use the jquery                                                                    3. what is jquery'
            );
        }

        if (a === "name its") {
            $("#textfiled").text(
                "jquery project 2.0"
            );
        }

        if (a === "kuldeep saini") {
            $("#textfiled").text(
                'kuldeep saini is a programmer and his coding journey started from class 6 almost then to the 9 class the real coding journey was succesful started in year 2022!'
            );
        }

        if (a === "kuldeep saini") {
            $('.imgs').css({
                "border": "2px solid aqua",
                "visibility": "visible"
            })
        } else {
            $('.imgs').css({
                "border": "2px solid aqua",
                "visibility": "hidden"
            })
        }

        if (a === "kuldeep father") {
            $("#textfiled").text(
                'kuldeep father is a very kind person and he always completes wishes of his childs.'
            );
        }

        if (a === "kuldeep father") {
            $('.fa').css({
                "border": "2px solid aqua",
                "visibility": "visible"
            })
        } else {
            $('.fa').css({
                "border": "2px solid aqua",
                "visibility": "hidden"
            })
        }
    });
});