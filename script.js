let number = Math.floor(Math.random()*3+1);
let photo = document.querySelector('.photo');

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