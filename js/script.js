document.addEventListener('click', function(event) {

    if (event.target.closest('.online-select')) {
		let online = event.target.closest('.online-select');
        online.classList.toggle('_online-select-open');
    }
    if (event.target.closest('.online-block-item')) {
        var popClick = event.target.closest('.online-block-item').textContent;
		fz = event.target.closest('.online-select');
		let inpustsast = fz.querySelector('.online-select-input')
        inpustsast.value = popClick;
    }

    let popUp = document.querySelector('.pop-up');
    if (event.target.closest('.pop-up-active')) {
        popUp.classList.toggle('pop-up-open');
    } else if (!event.target.closest('.pop-up-content') && popUp.closest('.pop-up-open')) {
        popUp.classList.remove('pop-up-open');
    }

    if (event.target.closest('.pop-up-close-text')) {
        let popInput = document.querySelector('.pop-up-input-text');
        popInput.value = '';
    }
    let ev = document.querySelector('.pop-up-input-active');
    if (event.target.closest('.pop-up-input-active')) {
        ev.classList.toggle('pop-up-input-open');
    }
    let popInputSelect = document.querySelector('.pop-up-input-select');
    if (event.target.closest('.pop-up-item')) {
        let popClick = event.target.textContent;
        popInputSelect.value = popClick;
    } else if (!event.target.closest('.pop-up-content') && ev.closest('.pop-up-input-open')) {
        ev.classList.remove('pop-up-input-open');
    }

    if (event.target.closest('.table-mini-top-text')) {
        let tableBlock = event.target.closest('.table-mini-block');
        tableBlock.classList.toggle('table-mini-block-active')
    }

    if (event.target.closest('.tc-select')) {
        let tcSelect = event.target.closest('.tc-select');
        tcSelect.classList.toggle('tc-select-open');
    }
    if (event.target.closest('.tc-select-top-item')) {
        let tcSelect = event.target.closest('.tc-select');
        let tcInput = tcSelect.querySelector('.tc-select-top-input')
        let popClick = event.target.textContent;
        tcInput.value = popClick;
    }
    let tcThanks = document.querySelector('.pop-up-thanks');
    if (event.target.closest('.pop-up-thanks-open')) {
        tcThanks.classList.toggle('pop-up-thanks-active');
    } else if (!event.target.closest('.pop-up-content') && tcThanks.closest('.pop-up-thanks-active')) {
        tcThanks.classList.remove('pop-up-thanks-active');
    } else if (event.target.closest('.pop-up-thanks-btn')) {
        tcThanks.classList.remove('pop-up-thanks-active');
        popUp.classList.remove('pop-up-open');
    }

    if (event.target.closest('.menu-btn')) {
        let menuBtn = document.querySelector('.menu-btn');
        let menu = document.querySelector('.menu');
        let body = document.body;

        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('overflow');
    }
    let viewTwo = document.querySelector('.view-min-two');
    let viewOne = document.querySelector('.view-min-one');
    let viewOneBtn = document.querySelector('.view-min-views-one');
    let viewTwoBtn = document.querySelector('.view-min-views-two');
    if (event.target.closest('.view-min-views-two') && viewOne.closest('.view-min-active')) {
        viewTwo.classList.add('view-min-active');
        viewOne.classList.remove('view-min-active');
        viewTwoBtn.classList.add('view-min-views-active');
        viewOneBtn.classList.remove('view-min-views-active');
    }
    if (event.target.closest('.view-min-views-one') && viewTwo.closest('.view-min-active')) {
        viewOne.classList.add('view-min-active');
        viewTwo.classList.remove('view-min-active');
        viewTwoBtn.classList.remove('view-min-views-active');
        viewOneBtn.classList.add('view-min-views-active');
    }

    if (event.target.closest('.view-column-days-one')) {
        let vv = event.target.closest('.view-column-days-one');
        let viewDayOne = vv.querySelector('.view-column-days-day-one');
        let viewDayTwo = vv.querySelector('.view-column-days-day-two');
        console.log('adgf')
        if (event.target.closest('.view-column-days-day-one') && viewDayTwo.closest('.view-column-days-day-active')) {
            viewDayOne.classList.add('view-column-days-day-active');
            viewDayTwo.classList.remove('view-column-days-day-active');
        }
        if (event.target.closest('.view-column-days-day-two') && viewDayOne.closest('.view-column-days-day-active')) {
            viewDayTwo.classList.add('view-column-days-day-active');
            viewDayOne.classList.remove('view-column-days-day-active');
        }
    }
    if (event.target.closest('.fine-item-open')) {
        let fineItems = event.target.closest('.fine-item');
        fineItems.classList.toggle('fine-items-active') 
    }

    let popUpDiagnostic = document.querySelector('.diagnostic-pop-up');
    if (event.target.closest('.diagnostic-pop-up-active')) {
        popUpDiagnostic.classList.toggle('pop-up-open');
    } else if (!event.target.closest('.pop-up-content') && popUpDiagnostic.closest('.pop-up-open')) {
        popUpDiagnostic.classList.remove('pop-up-open');
    }
    let popUpConfirmation = document.querySelector('.diagnostic-confirmation');
    if (event.target.closest('.diagnostic-confirmation-active')) {
        popUpConfirmation.classList.toggle('pop-up-open');
    } else if (!event.target.closest('.pop-up-content') && popUpConfirmation.closest('.pop-up-open')) {
        popUpConfirmation.classList.remove('pop-up-open');
    }
})

const swiper = new Swiper('.diagnostic-pop-up-sliders', {
    loop: true,

    navigation: {
      nextEl: '.diagnostic-button-next',
      prevEl: '.diagnostic-button-prev',
    },

  });