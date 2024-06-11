let links = document.querySelectorAll('a[href="#"]');
links.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
/* a링크 막기------------- */

const headerHover = () => {
    let header = document.querySelector('#header');

    header.addEventListener('mouseenter', (e) => {
        header.classList.add('on');
    });

    header.addEventListener('mouseleave', (e) => {
        header.classList.remove('on');
    });
};

headerHover();
// 서브메뉴 표시

const langMenuToggle = () => {
    const lang = document.querySelector('.lang');
    const langMenu = document.querySelector('.lang_menu');

    lang.addEventListener('click', () => {
        langMenu.classList.toggle('on');
    });

    // 화면 클릭시 lang 메뉴 닫기
    document.addEventListener('click', (e) => {
        if (!lang.contains(e.target) && !langMenu.contains(e.target)) {
            langMenu.classList.remove('on');
        }
    });
};

langMenuToggle();
// lang 메뉴 클릭시 열고닫기

/* //header------------------- */

const noticeItems = document.querySelectorAll('.Notice-txt > div');

let cntIdx = 0;

const showNotice = (idx) => noticeItems.forEach((item, i) => (item.style.display = i === idx ? 'block' : 'none'));

setInterval(() => {
    cntIdx = (cntIdx + 1) % noticeItems.length;
    showNotice(cntIdx);
}, 5000);

showNotice(cntIdx);

/* //비주얼 공지사항 롤링--------------- */

const tabItems = document.querySelectorAll('.product-tab li');
const productLists = document.querySelectorAll('.product-list');

tabItems.forEach((tab, index) => {
    tab.addEventListener('click', (event) => {
        event.preventDefault();

        tabItems.forEach((tab) => tab.classList.remove('on'));
        productLists.forEach((list) => list.classList.remove('on'));

        tab.classList.add('on');
        productLists[index].classList.add('on');
    });
});

/* //con1 product-------------------- */

const imgWrap = document.querySelector('.img-wrap');
const imgSlides = document.querySelectorAll('.img-slide');
const textItems = document.querySelectorAll('.Ostoty-text-item');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const totalSlides = imgSlides.length;

let current = 0;
let arr = [];
let tx = 0;

imgWrap.style.transition = '0.4s';

function updateSlide(index) {
    console.log(index);
    const slideWidth = imgSlides[0].offsetWidth;
    const totalWidth = slideWidth * totalSlides;
    const wrapWidth = imgWrap.offsetWidth;
    const offset = (wrapWidth - slideWidth) / 2;
    console.log(offset);
    imgWrap.style.width = `${totalWidth}px`;
    imgWrap.style.transform = `translateX(${arr[index]}px)`;

    if (index > 8) {
        imgWrap.style.transition = '0s';
        imgWrap.style.transform = `translateX(${arr[0]}px)`;
        current = 1;

        setTimeout(() => {
            imgWrap.style.transition = '0.4s';
            imgWrap.style.transform = `translateX(${arr[1]}px)`;
        }, 50);

        textItems.forEach((item, i) => {
            item.classList.toggle('on', i === 0);
        });
    } else if (index < 0) {
        imgWrap.style.transition = '0s';
        imgWrap.style.transform = `translateX(${arr[8]}px)`;
        current = 8;

        setTimeout(() => {
            imgWrap.style.transition = '0.4s';
            imgWrap.style.transform = `translateX(${arr[7]}px)`;
        }, 50);
        textItems.forEach((item, i) => {
            item.classList.toggle('on', i === 4);
        });
    } else {
        textItems.forEach((item, i) => {
            item.classList.toggle('on', i === index);
        });
    }
}

function updateSlide1(index) {
    console.log(index);
    const slideWidth = imgSlides[0].offsetWidth;
    const wrapWidth = imgWrap.offsetWidth;
    const totalWidth = slideWidth * totalSlides;
    const offset = (wrapWidth - slideWidth) / 2;
    const translateX = -index * slideWidth + offset;
    tx = translateX;
    console.log(translateX);

    for (let i = 0; i < 9; i++) {
        arr.push(tx - i * slideWidth);
    }

    console.log(arr);

    imgWrap.style.width = `${totalWidth}px`;
    imgWrap.style.transform = `translateX(${arr[index]}px)`;
    textItems.forEach((item, i) => {
        item.classList.toggle('on', i === index);
    });
}

function nextSlide() {
    current++;
    updateSlide(current);
}

function prevSlide() {
    current--;
    updateSlide(current);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

updateSlide1(current);

/* //con3 Ostoty-------------------- */

const banner = ['Newproduct', 'Event', 'News'];
let timer;
let cnt = 0; // cnt를 cntIdx로 수정하여 일관성 유지

const make = () => {
    banner.forEach((section) => {
        const items = document.querySelectorAll(`.${section}-wrap .${section}-list`);
        const pagings = document.querySelectorAll(`.${section} .paging li`);

        items.forEach((item) => item.classList.remove('on'));
        pagings.forEach((paging) => paging.classList.remove('on'));

        items[cnt].classList.add('on');
        pagings[cnt].classList.add('on');
    });

    cnt = (cnt + 1) % document.querySelectorAll(`.${banner[0]}-wrap .${banner[0]}-list`).length;
};

const startRolling = () => {
    timer = setInterval(make, 2000);
};

const stopRolling = () => {
    clearInterval(timer);
};

const init = () => {
    startRolling();

    banner.forEach((section) => {
        const sectionElement = document.querySelector(`.${section}`);

        sectionElement.addEventListener('mouseenter', stopRolling);
        sectionElement.addEventListener('mouseleave', startRolling);
    });
};

// 즉시 실행하여 init 함수 호출
init();

/* //con4 -------------------- */

const familySite = document.querySelector('.familysite');
const siteList = familySite.querySelector('.site-list');

familySite.querySelector('.site').addEventListener('click', () => {
    siteList.classList.toggle('on');
});

document.addEventListener('click', (e) => {
    if (!familySite.contains(e.target)) {
        siteList.classList.remove('on');
    }
});

/* //footer -------------------- */
