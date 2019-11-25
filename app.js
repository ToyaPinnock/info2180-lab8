window.onload = function() {
    /*Fetch the data by opening an AJAX request using XMLHTTPRequest that alert the superheroes.php*/
    document.getElementById("searchbtn").addEventListener("click", function() {

        var hr = new XMLHttpRequest();
        var url = "superheroes.php";
        var fn = document.getElementById("input").value;

        hr.open("GET", url, true);

        hr.onreadystatechange = function() {
            if (hr.readyState == 4 && hr.status == 200) {
                //var return_data = hr.responseText;
                //console.log(return_data);
                //document.getElementById("result").innerHTML = return_data;
            }
        }

        hr.send(fn);
    });

}