
let selectedRating ;
let notify = document.querySelector(".notify");
function selected(rating){
    let scoreratingAll = document.querySelectorAll(".rating-state .state"); 
    scoreratingAll.forEach(ele => {
        // check rating
        if(ele.innerHTML.trim() == rating){
            ele.classList.add("active");
            notify.style.display = "none";
            notify.parentElement.style.height = "380px";
        }else{
            ele.classList.remove("active");
        }
    })
    selectedRating = rating;
}
function displayrating(){
    let score = document.querySelector(".selectedrating");
    score.innerHTML = ` ${selectedRating} `;
}
let btnsubmit = document.getElementById("submit");
btnsubmit.onclick = () =>{
    let ratingbox = document.querySelector(".rating");
    let thankyoubox = document.querySelector(".ty");
    if(!isNaN(selectedRating)){
    ratingbox.style.display = "none";
    thankyoubox.style.display = "block";
    displayrating(); 
    }else{
        
        ratingbox.style.height= "400px";
        notify.style.display = "block";
    }
}
