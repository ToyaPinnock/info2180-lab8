window.onload = function() {

    document.getElementsByClassName("btn")[0].addEventListener("click", function() {
        var http = new XMLHttpRequest();
        http.open("GET", "superheroes.php", true);
        http.send();
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var x = http.responseText;
                alert(x);
                //console.log(x);
            }
        }


    });

}