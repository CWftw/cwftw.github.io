//var PROXY = "http://jsonp.nodejitsu.com/?url=";
var allGames;

$(document).ready(function()
{
    $("#search").click(searchClick);
    
    $.getJSON("http://cwftw.site90.net/steam.php?function=allGames?callback=?", function (data) {
        console.log(data);
        allGames = data;
        $.each(data.applist.apps.app, function (index, item) {
            console.log(item);
        });
   }); 
});

function searchClick()
{
    if($("#games").val().length > 0 && $("#profile").val().length > 0)
    {
        alert("Good");
    } else
    {
        alert("Invalid input");
    }
}

function generateTable()
{
    //
}