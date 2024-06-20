function createCard(title, cName, views, monthsOld, duration, thumbnail){

    document.querySelector(".img img").src = thumbnail

    document.querySelector(".duration").textContent = duration;

    document.querySelector(".title").textContent = title;

    document.querySelector(".channel").textContent = cName + " • ";

    document.querySelector(".views").textContent = Formatviews(views)+(" views")+" •  ";

    document.querySelector(".day").textContent = monthsOld+(" months ago")

    

}

function Formatviews(views) {

    if (views>=1000) {

        return (views/1000).toFixed(2)+"K";

    }

    else if(views>=1000000){

        return (views/100000).toFixed(2)+"M";

    }

    else{

        return views.toLocalString;

    }

}



createCard("Installing VS Code & How Websites Work | Sigma Web Development Course -Tutorial #1", "CodeWithHarry", 727000, 2, "31:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw") 