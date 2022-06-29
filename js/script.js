window.addEventListener('DOMContentLoaded', () =>{

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();   

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        } 
    });

    //Modal

    const modalTriggers = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'), 
          modalCloseBtn = document.querySelector('[data-close]');


    modalTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('show');
            modal.classList.add('hide');
            document.body.style.overflow = '';

        }
    });
    
}); 
