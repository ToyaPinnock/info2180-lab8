window.onload = function() {
    var http;
    /*Fetch the data by opening an AJAX request using XMLHTTPRequest that alert the superheroes.php*/
    document.getElementsByClassName("btn")[0].addEventListener("click", function(url, input) {
        http = new XMLHttpRequest();
        var input = document.querySelector("#input").value;
        http.onreadystatechange = process;
        http.open("POST", "superheroes.php");
        http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        http.send('Input=' + encodeURIComponent(input));

    });

    function process() {
        if (this.readyState == 4 && this.status == 200) {
            var x = document.getElementById("input").value;
            if (x == "") {
                document.getElementById("result").innerHTML = http.responseText;
            } else if (x != "") {
                document.getElementById("result").innerHTML = "";
            }

            console.log(http.responseText);
            //console.log(name);
        }
    }


}