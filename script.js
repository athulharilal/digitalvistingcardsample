let btn = document.querySelectorAll("button");
let detail = document.querySelectorAll("span");

let cleanBtn = function(){
    btn.forEach(function(element){
        element.classList.remove("active")
    })
}

let cleanInfo = function(){
    detail.forEach(function(element){
        element.classList.remove("active")
    })
}

let setInfo= function(i){
    detail[i].classList.add("active")
}
btn.forEach(function(element,index){
    element.addEventListener("click",function(evt){
        cleanBtn();
        element.classList.add("active");

        cleanInfo()

        switch (index) {
            case 0:setInfo(0)
                break;
            case 1:setInfo(2)
                break;
            case 2:setInfo(0)
                setInfo(1)
                setInfo(2)
                setInfo(3)
                break;
            case 3:setInfo(1)
                setInfo(2)
                break;
            case 4:setInfo(2)
                setInfo(3)
                break;
        }
    })
})

