const products = [
    // Men's Fashion
    { id: 1, name: "Classic Shirt", category: "men", price: 139.99, size: ["s", "m", "l", "xl"], color: "yellow", image: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f1.jpg" },
    { id: 1, name: "Classic Shirt", category: "men", price: 149.99, size: ["s", "m", "l", "xl"], color: "green", image: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f2.jpg" },
    { id: 1, name: "Classic Shirt", category: "men", price: 169.99, size: ["s", "m", "l", "xl"], color: "white", image: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f4.jpg" },
    { id: 1, name: "Classic Shirt", category: "men", price: 159.99, size: ["s", "m", "l", "xl"], color: "brown", image: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f3.jpg" },
    { id: 1, name: "Classic White T-Shirt", category: "men", price: 99.99, size: ["s", "m", "l", "xl"], color: "white", image: "https://i.pinimg.com/1200x/67/23/eb/6723ebdf7971a082f06d7c16f0c398da.jpg" },
    { id: 2, name: "Premium Black Hoodie", category: "men", price: 179.99, size: ["m", "l", "xl"], color: "green", image: "https://i.pinimg.com/736x/1d/2d/c6/1d2dc6639e55b2ff12c878af24f2de59.jpg" },
    { id: 3, name: "Slim Fit Jeans", category: "men", price: 169.99, size: ["s", "m", "l"], color: "black", image: "https://i.pinimg.com/1200x/00/a8/3b/00a83b556decf65a3f3dec5e656671cb.jpg" },
    { id: 4, name: "Casual Chinos", category: "men", price: 199.99, size: ["m", "l", "xl"], color: "brown", image: "https://i.pinimg.com/736x/09/70/90/097090d53f00ce3710f4b19fb7114b98.jpg" },
    
    // Women's Fashion
     { id: 5, name: "Classic Shirt", category: "women", price: 179.99, size: ["xs", "s", "m", "l"], color: "blue", image: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/n1.jpg" },
      { id: 5, name: "Elegant Dress", category: "women", price: 189.99, size: ["xs", "s", "m", "l"], color: "brown", image: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f6.jpg" },
    { id: 5, name: "Summer Dress", category: "women", price: 159.99, size: ["xs", "s", "m", "l"], color: "brown", image: "https://i.pinimg.com/736x/25/e1/ef/25e1ef055644b70b75abbd2b80ac62b5.jpg" },
    { id: 6, name: "Elegant Black Blazer", category: "women", price: 89.99, size: ["xs", "s", "m"], color: "black", image: "https://i.pinimg.com/1200x/e0/f5/b2/e0f5b2d0df7e187fff7ea37f7af2aa45.jpg" },
    { id: 7, name: "Flowy Skirt", category: "women", price: 149.99, size: ["s", "m", "l"], color: "brown", image: "https://i.pinimg.com/1200x/20/d2/0f/20d20fd8302a6f8e68f5232da6c2d68e.jpg" },
    { id: 8, name: "Cozy Sweater", category: "women", price: 179.99, size: ["xs", "s", "m", "l"], color: "brown", image: "https://i.pinimg.com/1200x/7a/e3/c5/7ae3c5492fb156e42650c91914a95055.jpg" },
    
    // Accessories
    { id: 9, name: "Classic Black Belt", category: "accessories", price: 94.99, size: ["one"], color: "black", image: "https://i.pinimg.com/1200x/bd/75/d7/bd75d7364ec885df194df4c26350db62.jpg" },
    { id: 10, name: "Wool Beanie", category: "accessories", price: 100.00, size: ["one"], color: "black", image: "https://i.pinimg.com/736x/9f/50/ad/9f50ad660000c8f0872b957cb4476e39.jpg" },
    { id: 11, name: "Summer Cap", category: "accessories", price: 98.99, size: ["one"], color: "green", image: "https://i.pinimg.com/1200x/36/43/37/364337a988fdd5595b38abbf1dba4cb9.jpg" },
    
    // Shoes
    { id: 12, name: "Premium Athletic Shoes", category: "shoes", price: 199.99, size: ["s", "m", "l", "xl"], color: "black", image: "https://i.pinimg.com/736x/e7/63/df/e763df4e0ae499f8c38cef281f5aad39.jpg" },
    { id: 13, name: "Running Sneakers", category: "shoes", price: 189.99, size: ["s", "m", "l", "xl"], color: "green", image: "https://i.pinimg.com/736x/de/2d/02/de2d021e61235ccfcd81fa355f6790fc.jpg" },
    { id: 14, name: "Formal Shoes", category: "shoes", price: 199.99, size: ["s", "m", "l", "xl"], color: "brown", image: "https://i.pinimg.com/1200x/75/c5/83/75c5834ce8cd653d4618a606210781c4.jpg" },
    { id: 15, name: "Chuck Taylor", category: "shoes", price: 199.99, size: ["s", "m", "l", "xl"], color: "black", image: "https://i.pinimg.com/1200x/52/f0/5c/52f05cdb1e824927e8c10e195bcd72ca.jpg" },

];

// Initialize products on collections page
    if (document.getElementById('productsContainer')) {
        displayProducts(products);
    }

    // Price slider update
    const priceFilter = document.getElementById('priceFilter');
    const priceValue = document.getElementById('priceValue');
    if (priceFilter) {
        priceFilter.addEventListener('input', (e) => {
            priceValue.textContent = e.target.value;
        });
    };

 
var offerBar = document.querySelector(".offer-bar")
document.getElementById("offer-close").addEventListener("click",function(){
    offerBar.style.display="none"
})

var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})
document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})

var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)

var likebutton=document.querySelectorAll(".like-button")

likebutton.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="./Images/redheart.png"
        }
        else{
            e.target.src="./Images/blackheart.png"
        }
    })
})


window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")
    }
    })});

 
// Display products in grid
function displayProducts(productsToDisplay) {
    const container = document.getElementById('productsContainer');
    const noResults = document.getElementById('noResults');
    const resultCount = document.getElementById('resultCount');

    if (!container) return;

    container.innerHTML = '';

    if (productsToDisplay.length === 0) {
        noResults.style.display = 'block';
        resultCount.textContent = '0';
        return;
    }

    noResults.style.display = 'none';
    resultCount.textContent = productsToDisplay.length;

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card featured';
        productCard.innerHTML = `
            <span class="badge">sale</span>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <button class="btn-quick" onclick="alert('Added to cart: ${product.name}')">Shop Now</button>
            </div>
            <i class="fas fa-heart heart-icon" onclick="toggleHeart(this)"></i>
            <h3>${product.name}</h3>
            <p class="price">₹${product.price.toFixed(2)}</p>
        `;
        container.appendChild(productCard);
    });
}

function filterAndSearch() {

    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const maxPrice = parseFloat(document.getElementById("priceFilter").value);

    // Category
    const selectedCategories = Array.from(
        document.querySelectorAll('input[type="checkbox"]:checked')
    )
    .map(cb => cb.value)
    .filter(v => ["men","women","accessories","shoes"].includes(v));

    // Size
    const selectedSizes = Array.from(
        document.querySelectorAll('input[type="checkbox"]:checked')
    )
    .map(cb => cb.value)
    .filter(v => ["xs","s","m","l","xl"].includes(v));

    // Color
    const selectedColors = Array.from(
        document.querySelectorAll('input[type="checkbox"]:checked')
    )
    .map(cb => cb.value)
    .filter(v => ["black","white","blue","green","yellow","brown"].includes(v));

    const filteredProducts = products.filter(product => {

        const matchSearch = product.name.toLowerCase().includes(searchTerm);

        const matchCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(product.category);

        const matchPrice = product.price <= maxPrice;

        const matchSize =
            selectedSizes.length === 0 ||
            selectedSizes.some(size => product.size.includes(size));

        const matchColor =
            selectedColors.length === 0 ||
            selectedColors.includes(product.color);

        return matchSearch && matchCategory && matchPrice && matchSize && matchColor;
    });

    displayProducts(filteredProducts);
}
// Reset filters
function resetFilters() {
    // Reset search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';

    // Reset price
    const priceFilter = document.getElementById('priceFilter');
    const priceValue = document.getElementById('priceValue');
    if (priceFilter) {
        priceFilter.value = 200;
        priceValue.textContent = '200';
    }

    // Reset checkboxes
    document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Check "All Products"
    const allCheckbox = document.querySelector('.filter-group input[type="checkbox"][value="all"]');
    if (allCheckbox) allCheckbox.checked = true;

    // Display all products
    displayProducts(products);
}

// Sort products
function sortProducts() {
    const sortBy = document.getElementById('sortBy');
    if (!sortBy) return;

    const container = document.getElementById('productsContainer');
    const productCards = Array.from(container.querySelectorAll('.product-card'));

    switch (sortBy.value) {
        case 'price-low':
            productCards.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
                const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
                return priceA - priceB;
            });
            break;
        case 'price-high':
            productCards.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
                const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
                return priceB - priceA;
            });
            break;
        case 'name':
            productCards.sort((a, b) => {
                const nameA = a.querySelector('h3').textContent;
                const nameB = b.querySelector('h3').textContent;
                return nameA.localeCompare(nameB);
            });
            break;
    }

    container.innerHTML = '';
    productCards.forEach(card => container.appendChild(card));
}

// Toggle heart icon
function toggleHeart(element) {
    element.style.color = element.style.color === 'rgb(255, 107, 107)' ? 'white' : '#ff6b6b';
}


// Handle contact form submission
function handleContactForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    // Simple validation
    if (!name || !email || !message) {
        showFormMessage('Please fill in all required fields', 'error');
        return;
    }

    // Simulate form submission
    setTimeout(() => {
        showFormMessage('Thank you! We received your message. We will get back to you soon.', 'success');
        document.querySelector('.contact-form').reset();
    }, 500);
}

// Show form message
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (!formMessage) return;

    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Toggle FAQ
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const wasActive = faqItem.classList.contains('active');

    // Close all FAQs
    document.querySelectorAll('.faq-item.active').forEach(item => {
        item.classList.remove('active');
    });

    // Open clicked FAQ if it wasn't already open
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}
