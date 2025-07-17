const elements = {
    bar: document.querySelector('.menu__bars'),
    barsClose: document.querySelector('.dms-bar'),
    btnRastreio: document.querySelector('.rastreio__btn'),
    rastreioContainer: document.querySelector('.rastreio__container'),
    navContainer:document.querySelector('.nav__container'),
    faq: document.querySelectorAll('.box-questions'),
    resposta: document.querySelectorAll('.response'),
    chevron: document.querySelectorAll('.fi-br-angle-small-down'),
    modalScreen: document.querySelector('.modal__rastreio'),
    btnModal: document.getElementById('modalRastreio'),
    modalCarrerBtn: document.querySelectorAll('.carrer__opportunities-modal'),
    modalOp: document.querySelector('.modal__opportunities'),
    mdTitle: document.getElementById('md-Title')

}

elements.bar.addEventListener('click', () => {
    elements.navContainer.classList.toggle('nav__container--active')

})
elements.barsClose.addEventListener('click', () => {
    elements.bar.dispatchEvent(new Event('click'));
})

function fecharModal(modal) {
    let fechar = document.querySelectorAll('.close');
    fechar.forEach(item =>{
        item.addEventListener('click', () =>{       
            let className = modal.className.split(' ')[0];
            modal.classList.remove(`${className}--active`);
            let body = document.getElementsByTagName('body')
            let screen = Array.from(body[0].children);
            for (let i = 0; i < screen.length; i++) {
                screen[i].classList.remove('blur');       
                
            }
        })
    })
}

elements.btnModal.addEventListener('click',()=>{
    elements.modalScreen.classList.toggle('modal__rastreio--active')
    let modal = elements.modalScreen;
    let body = document.getElementsByTagName('body')
    let screen = Array.from(body[0].children);
    fecharModal(modal);
    for (let i = 0; i < screen.length-4; i++) {
        screen[i].classList.add('blur');        
    }
});

elements.modalCarrerBtn.forEach((item, index) =>{
    item.addEventListener('click', () =>{
        function updateModal() {
            elements.modalOp.classList.toggle('modal__opportunities--active');
            let localTitle = document.getElementsByClassName('modal__title');
            let txtTitle = localTitle[index].innerHTML;            
            elements.mdTitle.innerHTML = txtTitle;
            let tagPosition = document.getElementsByClassName('modal__tags');
            let elementTags = Array.from(tagPosition[index].children);
            let localTag = document.getElementById('md-Tag');
            let datePosition = document.getElementsByClassName('txt-date');
            let eachDate = datePosition[index].innerHTML;
            let localDate = document.getElementById('md-date');

            localDate.innerHTML = "";

            localTag.innerHTML = "";
            
            localDate.innerHTML = eachDate;
            elementTags.forEach(child => {
                localTag.appendChild(child.cloneNode(true));
            })
        }
        updateModal();
        console.log(elements.mdTitle)        
    })
    let modal = elements.modalOp;
    fecharModal(modal);
})

let tagLocal = document.querySelectorAll('.modal__tags--local');
let parent = tagLocal[0].parentElement;
let parentParent = parent.parentElement;

const filters = document.getElementsByClassName('check')

const check = document.getElementsByClassName('txt-tags');


console.log(filters[1].name)
function filter() {

    const modals = document.querySelectorAll('.carrer__opportunities-modal');
    modals.forEach(modal => {
        modal.style.display = "none";
    });
    for (let n = 0; n < filters.length; n++) {
        if (filters[n].checked) {
            for (let i = 0; i < check.length; i++) {
                if (check[i].innerHTML.trim().toUpperCase() === filters[n].name.trim().toUpperCase()) {
                    const modal = check[i].closest('.carrer__opportunities-modal');
                    if (modal) modal.style.display = "block";
                }
            }
        }
    }
    const anyChecked = Array.from(filters).some(f => f.checked);
    if (!anyChecked) {
        modals.forEach(modal => {
            modal.style.display = "block";
        });
    }
}



//console.log(parentParent)