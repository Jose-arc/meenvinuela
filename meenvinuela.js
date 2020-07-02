//ngOnInit
window.onload = () => {
    renderTemplate();
}

renderTemplate = () => {
    function makeid() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    let stylesheet = document.createElement('style');
    document.head.appendChild(stylesheet);
    stylesheet.textContent =
        ".btn-meenvinuela{ " +
        "display:block; " +
        "width:70px; " +
        "height:70px; " +
        "color:#fff; " +
        "position: fixed; " +
        "right:20px; " +
        "bottom:20px; " +
        "border-radius:50%; " +
        "line-height:80px; " +
        "text-align:center; " +
        "z-index:999; " +
        "}" +
        ".btn-meenvinuela img{ " +
        "width: 50px; " +
        "height: 50px; " +
        "transition: transform .2s; " +
        "}" +
        ".btn-meenvinuela:hover img{" +
        "-ms-transform: scale(1.5); " +
        "-webkit-transform: scale(1.5); " +
        "transform: scale(1.5); " +
        "z-index: 1; " +
        "}";

    let random = makeid();

    let div = document.createElement('div');
    div.id = random;
    div.className = 'btn-meenvinuela';
    div.innerHTML =
        "<img src=\"https://raw.githubusercontent.com/Jose-arc/meenvinuela/master/img/vinuela.png\" alt=\"\">";
    document.body.appendChild(div);

    let btn_like = document.getElementById(random).addEventListener("click", soundLisent, false);

    function soundLisent() {
        //alert("me enviñuela presente");
        var sound = document.createElement('audio');
        sound.src = "https://raw.githubusercontent.com/Jose-arc/meenvinuela/master/sound/sound.mp3";
        sound.play();
    }
}
