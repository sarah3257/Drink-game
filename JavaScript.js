cola = 0
fanta = 0
sprite = 0
count = 0
function onLoad() {
    document.getElementsByTagName("button")[0].addEventListener("click", addCan);
    document.getElementsByTagName("button")[1].addEventListener("click", addCan);
    document.getElementsByTagName("button")[2].addEventListener("click", addCan);
}
function addCan() {
    x = event.target.parentElement;
    y = document.createElement("div");
    y.addEventListener("click", add)
    if (x.className == "cola" && cola < 5) {
        x.appendChild(y);
        cola++
    }
    else if (x.className == "fanta" && fanta < 5) {
        x.appendChild(y);
        fanta++
    }
    else if (x.className == "sprite" && sprite < 5) {
        x.appendChild(y);
        sprite++
    }
}
function add() {
    if (count < 5) {
        c = event.target;
        c.removeEventListener("click", add);
        c.addEventListener("click", buy);

        count++;
        if (c.parentElement.className == "cola") {
            cola--;
            c.style.backgroundImage = "url('img/img11.png')";
        }
        if (c.parentElement.className == "fanta") {
            fanta--;
            c.style.backgroundImage = "url('img/img22.png')";
        }
        if (c.parentElement.className == "sprite") {
            sprite--;
            c.style.backgroundImage = "url('img/img33.png')";
        }
        document.getElementsByClassName("down")[0].appendChild(c)
        document.getElementsByTagName("label")[0].innerHTML = "לתשלום:" + count * 5;
    }
}
function buy() {
    event.target.parentElement.removeChild(event.target);
    count--
    document.getElementsByTagName("label")[0].innerHTML = "לתשלום:" + count * 5;

}