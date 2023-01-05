const chooseRegion = document.querySelector(".choose-icon");
const mainLeft = document.querySelector(".main-left");

chooseRegion.addEventListener('click',(e) => {    
    if(e.target.classList.contains("fa-angles-down")){
        mainLeft.style.display = "block";
        e.target.classList.remove("fa-angles-down");
        e.target.classList.add("fa-angles-up");
    }else{
        e.target.classList.add("fa-angles-down");
        e.target.classList.remove("fa-angles-up");

        mainLeft.classList.add("main-left-collapse");
        setTimeout(() => {
            mainLeft.classList.remove("main-left-collapse");;
            e.target.classList.remove("fa-angles-up");
            e.target.classList.add("fa-angles-down");        
            mainLeft.style.display = "none";
            },
            1500
        )
    }
})
