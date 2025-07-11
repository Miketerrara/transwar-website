const elements = {
    bar: document.querySelector('.menu__bars'),
    barsClose: document.querySelector('.dms-bar'),
    btnRastreio: document.querySelector('.rastreio__btn'),
    rastreioContainer: document.querySelector('.rastreio__container'),
    navContainer:document.querySelector('.nav__container'),
    faq: document.querySelectorAll('.box-questions'),
    resposta: document.querySelectorAll('.response'),
    chevron: document.querySelectorAll('.fi-br-angle-small-down')        
}

elements.bar.addEventListener('click', () => {
    elements.navContainer.classList.toggle('nav__container--active')

})
elements.barsClose.addEventListener('click', () => {
    elements.bar.dispatchEvent(new Event('click'));
})

elements.btnRastreio.addEventListener('click', () => {
    console.log('clicou');
    elements.rastreioContainer.classList.toggle('rastreio__container--active')
})
elements.faq.forEach((item, index) => {
    item.addEventListener('click', () => {
        elements.chevron[index].classList.toggle('fi-br-angle-small-down--active');
        elements.resposta[index].classList.toggle('response--active');
    });
});