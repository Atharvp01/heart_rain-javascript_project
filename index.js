function rainFall(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);
    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = Math.random()*2 + 3 + "s";
    heart.innerText = "❤️‍🔥";
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(rainFall, 300);