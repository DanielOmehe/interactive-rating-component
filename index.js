const submitBtn = document.querySelector('.rating-submit');
const ratingComponent = document.querySelector('.interactive-rating-component');
const thankYouComponent = document.querySelector('.interactive-rating-thank-you');
const ratingBtns = document.querySelectorAll('.rating-btn');
const ratingCount = document.querySelector('.rating-count');
let ratingVal = 0;

ratingBtns.forEach((btn, indx) => {
    btn.addEventListener('click', (e)=>{
        ratingBtns.forEach(btn => {
            btn.style.backgroundColor = '';
            btn.style.color = '';            
        })
        btn.style.backgroundColor = 'hsl(0, 0%, 100%)';
        btn.style.color = 'hsl(216, 12%, 8%)';
        ratingVal = btn.innerText
    })
})

submitBtn.addEventListener('click', (e)=>{
    thankYouComponent.classList.add('show');
    ratingComponent.classList.add('hide');
    ratingCount.innerText = `You selected ${ratingVal} out of 5`

    setTimeout(()=>{
        console.log('Page reloaded');
        
        location.reload();
    }, 5000);
});
