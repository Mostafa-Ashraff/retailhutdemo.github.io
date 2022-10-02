function btns(){
    let prevBtn = document.querySelector('.slick-prev');
    prevBtn.innerHTML = `<span><i class="fa-solid fa-angle-left"></i></span>`;
    
    let prevNext = document.querySelector('.slick-next');
    prevNext.innerHTML = `<span><i class="fa-solid fa-angle-right"></i></span>`;
    
};
setInterval(btns, 1)
