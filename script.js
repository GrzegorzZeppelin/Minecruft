let number = Math.floor(Math.random()*3+1);
let photo = document.querySelector('.photo');

let img = new Array();
img[0] = '<img src="img/block1.jpg>';
img[1] = '<img src="img/block2.jpg>';
img[2] = '<img src="img/block3.jpg>';

function photoChanging() {

    number++;
    if(number>3) {
        number = 1;
    }
    let img = '<img src="img/block' + number + '.jpg">';
    photo.innerHTML = img;
    
    setTimeout(photoChanging, 1500);

}

window.addEventListener("load", photoChanging );