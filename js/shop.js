let shopCards = document.getElementById('products');
let generateCard = ()=>{
    return(shopCards.innerHTML = productsData.map((product)=>{
        let {id, name, img, price} = product;
        return `
        <div class="slider-card" id="${id}">
                    <img src="${img}" alt="">
                    <div class="card-links">
                    <span class="add-to-cart-btn"><i><i class="bi bi-cart3"></i></i></span>
                    <span class="view-details-btn"><i class="bi bi-eye-fill"></i></span>
                    </div>
                    <div class="card-text">
                        <p>${name}</p>
                        <p>$ ${price}</p>
                    </div>

        </div>
        `
    }).join('')
)}

generateCard();