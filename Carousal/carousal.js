let slide = 1;
show(slide);

function nextSlide(n) 
{
    show(slide += n);
}
function gotoslide(m) {
    show(slide = m)
}
function show(n) 
{
    let i;
    let slide_img = document.getElementsByClassName("slider");
    //document.write(slide_img.length);
    let dots = document.getElementsByClassName("dot");
    for(i = 0; i<slide_img.length; i++)
    {
        slide_img[i].style.display = "none";
    }
    for(i=0; i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    if(n>slide_img.length)
    {
        slide = 1; 
    }
    if(n<1)
    {
        slide = slide_img.length;
    }
    slide_img[slide-1].style.display = "block";
    dots[slide-1].className += " active";
}
// Function to move to the next slide every 60 seconds
 function autoSlide()
{
    nextSlide(1);
}

// SetInterval to call autoSlide every 60 seconds
setInterval(autoSlide, 3000);