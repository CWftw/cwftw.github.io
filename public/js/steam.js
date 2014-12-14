var PROXY = "http://jsonp.nodejitsu.com/?url=";
var allGames;
var enteredGames;

$(document).ready(function()
{
    $("#search").click(searchClick);
    
    $.getJSON(PROXY + "http://cwftw.site90.net/steam.php?function=allGames", function (data) {
        allGames = data;
        console.log(data);
   }); 
});

function searchClick()
{
    if($("#games").val().length > 0 && $("#profile").val().length > 0)
    {
        readLines();
    } else
    {
        alert("Invalid input!");
    }
}

function readLines()
{
    var lines = $("#games").val().split('\n');
    $.each(lines, function(){
        matchTitle(this);
    });
}

function matchTitle(title)
{
    console.log(allGames);
    $.each(allGames.applist.apps.app, function (index, item) {
        console.log(item);
        if(item.name == title)
        {
            enteredGames.push(item.appid);
            return false;
        }
    });
}

function generateTable()
{
    //
}