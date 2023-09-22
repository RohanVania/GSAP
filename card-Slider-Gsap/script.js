window.addEventListener("mousemove",(event)=>{
    let box=document.getElementsByClassName("box1")[0]; 
    box=box.getBoundingClientRect()
    let mouseX=event.clientX;
    // Map Range Function
    let range=gsap.utils.mapRange(0,window.innerWidth,0+box.width/2,window.innerWidth-(200+box.width/2),mouseX)

    console.log(mouseX)
    gsap.to(".box1",{
        left:range+"px",
        ease:Power3,
    })

})