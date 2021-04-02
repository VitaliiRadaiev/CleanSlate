{
    let footerInputs = document.querySelectorAll('input.footer-form__input');
    if(footerInputs.length) {
        footerInputs.forEach(input => {
            let wrap = input.closest('.footer-form__item');

            input.addEventListener('focus', () => {
                wrap.classList.add('_focus');
            })
            input.addEventListener('blur', () => {
                if(!input.value.trim()) {
                    wrap.classList.remove('_focus');               
                } 
            })
        })
    }
}
