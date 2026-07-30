function nextPage(number){

    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });


    document.getElementById("page"+number)
    .classList.add("active");

}



function selectDate(button){

    button.style.background="#c9184a";

}



function createHeart(){

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(3+Math.random()*3)+"s";


    document.body.appendChild(heart);


    setTimeout(()=>{
        heart.remove();
    },5000);

}


setInterval(createHeart,500);
