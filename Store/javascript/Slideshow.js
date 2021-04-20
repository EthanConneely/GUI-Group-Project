// Get all the slide images (EC)
var slidecontainer = document.getElementById("SlideshowContainer");

// change the slide every 10 seconds (EC)
window.setInterval(function()
{
    cycleRight()
}, 10000);

// Add all products to page (EC)
for (let i = 0; i < Products.length; i++)
{
    const product = Products[i];

    if (product[4] != "slideshow")
    {
        continue;
    }

    // Create slide div (EC)
    var slide = document.createElement("div");
    slide.className = "slide";

    var img = document.createElement("img");
    img.className = "slideImage";
    img.src = product[0]
    slide.appendChild(img);

    var infoDiv = document.createElement("div");
    infoDiv.className = "slideInfo";

    var discription = document.createElement("h2")
    discription.className = "slideText";
    discription.innerText = product[1];
    infoDiv.appendChild(discription);

    var discription = document.createElement("p")
    discription.className = "slideText";
    discription.innerText = product[2];
    infoDiv.appendChild(discription);

    var cost = document.createElement("p")
    cost.className = "slideText";
    cost.style.color = "green";
    cost.style.fontWeight = "800";
    cost.innerText = product[3];
    infoDiv.appendChild(cost);

    var addToBasketBtn = document.createElement("button")
    addToBasketBtn.className = "productButton";
    addToBasketBtn.innerText = "Add to basket";
    addToBasketBtn.addEventListener("click", function()
    {
        addItemToBasket(product[0])
    });
    infoDiv.appendChild(addToBasketBtn);

    slide.appendChild(infoDiv);

    slidecontainer.appendChild(slide);
}

var slides = document.getElementsByClassName("slide");

// Display a random image on the slides (EC)
let slideIndex = Math.floor(Math.random() * slides.length);
showSlide(slideIndex);

// cycle the images (EC)
function cycleLeft()
{
    slideIndex--;
    showSlide();
}

function cycleRight()
{
    slideIndex++;
    showSlide();
}

function showSlide()
{
    if (slideIndex >= slides.length)
    {
        slideIndex = 0;
    }

    if (slideIndex < 0)
    {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "inline-block";
}
