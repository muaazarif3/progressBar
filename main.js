let preBtn = document.querySelector("#pre")
let nxtBtn = document.querySelector('#nxt');
let numberCircle = document.querySelectorAll('.number-circle');
let progessBlueLine = document.querySelector('.progess-blue-line');
preBtn.disabled = true;

     
let counter = 1;


nxtBtn.addEventListener("click", () => {
    progressWidth();
    preBtn.disabled = false;
});
preBtn.addEventListener("click", () => {
    numberCircle[counter - 1].classList.remove('active');
    regressWidth();
    nxtBtn.disabled = false;
})
function progressWidth() {
       
    if (counter < numberCircle.length) {
        let width = (counter * 33.33) + "%";
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
    let actives = document.querySelectorAll('.active')
    if (counter > 0) {
        counter--;
        let width = (actives.length - 1) / (numberCircle.length - 1) * 100 + '%';
        progessBlueLine.style.width = width;
    }

    if (counter <= 1) {
        preBtn.disabled = true;
    }
   

}




