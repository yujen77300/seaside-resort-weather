const chooseRegion = document.querySelector(".choose-icon");
const mainLeft = document.querySelector(".main-left");

chooseRegion.addEventListener('click',(e) => {    
    console.log(e.target.classList.value)
    if(e.target.classList.contains("fa-angles-down")){
        mainLeft.style.display = "block";
        e.target.classList.remove("fa-angles-down");
        e.target.classList.add("fa-angles-up");
        mainLeft.addEventListener("click", function(){
            this.classList.add("main-left-collapse");
            setTimeout(() => {
                console.log(e.target.classList.value)
                this.classList.remove("main-left-collapse");;
                e.target.classList.remove("fa-angles-up");
                e.target.classList.add("fa-angles-down");        
                mainLeft.style.display = "none";
            },
            1500
            );
        })               
    }else{
        mainLeft.style.display = "none";
        e.target.classList.add("fa-angles-down");
        e.target.classList.remove("fa-angles-up")    
    }
})
