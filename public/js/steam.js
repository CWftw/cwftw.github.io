var PROXY = "http://jsonp.nodejitsu.com/?url=";
var allGames;
var enteredGames = [];

$(document).ready(function () {
    $("#search").click(searchClick);

    $.getJSON(PROXY + "http://cwftw.site90.net/steam.php?function=allGames", function (data) {
        allGames = data;
        console.log(data);
    });
});

function searchClick() {
    if ($("#games").val().length > 0 && $("#profile").val().length > 0) {
        try {
            getId($("#profile").val());
            readLines();
        } catch (ex) {
            alert("Invalid profile URL!");
        }
    } else {
        alert("Please fill in all required fields!");
    }
}

function getId(url) {
    $.ajax({
        type: "GET",
        url: url + "?xml=1",
        dataType: "jsonp xml",
        success: function (xmlResponse) {
            console.log(xmlResponse);
        }
    });

    //        $.getJSON(url + "?xml=1?callback=?", function (data) {
    //            console.log(data);
    //   }); 
}


function readLines() {
    var lines = $("#games").val().split('\n');
    $.each(lines, function () {
        matchTitle(this);
    });
}

function matchTitle(title) {
    console.log(allGames);
    $.each(allGames.applist.apps.app, function (index, item) {
        console.log(item);
        if (item.name == title) {
            enteredGames.push(item.appid);
            return false;
        }
    });
}

function generateTable() {
    //
}