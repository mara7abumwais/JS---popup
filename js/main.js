let items = document.getElementsByClassName("item");
let slideItem = document.getElementById("slideItem");
let close = document.getElementById("close");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let number = document.getElementById("number");
let slide = document.getElementById("slide"); 
let index = 0;
for(let i=0;i<items.length;i++)
{
    items[i].addEventListener('click',function(e)
    {
        index = i ;
        let img = e.target.src;
        slideItem.childNodes[3].setAttribute("src",img);
        slideItem.childNodes[1].innerHTML = `${index+1}/${items.length}`;
        slide.classList.remove("d-none");
        slide.classList.add("d-block");
    });
};

close.addEventListener("click",function()
{
    slide.classList.remove("d-block");
    slide.classList.add("d-none");
});

prev.addEventListener("click",function()
{
    index--;
   changeImage(index);
});

next.addEventListener("click",function()
{
    index++;
    changeImage(index);
});

function changeImage(i)
{
    if(i >= items.length)
    {
        index = 0;
    }
    else if(i<0)
    {
        index = items.length -1;
    }
    else
    {
        index=i;
    }
    let img = items[index].childNodes[1].getAttribute('src');
    slideItem.childNodes[3].setAttribute("src",img);
    slideItem.childNodes[1].innerHTML = `${index+1}/${items.length}`;
}

document.onkeydown = function(e)
{
    let code = e.keyCode;
    if(code == 39)
    {
        next.click();
    }
    else if(code == 37)
    {
        prev.click();
    }
    else if (code == 27)
    {
        close.click();
    }
}