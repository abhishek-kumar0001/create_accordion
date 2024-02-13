const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion)=>{
    const icon = accordion.querySelector(".icon");
    const ans = accordion.querySelector(".answer");
    accordion.addEventListener("click",(e)=>{

        if(icon.classList.contains("active")){
            icon.classList.remove("active");
            ans.style.maxHeight = null;
            
        } else{
            icon.classList.add("active");
            ans.style.maxHeight = ans.scrollHeight + "px";
        }
    })
})