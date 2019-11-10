window.onload = function() {

    /*Fetch the data by opening an AJAX request using XMLHTTPRequest that alert the superheroes.php*/
    document.getElementsByClassName("btn")[0].addEventListener("click", function() {
        var http = new XMLHttpRequest();
        http.open("GET", "superheroes.php", true);
        http.send();

        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var x = document.getElementById("input").value;
                if (x == "") {
                    document.getElementById("result").innerHTML = http.responseText;
                } else if (x != "") {
                    document.getElementById("result").innerHTML = "";
                }
                console.log(http.responseText);

            }
        }

    });

}