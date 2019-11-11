$(document).ready(function() {
    var btn = $("#searchbtn");
    btn.on("click", function(e) {
        var input = $("#input").val();
        $.ajax({
            url: "superheroes.php",
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