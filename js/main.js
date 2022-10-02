//navigation burger menu toggle
const menu = document.querySelector('.nav-burger');
const nav = document.querySelector('.navbar');
let menuOpen= false;
menu.addEventListener('click', ()=>{
    if(menuOpen === false){
        menu.classList.add('active');
        nav.classList.add('active');
        menuOpen = true;
    }
    else{
        menu.classList.remove('active');
        nav.classList.remove('active');
        menuOpen = false;
    }
})

//glider setup





let basket = JSON.parse(localStorage.getItem("data")) || [];
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const cartItemsDiv = document.querySelector('.cart-items');


let calcCartItems = () =>{
    let itemsDiv = document.querySelector('.items-no');
    //console.log(itemsDiv)
    let numberOfItems = basket.map(item=>{
        return item.quantity
    }).reduce((prev, curr)=> prev + curr, 0);
    
    itemsDiv.textContent = `${numberOfItems}`
    localStorage.getItem("cartItems")
        
    localStorage.setItem("cartItems", numberOfItems);
    itemsDiv.textContent = `${localStorage.getItem("cartItems")}`;
    localStorage.setItem("cartItems", numberOfItems);
    //console.log(numberOfItems);

}

calcCartItems();

addToCartBtns.forEach(btn => btn.addEventListener('click', (()=>{
    let selectedProduct = btn.parentElement.parentElement;
    console.log(selectedProduct);
    let product = productsData.filter((product)=>product.id === selectedProduct.id);
    //console.log(product)
    if(!basket.find((x)=>x.id ===product[0].id)){
        product[0].quantity = 1;
        basket.push(product[0]);
    }else{
        let productInBasket = basket.find((x)=>x.id ===product[0].id);
        
        productInBasket.quantity += 1;

    }
    localStorage.setItem("data", JSON.stringify(basket));
    calcCartItems();
    //console.log(basket);

})))



calcCartItems();


let toViewDetails =[];

let viewDetailsBtns = Array.from(document.querySelectorAll('.view-details-btn'));

viewDetailsBtns.forEach(btn => btn.addEventListener('click', (()=>{
    let toViewDetails =[];
    let selectedProduct = btn.parentElement.parentElement;
    /*console.log(selectedProduct);*/
    let detailedproduct = productsData.filter((product)=>product.id === selectedProduct.id);
    toViewDetails.push(detailedproduct[0]);
    //console.log(toViewDetails);
    localStorage.removeItem("details");
    localStorage.setItem("details", JSON.stringify(toViewDetails));
    window.location.href="http://127.0.0.1:5500/product-details.html";
})))

/*
viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', (()=>{
        let  selectedProduct = btn.parentElement.parentElement;
        let product = productsData.filter((product)=>product.id === selectedProduct.id);
        console.log(product);
    }))

})
`
            <div>
                <img src="imgs/shop/5.jpg" alt="">
            </div>
            <div class="details-info">
                <h2>RH Aesthetically Comfortable Wingback Chair</h2>
                <p class="price">£449.00</p>
                <p>Tax included.</p>
                <div class="btns">
                    <a href="#" class="add-to-cart add-to-cart-btn">Add To Cart</a>
                    <a href="#" class="add-to-cart">Add To Favorites</a>
                </div>
                <p>The RH Aesthetically Comfortable Wingback armchair is a total package of style and function for your home or workspace. Its richly hued soft-to-the-touch upholstery, detailed vertical channel-tufted backrest, and brass-toned tapered metal legs set the stage for a memorable design experience.</p>
                <p>Offered in various colors and fabric textures, this outstanding armchair will serve as an anchor piece, allowing you to indulge in comfort and will completely transform your room from bland to modern-day glam.</p>
                <p class="dimensions">W67 x D73 x H80cm</p>
            </div>
`*/








//////////////////Animations//////////////////////


const tl = gsap.timeline({ paused: true });
if(document.querySelector('.home')){
    tl.fromTo(".hero-img", 1, {
        x: 500,
        
    }, {
        x:0,
        ease: "power1.inOut"
    });
    
    tl.fromTo(".hero-hd", 1, {
        y: 500,
        
    }, {
        y:0,
        ease: "power2.inOut"
    },"-=0.8");
    tl.fromTo(".hero-p", 1, {
        y: 500,
        
    }, {
        y:0,
        ease: "power2.inOut"
    }, "-=0.8");
    tl.fromTo(".hero-btn", 1, {
        y: 500,
        
    }, {
        y:0,
        ease: "power2.inOut"
    }, "-=0.6");
    
    tl.fromTo(".nav", 0.8, {
        y: -100,
        
    }, {
        y:0,
        ease: "bounce.out"
    });
    
    tl.play();
};


if(document.querySelector('.about-grid')){
    tl.fromTo(".img1", 1, {
        y: -900,
        
    }, {
        y:0,
        ease: "power1.inOut"
    });
    tl.fromTo("#about-info1", 1, {
        x: 700,
        
    }, {
        x:0,
        ease: "power1.inOut"
    }, "-=0.2");
    tl.fromTo("#about-info2", 1, {
        x: 700,
        
    }, {
        x:0,
        ease: "power1.inOut"
    }, "-=0.2");
    tl.fromTo(".img2", 1, {
        y: 900,
        
    }, {
        y:0,
        ease: "power1.inOut"
    }, "-=0.2");
    tl.play();
}

if(document.querySelector('#shop')){
    
for(let i = 1; i<13; i++){
    console.log(i)
    tl.fromTo(`#a${i}`, 1, {
        opacity: 00,
        y: -200
    }, {
        y: 0,
        opacity:1,
        ease: "power1.inOut"
    }, "-=0.5");
    tl.play();
}
}

if(document.querySelector('#blog')){
    let posts = Array.from(document.querySelectorAll('.post'));

        tl.fromTo(posts[0], 1, {
            x: -500,
            
        }, {
            x:0,
            ease: "power1.inOut"
        });
        tl.fromTo(posts[1], 1, {
            y:-500,
            
        }, {
            y:0,
            ease: "power1.inOut"
        },"-=1");
        tl.fromTo(posts[2], 1, {
            x: 500,
            
        }, {
            x:0,
            ease: "power1.inOut"
        },"-=0.2");
        tl.play();
    
    
}

if(document.querySelector('.contact-grid')){
    tl.fromTo(".qs", 1, {
        x: -900,
        
    }, {
        x:0,
        ease: "power1.inOut"
    });
    tl.fromTo(".office", 1, {
        x: -900,
        
    }, {
        x:0,
        ease: "power1.inOut"
    }, "-=0.8");
    tl.fromTo(".store", 1, {
        x: -900,
        
    }, {
        x:0,
        ease: "power1.inOut"
    }, "-=0.8");
    tl.fromTo("form", 1, {
        x: 900,
        
    }, {
        x:0,
        ease: "power1.inOut"
    }, "-=1");


    tl.fromTo(".map", 1, {
            y: 900,
            
        }, {
            y:0,
            ease: "power1.inOut"
        }, );

    
    tl.play();
    
}
