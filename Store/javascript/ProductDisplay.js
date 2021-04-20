// Get the product grid element using DOM (EC)
var gridDiv = document.getElementById("ProductGrid");

// Create an element with the row class and add it to the grid (EC)
var row = document.createElement("div");
row.className = "row";
gridDiv.appendChild(row);

// intialize the grid (EC)
var cellCount = 0;

// Add all products to page (EC)
for (let i = 0; i < Products.length; i++)
{
    const product = Products[i];

    if (product[4] != "grid")
    {
        continue;
    }

    // Start a new row every 4 cells (EC)
    if (cellCount >= 4)
    {
        cellCount = 0;
        row = document.createElement("div");
        row.className = "row";
        gridDiv.appendChild(row);
    }

    // Create cell div (EC)
    var cell = document.createElement("div");
    cell.className = "cell";

    // Create Image (EC)
    var image = document.createElement("img");
    image.className = "productImage";
    image.src = product[0];

    // Create Title header (EC)
    var title = document.createElement("h2");
    title.innerText = product[1];

    // Create Discription paragraph (EC)
    var discription = document.createElement("p");
    discription.innerText = product[2];

    // Create Price paragraph (EC)
    var price = document.createElement("h3");
    price.className = "productPrice";
    price.innerText = product[3];

    // Create add to basket button (EC)
    var addToBasket = document.createElement("button");
    addToBasket.className = "productButton";
    addToBasket.innerText = "Add to basket";

    addToBasket.addEventListener("click", function()
    {
        addItemToBasket(i)
    }, false);

    // Add all emements to the cell and add the cell to the row (EC)
    cell.appendChild(image);
    cell.appendChild(title);
    cell.appendChild(discription);
    cell.appendChild(price);
    cell.appendChild(addToBasket);
    row.appendChild(cell);

    // Keep track of the current cells in a row (EC)
    cellCount++;
}

// Add item to the basket using an id store in Session storage (EC)
function addItemToBasket(id)
{
    var cart = sessionStorage.getItem("cart");
    if (cart === null)
    {
        sessionStorage.setItem("cart", id);
    }
    else
    {
        sessionStorage.setItem("cart", cart + "," + id);
    }
}
