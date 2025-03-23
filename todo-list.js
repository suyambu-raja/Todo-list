var score = 0
var ts = 0

var sec_score = 0
var sec_ts = 0

var inpp = document.getElementById("inpp")
var two_btn = document.querySelector(".two-btn")
var three_main = document.querySelector(".three-main")

var span_1 = document.querySelector(".span-1")
var span_2 = document.querySelector(".span-2")



function updateProgressBar() {

    let totalTasks = score + 0;

    if (totalTasks < 1) totalTasks = 1;


    let progress = (sec_score / totalTasks) * 100;
    if (progress > 100) progress = 100;

    var progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = progress + "%";
}





two_btn.addEventListener("click", function () {

    var new_div = document.createElement("div")

    new_div.setAttribute("class", "three")

    new_div.innerHTML = "<div class='three-1'>" +
        "<input type='checkbox' class='three-inp'  onclick='ltg(event)'  >" +
        "<h3 class='infor'>" + inpp.value + "</h3>" +
        "</div>" +
        "<div class='three-2'>" +
        "<i class='fa-solid fa-pen edit-icon'  onclick='edit(event)' style='margin-right:15px;'></i>" +
        "<i class='fa-solid fa-trash delete-icon' onclick='del(event)'></i>" +
        "</div>"

    three_main.append(new_div)

    ts = ++score
    span_1.textContent = ts

    updateProgressBar()



}

)




var three_inp = document.querySelector(".three-inp")
var three_1 = document.querySelector(".three-1")



function ltg(event) {
    var checkbox = event.target;

    var textEl = checkbox.parentElement.querySelector(".infor")


    if (checkbox.checked) {
        textEl.style.textDecoration = "line-through";
        sec_ts = ++sec_score
    } else {
        textEl.style.textDecoration = "none";
        sec_ts = --sec_score
    }
    span_2.textContent = sec_ts
    updateProgressBar()



    if (sec_score <= 0) {
        sec_score = 0

        sec_ts = sec_score

        span_2.textContent = sec_ts

    }
}







var checkinp = document.querySelector("#checkinp")

function del(event) {

    event.target.closest('.three').remove()

    ts = --score
    span_1.textContent = ts



    
    let checkbox = event.target.closest('.three').querySelector(".three-inp") 
   

    if (checkbox.checked) { 
        
        sec_ts = --sec_score
        span_2.textContent = sec_ts 
        updateProgressBar()
    }

   
    if (sec_score < 0) {
        sec_score = 0;
        sec_ts = sec_score;
        span_2.textContent = sec_ts;
    }






}



function edit(event)
{
   infoo=event.target.closest('.three').querySelector(".infor")

   inpp.value=infoo.textContent

   inpp.focus()

   del(event)
     
}