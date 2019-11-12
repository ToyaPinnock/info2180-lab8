$(document).ready(function() {
    var btn = $("#myform");
    btn.on("submit", function(e) {
        console.log(name);
        var input = $("#input").val();
        $.ajax({
            url: "superheroes.php",
            data: { name: name },
            success: function(result) {
                if (input == "") {
                    document.getElementById("result").innerHTML = result;
                } else if (input != "") {
                    document.getElementById("result").innerHTML = "";
                }
                console.log(result);
            }
        });
    });




});