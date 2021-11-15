alert('wlecome to my websitie of Gallery');

var btn = document.getElementsByClassName("btn");
var gallery = document.getElementById("gallery");


var images = new Array(
    "./Studio8 Img/pic1.jpg",
    "./Studio8 Img/pic2.jpg",
    "./Studio8 Img/pic3.jpg",
    "./Studio8 Img/pic4.jpg"
    );

    for(let i=0; i<btn.length; i++){
        btn[i].onclick = () => {
            gallery.src = images[i];
            let current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace("active", "");
                this.className += " active";
        };
    }