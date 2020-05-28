
function switchTheme(){
    
    if (document.getElementById("theme-switch").checked == true) //dark -> white
    {
        document.getElementById("back-top").style.backgroundColor = "hsl(225, 100%, 98%)"; //back top
        document.getElementById("back-main").style.backgroundColor = "hsl(0, 0%, 100%)"; //back main
        document.getElementById("title-top").style.color = "hsl(230, 17%, 14%)"; //title top
        document.getElementById("followers").style.color = "hsl(228, 12%, 44%)"; //followers
        document.getElementById("switch-title").style.color = "hsl(228, 12%, 44%)"; //switch title
        document.getElementById("title-bottom").style.color = "hsl(228, 12%, 44%)"; //title bottom

        document.getElementsByClassName("tile-inner-top")[0].style.backgroundColor = "hsl(227, 47%, 96%)"; //tile inner top
        document.getElementsByClassName("username")[0].style.color = "hsl(228, 12%, 44%)"; //username
        document.getElementsByClassName("count")[0].style.color = "hsl(230, 17%, 14%)"; //count
        document.getElementsByClassName("type")[0].style.color = "hsl(228, 12%, 44%)"; //type

        document.getElementsByClassName("tile-inner-top")[1].style.backgroundColor = "hsl(227, 47%, 96%)"; //tile inner top
        document.getElementsByClassName("username")[1].style.color = "hsl(228, 12%, 44%)"; //username
        document.getElementsByClassName("count")[1].style.color = "hsl(230, 17%, 14%)"; //count
        document.getElementsByClassName("type")[1].style.color = "hsl(228, 12%, 44%)"; //type

        document.getElementsByClassName("tile-inner-top")[2].style.backgroundColor = "hsl(227, 47%, 96%)"; //tile inner top
        document.getElementsByClassName("username")[2].style.color = "hsl(228, 12%, 44%)"; //username
        document.getElementsByClassName("count")[2].style.color = "hsl(230, 17%, 14%)"; //count
        document.getElementsByClassName("type")[2].style.color = "hsl(228, 12%, 44%)"; //type

        document.getElementsByClassName("tile-inner-top")[3].style.backgroundColor = "hsl(227, 47%, 96%)"; //tile inner top
        document.getElementsByClassName("username")[3].style.color = "hsl(228, 12%, 44%)"; //username
        document.getElementsByClassName("count")[3].style.color = "hsl(230, 17%, 14%)"; //count
        document.getElementsByClassName("type")[3].style.color = "hsl(228, 12%, 44%)"; //type

        document.getElementsByClassName("tile-outer-bottom-row-1")[0].style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementsByClassName("tile-outer-bottom-row-1")[1].style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementsByClassName("tile-outer-bottom-row-1")[2].style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementsByClassName("tile-outer-bottom-row-1")[3].style.backgroundColor = "hsl(227, 47%, 96%)";

        document.getElementsByClassName("source bottom")[0].style.color = "rgb(99, 104, 126)"; //username
        document.getElementsByClassName("count bottom")[0].style.color = "rgb(30, 32, 42)"; //count

        document.getElementsByClassName("source bottom")[1].style.color = "rgb(99, 104, 126)"; //username
        document.getElementsByClassName("count bottom")[1].style.color = "rgb(30, 32, 42)"; //count
        
        document.getElementsByClassName("source bottom")[2].style.color = "rgb(99, 104, 126)"; //username
        document.getElementsByClassName("count bottom")[2].style.color = "rgb(30, 32, 42)"; //count
        
        document.getElementsByClassName("source bottom")[3].style.color = "rgb(99, 104, 126)"; //username
        document.getElementsByClassName("count bottom")[3].style.color = "rgb(30, 32, 42)"; //count
        
        document.getElementsByClassName("tile-outer-bottom-row-2")[0].style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementsByClassName("tile-outer-bottom-row-2")[1].style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementsByClassName("tile-outer-bottom-row-2")[2].style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementsByClassName("tile-outer-bottom-row-2")[3].style.backgroundColor = "hsl(227, 47%, 96%)";
        
        document.getElementsByClassName("source bottom")[4].style.color = "rgb(99, 104, 126)"; //username
        document.getElementsByClassName("count bottom")[4].style.color = "rgb(30, 32, 42)"; //count

        document.getElementsByClassName("source bottom")[5].style.color = "rgb(99, 104, 126)"; //username
        document.getElementsByClassName("count bottom")[5].style.color = "rgb(30, 32, 42)"; //count
        
        document.getElementsByClassName("source bottom")[6].style.color = "rgb(99, 104, 126)"; //username
        document.getElementsByClassName("count bottom")[6].style.color = "rgb(30, 32, 42)"; //count
        
        document.getElementsByClassName("source bottom")[7].style.color = "rgb(99, 104, 126)"; //username
        document.getElementsByClassName("count bottom")[7].style.color = "rgb(30, 32, 42)"; //count

        document.getElementById("slider").style.backgroundImage = "linear-gradient(to bottom left, rgb(255, 255, 255), rgb(255, 255, 255)";
    }
    else if (document.getElementById("theme-switch").checked == false) //white -> dark
    {
        document.getElementById("back-top").style.backgroundColor = "hsl(232, 19%, 15%)"; //back top
        document.getElementById("back-main").style.backgroundColor = "hsl(230, 17%, 14%)"; //back main
        document.getElementById("title-top").style.color = "rgb(253, 254, 253)"; //title top
        document.getElementById("followers").style.color = "rgb(119, 129, 168)"; //followers
        document.getElementById("switch-title").style.color = "white"; //switch title
        document.getElementById("title-bottom").style.color = "rgb(253, 254, 253)"; //title bottom

        document.getElementsByClassName("tile-inner-top")[0].style.backgroundColor = "hsl(228, 28%, 20%)"; //tile inner top
        document.getElementsByClassName("username")[0].style.color = "rgb(119, 129, 168)"; //username
        document.getElementsByClassName("count")[0].style.color = "rgb(255, 255, 255)"; //count
        document.getElementsByClassName("type")[0].style.color = "rgb(119, 129, 168)"; //type

        document.getElementsByClassName("tile-inner-top")[1].style.backgroundColor = "hsl(228, 28%, 20%)"; //tile inner top
        document.getElementsByClassName("username")[1].style.color = "rgb(119, 129, 168)"; //username
        document.getElementsByClassName("count")[1].style.color = "rgb(255, 255, 255)"; //count
        document.getElementsByClassName("type")[1].style.color = "rgb(119, 129, 168)"; //type

        document.getElementsByClassName("tile-inner-top")[2].style.backgroundColor = "hsl(228, 28%, 20%)"; //tile inner top
        document.getElementsByClassName("username")[2].style.color = "rgb(119, 129, 168)"; //username
        document.getElementsByClassName("count")[2].style.color = "rgb(255, 255, 255)"; //count
        document.getElementsByClassName("type")[2].style.color = "rgb(119, 129, 168)"; //type

        document.getElementsByClassName("tile-inner-top")[3].style.backgroundColor = "hsl(228, 28%, 20%)"; //tile inner top
        document.getElementsByClassName("username")[3].style.color = "rgb(119, 129, 168)"; //username
        document.getElementsByClassName("count")[3].style.color = "rgb(255, 255, 255)"; //count
        document.getElementsByClassName("type")[3].style.color = "rgb(119, 129, 168)"; //type

        document.getElementsByClassName("tile-outer-bottom-row-1")[0].style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementsByClassName("tile-outer-bottom-row-1")[1].style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementsByClassName("tile-outer-bottom-row-1")[2].style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementsByClassName("tile-outer-bottom-row-1")[3].style.backgroundColor = "hsl(228, 28%, 20%)";
        
        document.getElementsByClassName("source bottom")[0].style.color = "rgb(119, 129, 168)"; //username
        document.getElementsByClassName("count bottom")[0].style.color = "rgb(255, 255, 255)"; //count

        document.getElementsByClassName("source bottom")[1].style.color = "rgb(119, 129, 168)"; //username
        document.getElementsByClassName("count bottom")[1].style.color = "rgb(255, 255, 255)"; //count
        
        document.getElementsByClassName("source bottom")[2].style.color = "rgb(119, 129, 168)"; //username
        document.getElementsByClassName("count bottom")[2].style.color = "rgb(255, 255, 255)"; //count
        
        document.getElementsByClassName("source bottom")[3].style.color = "rgb(119, 129, 168)"; //username
        document.getElementsByClassName("count bottom")[3].style.color = "rgb(255, 255, 255)"; //count

        document.getElementsByClassName("tile-outer-bottom-row-2")[0].style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementsByClassName("tile-outer-bottom-row-2")[1].style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementsByClassName("tile-outer-bottom-row-2")[2].style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementsByClassName("tile-outer-bottom-row-2")[3].style.backgroundColor = "hsl(228, 28%, 20%)";

        document.getElementsByClassName("source bottom")[4].style.color = "rgb(119, 129, 168)"; //username
        document.getElementsByClassName("count bottom")[4].style.color = "rgb(255, 255, 255)"; //count

        document.getElementsByClassName("source bottom")[5].style.color = "rgb(119, 129, 168)"; //username
        document.getElementsByClassName("count bottom")[5].style.color = "rgb(255, 255, 255)"; //count
        
        document.getElementsByClassName("source bottom")[6].style.color = "rgb(119, 129, 168)"; //username
        document.getElementsByClassName("count bottom")[6].style.color = "rgb(255, 255, 255)"; //count
        
        document.getElementsByClassName("source bottom")[7].style.color = "rgb(119, 129, 168)"; //username
        document.getElementsByClassName("count bottom")[7].style.color = "rgb(255, 255, 255)"; //count


        document.getElementById("slider").style.backgroundImage = "linear-gradient(to bottom left, hsl(210, 78%, 56%), hsl(146, 68%, 55%)";
    }
}