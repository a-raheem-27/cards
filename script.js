


let create  = function( title, cName, views, duration, months){

    let view ;
        
    let length = views.toString().length;
    if (length < 4) {view = views + " views";}
    else if (length >= 4 && length <= 6){ view = views.toString().slice(0, length - 3) + "K";}
    else if (length > 6 && length <= 9) { view = views.toString().slice(0, length - 6) + "M";}
    else {
        view = views.toString().slice(0, length - 9) + "B";
    }

   let  html =  `

      <div class="main">
            <div class="image">
                <img src="./thumbnail.webp" alt="">
                <div class="capsule">
                    ${duration}
                </div>
            </div>
            <div class="desc">
                <h3>${title}</h3>
                <p>${cName}. ${view} views . ${months} ago</p>
            </div>
        </div>

    `
  
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

}
create("Events, Event Bubbling, setInterval & setTimeout | Sigma Web Development Course - Tutorial #74", "CodeWithHarry", "1000000", "34:32", "3 months");

