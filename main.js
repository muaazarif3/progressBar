let preBtn = document.querySelector("#pre")
let nxtBtn = document.querySelector('#nxt');
let numberCircle = document.querySelectorAll('.number-circle');
let counter = 1;
let progessBlueLine = document.querySelector('.progess-blue-line');
preBtn.disabled = true;

nxtBtn.addEventListener("click", () => {

    progressWidth();
    preBtn.disabled = false;
});
preBtn.addEventListener("click", () => {
    regressWidth();
    nxtBtn.disabled = false;

})
function progressWidth() {
    if (counter < numberCircle.length) {
        let width =  (counter * 33.33) + "%";
        progessBlueLine.style.width = width;
        setTimeout(function () {
            numberCircle[counter].classList.add('active');
            counter++;
        }, 500)
    }
    if (counter >= numberCircle.length - 1) {
        nxtBtn.disabled = true;
    }
}
function regressWidth() {
    if (counter > 0) {
        numberCircle[counter -1 ].classList.remove('active');
        counter--;
        let width =  (counter * 33.33) + "%";
        progessBlueLine.style.width = width;
    }

    if (counter <= 0) {
        preBtn.disabled = true;
    }

}
