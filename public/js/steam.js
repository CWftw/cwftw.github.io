var allGames;

$(document).ready(function()
{
    $("#search").onclick(searchClick);
    
    $.getJSON("http://cwftw.hj.cx/steam.php?function=allGames", function (data) {
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
        
    } else
    {
        alert("Invalid data");
    }
}

function generateTable()
{
    //
}