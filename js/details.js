let detailedproduct = JSON.parse(localStorage.getItem('details')) || [];

//console.log(detailedproduct);
let generateProductDet = ()=>{

    let detailsDiv = document.querySelector('.details');
    detailsDiv.innerHTML = `
    <div>
        <img src="${detailedproduct[0].img}" alt="">
    </div>
    <div class="details-info" id="${detailedproduct[0].id}">
        <h2>${detailedproduct[0].name}</h2>
        <p class="price">$ ${detailedproduct[0].price}</p>
        <p>Tax included.</p>
        <div class="btns">
            <a href="#" class="add-to-cart add-to-cart-btn">Add To Cart</a>
            <a href="#" class="add-to-cart">Add To Favorites</a>
        </div>
        <p>The ${detailedproduct[0].name} is a total package of style and function for your home or workspace. Its richly hued soft-to-the-touch upholstery, detailed vertical channel-tufted backrest, and brass-toned tapered metal legs set the stage for a memorable design experience.</p>
        <p>Offered in various colors and fabric textures, this outstanding armchair will serve as an anchor piece, allowing you to indulge in comfort and will completely transform your room from bland to modern-day glam.</p>
        <p class="dimensions">W67 x D73 x H80cm</p>
    </div>
`


}

generateProductDet();