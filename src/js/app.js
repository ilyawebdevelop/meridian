import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/bootstrap.bundle.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import AOS from "../../node_modules/aos/dist/aos.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

AOS.init();


// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера introMainSlider
const introMainSlider = document.querySelector('.introMainSlider');
var mySwiperIntroMain = new Swiper(introMainSlider, {
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: introMainSlider?.querySelector('.swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});

// Инициализация слайдера introCatalogSlider
const introCatalogSlider = document.querySelector('.introCatalogSlider');
var mySwiperIntroCatalog = new Swiper(introCatalogSlider, {
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  navigation: {
    prevEl: introCatalogSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: introCatalogSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 1,
    },
  },
});

// Инициализация слайдера catSlider
const catSlider = document.querySelector('.catSlider');
var mySwiperCat = new Swiper(catSlider, {
  slidesPerView: 2,
  speed: 600,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  navigation: {
    prevEl: catSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: catSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    576: {
      spaceBetween: 10,
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// Инициализация слайдера catalogSlider
document.querySelectorAll('.catalogSlider').forEach(n => {
  const mySwiperServices = new Swiper(n, {
    slidesPerView: 6,
    spaceBetween: 20,
    speed: 600,
    autoplay: false,
    navigation: {
      prevEl: n?.closest('.sliderW').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.sliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  });
});

const swiper1 = new Swiper('.slider1', {        // Показывать 1 слайд за раз
  slidesPerView: 'auto',
  spaceBetween: 20,          // Расстояние между слайдами (если нужно)
  loop: true,               // Бесконечная прокрутка
  // centeredSlides: true,   // Центрировать слайды, если они не заполняют все пространство
  autoplay: {
    delay: 1300,
    disableOnInteraction: false, // Не останавливать после клика
  },
  navigation: {
    nextEl: '.partnersSliderW .navArrowNext',
    prevEl: '.partnersSliderW .navArrowPrev',
  },
  breakpoints: {
    0: {
      spaceBetween: 8,
    },
    576: {
      spaceBetween: 10,
    },
    1200: {
      spaceBetween: 20,
    },
  },
});

// Инициализация второго слайдера
const swiper2 = new Swiper('.slider2', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1300,
    disableOnInteraction: false, // Не останавливать после клика
  },
  navigation: {
    nextEl: '.partnersSliderW .navArrowNext',
    prevEl: '.partnersSliderW .navArrowPrev', // !!! Важно: обе стрелки управляют обоими слайдерами
  },
  breakpoints: {
    0: {
      spaceBetween: 8,
    },
    576: {
      spaceBetween: 10,
    },
    1200: {
      spaceBetween: 20,
    },
  },
  // Опционально:
});

// Инициализация слайдера podborSlider
const podborSlider = document.querySelector('.podborSlider');
var mySwiperPodbor = new Swiper(podborSlider, {
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 20,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
  },
});

// В Swiper 8+ достаточно указать одни и те же кнопки навигации:
// Если это не сработало, можно использовать этот код:
const nextButton = document.querySelector('.partnersSliderW .navArrowNext');
const prevButton = document.querySelector('.partnersSliderW .navArrowPrev');

nextButton?.addEventListener('click', function () {
  swiper1.slideNext();
  swiper2.slideNext();
});

prevButton?.addEventListener('click', function () {
  swiper1.slidePrev();
  swiper2.slidePrev();
});

// Адаптивность: обновляем Swiper при изменении размера окна
// Если вы используете 'auto' для slidesPerView, или если ширина слайдов меняется,
// нужно пересчитывать. Для фиксированной ширины как у нас, это может не требоваться.
// Но для полной уверенности, можно добавить:
window.addEventListener('resize', function () {
  swiper1.update();
  swiper2.update();
});

// Инициализация слайдера newsSlider
const newsSlider = document.querySelector('.newsSlider');
var mySwiperNews = new Swiper(newsSlider, {
  slidesPerView: 3,
  speed: 600,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  navigation: {
    prevEl: newsSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: newsSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Инициализация слайдера catalogCardSlider
document.querySelectorAll('.catalogCardSlider').forEach(n => {
  const mySwiperCatalogCard = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: n?.closest('.catalogCard').querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
  });
  mySwiperCatalogCard.autoplay.stop();
  const card = n.closest('.catalogCard'); // или .catalogCard, в зависимости от вашей верстки

  // Запускаем при наведении
  card.addEventListener('mouseenter', () => {
    mySwiperCatalogCard.autoplay.start();
  });

  // Останавливаем при уходе курсора
  card.addEventListener('mouseleave', () => {
    mySwiperCatalogCard.autoplay.stop();
    // Опционально: возвращаем на первый слайд при уходе мыши
    mySwiperCatalogCard.slideTo(0, 0);
  });
});



// Инициализация слайдера catIntroSlider
const catIntroSlider = document.querySelector('.catIntroSlider');
var mySwiperCatIntro = new Swiper(catIntroSlider, {
  slidesPerView: 2,
  speed: 600,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  navigation: {
    prevEl: catIntroSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: catIntroSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// Инициализация слайдера productThumbSlider
const productThumb = document.querySelector('.productThumbSlider');
var mySwiperProductThumb = new Swiper(productThumb, {
  slidesPerView: 4,
  spaceBetween: 4,
  direction: "horizontal",
  speed: 600,
  // freeMode: true,
  // watchSlidesProgress: true,
  // mousewheel: true,
});


// Инициализация слайдера productSlider
const productSlider = document.querySelector('.productSlider');
var mySwiperProduct = new Swiper(productSlider, {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 600,
  freeMode: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  thumbs: { // указываем на превью слайдер
    swiper: mySwiperProductThumb // указываем имя превью слайдера
  },
  pagination: {
    el: productSlider?.querySelector('.swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});

$('.filterItemHead').click(function () {
  $(this).toggleClass('active');
  $(this).siblings('.filterItemBody').slideToggle();
});

let showMore = document.querySelectorAll('.showMore');
showMore.forEach(el => {
  let content = el.closest('.showMoreWrap').querySelector('.showMoreContent');
  el.addEventListener('click', () => {
    content.classList.add('active');
    el.style.display = 'none';
  });
});

const mediaQueryMax991 = window.matchMedia('(max-width: 991px)');
const mediaQueryMin992 = window.matchMedia('(min-width: 992px)');

const navLinks = document.querySelectorAll('.headerCatalogNavLink');
const menuContents = document.querySelectorAll('.headerCatalogContent');
let headerCatalogClose = document.querySelector('.headerCatalogClose');

navLinks.forEach(link => {

  if (mediaQueryMin992.matches) {
    link.addEventListener('mouseenter', () => {
      const target = link.getAttribute('data-menu');

      // 1. Скрываем все контентные блоки
      menuContents.forEach(content => {
        content.style.display = 'none';
      });

      // 2. Находим и показываем нужный блок
      const activeMenu = document.querySelector(`.headerCatalogContent[data-menu="${target}"]`);
      if (activeMenu) {
        activeMenu.style.display = 'block';
      }
    });
  }
  if (mediaQueryMax991.matches) {
    const target = link.getAttribute('data-menu');
    const activeMenu = document.querySelector(`.headerCatalogContent[data-menu="${target}"]`);
    const prevMenu = activeMenu.querySelector('.headerCatalogContentPrev');
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (activeMenu) {
        activeMenu.style.display = 'block';
      }
    });
    prevMenu?.addEventListener('click', (e) => {
      activeMenu.style.display = 'none';

    });
  }
});

// Опционально: скрыть меню, если мышь ушла из всей области навигации
// Добавьте класс-обертку вокруг nav и contents, например .catalog-wrapper
const headerCatalogMenu = document.querySelector('.headerCatalog');
if (mediaQueryMin992.matches) {
  if (headerCatalogMenu) {
    headerCatalogMenu.addEventListener('mouseleave', () => {
      menuContents.forEach(content => content.style.display = 'none');
    });
  }
}

const headerCatalogBtn = document.querySelector('.headerCatalogBtn');
const headerCatalogBtnSvg = document.querySelector('.headerCatalogBtn svg use');

const isVisible = headerCatalogBtn.classList.contains('active');
let timer;

// Функция открытия/закрытия
const toggleMenu = () => {
  headerCatalogBtn.classList.toggle('active');
  headerCatalogMenu.classList.toggle('active');
  if (headerCatalogBtn.classList.contains('active')) {
    headerCatalogBtnSvg.setAttribute('xlink:href', 'img/icons/icons.svg#remove');
  } else {
    headerCatalogBtnSvg.setAttribute('xlink:href', 'img/icons/icons.svg#catalog-btn');
  }
};

// Клик по кнопке
headerCatalogBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Чтобы клик не срабатывал сразу на документе
  toggleMenu();
});

if (mediaQueryMin992.matches) {
  // Уход мыши из меню
  headerCatalogMenu.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
      headerCatalogBtn.classList.remove('active');
      headerCatalogMenu.classList.remove('active');
      headerCatalogBtnSvg.setAttribute('xlink:href', 'img/icons/icons.svg#catalog-btn');
    }, 500); // Задержка 1 секунда
  });

  // Возврат мыши в меню (отмена скрытия)
  headerCatalogMenu.addEventListener('mouseenter', () => {
    clearTimeout(timer);
  });
}


// QUIZ
const blocks = document.querySelectorAll('.modalQuizFormBlock');
const btnNext = document.querySelector('.modalQuizFormNext');
const btnPrev = document.querySelector('.modalQuizFormPrev');

let currentStep = 1;
const maxSteps = blocks.length;

const updateVisibility = () => {
  // Скрываем все блоки и показываем нужный
  blocks.forEach((block, index) => {
    block.style.display = (index + 1 === currentStep) ? 'block' : 'none';
  });

  // Управление кнопкой "Назад"
  btnPrev.style.display = (currentStep === 1) ? 'none' : 'flex';

  // Управление кнопкой "Далее" (можно скрыть на последнем шаге)
  btnNext.style.display = (currentStep === maxSteps) ? 'none' : 'flex';
};

btnNext.addEventListener('click', () => {
  if (currentStep < maxSteps) {
    currentStep++;
    updateVisibility();
  }
});

btnPrev.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    updateVisibility();
  }
});


// Burger
const btnMenu = document.querySelector('#toggle');
// const searchMenuBtnAll = document.querySelectorAll('.searchMobileAction');
const menu = document.querySelector('.headerMainMobile');
// const searchMenu = document.querySelector('.headerSearchMobile');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerMainMobileClose');
// const searchClose = document.querySelector('.headerSearchMobileClose');

const toggleMobileMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMobileMenu();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMobileMenu();
  toggleBurger();
  bodyOverflow();
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});

let headerMobileSearchW = document.querySelector('.headerMobileSearchW');
let headerSearchBtn = document.querySelector('.headerSearchBtn');
let headerMainMobileSearchBtn = document.querySelector('.headerMainMobileSearchBtn');
let headerSearchBtnClose = document.querySelector('.headerMobileSearchBack');

const headerMobileSearchToggle = function () {
  headerMobileSearchW.classList.toggle('active');
}

headerSearchBtn?.addEventListener('click', () => {
  headerMobileSearchToggle();
  bodyOverflow();
});
headerMainMobileSearchBtn?.addEventListener('click', () => {
  headerMobileSearchToggle();
  bodyOverflow();
});

headerSearchBtnClose?.addEventListener('click', () => {
  headerMobileSearchToggle();
  bodyOverflow();
});

// search clear
let searchInputArray = document.querySelectorAll('.formInput--search');
searchInputArray.forEach(el => {
  let clearValue = el.closest('.searchField').querySelector('.search-clear');
  // console.log(clearValue);
  el?.addEventListener('input', (event) => {
    clearValue.classList.add('active');
  });

  clearValue?.addEventListener('click', () => {
    el.value = '';
    el.focus();
    clearValue.classList.remove('active');
  });

});

let navBarCatalogBtn = document.querySelector('.navBarCatalogBtn');

navBarCatalogBtn.addEventListener('click', (e) => {
  e.preventDefault();
  headerCatalogMenu.classList.toggle('active');
  navBarCatalogBtn.closest('li').classList.toggle('active');
  bodyEl.classList.toggle('hidden');
});

headerCatalogClose?.addEventListener('click', () => {
  headerCatalogMenu.classList.remove('active');
  bodyEl.classList.remove('hidden');
  navBarCatalogBtn.closest('li').classList.remove('active');
});

// sidebar catalog show mobile
let catalogMobFilterBtn = document.querySelector('.catalogMobFilterBtn');
let catalogSidebar = document.querySelector('.catalog-sidebar');
let catalogSidebarClose = document.querySelector('.filterBtnClose');

catalogMobFilterBtn?.addEventListener('click', () => {
  catalogSidebar.classList.add('active');
  bodyEl.classList.add('hidden');
});

catalogSidebarClose?.addEventListener('click', () => {
  catalogSidebar.classList.remove('active');
  bodyEl.classList.remove('hidden');
});

// sidebar collections show mobile
let collectionMobFilterBtn = document.querySelector('.catalogMobCollectionBtn');
let catalogColSidebar = document.querySelector('.collection-sidebar');
let collectionSidebarClose = document.querySelector('.catalogMobCollectionBtnClose');

collectionMobFilterBtn?.addEventListener('click', () => {
  catalogColSidebar.classList.add('active');
  bodyEl.classList.add('hidden');
});

collectionSidebarClose?.addEventListener('click', () => {
  catalogColSidebar.classList.remove('active');
  bodyEl.classList.remove('hidden');
});


const words = document.querySelectorAll('.podborWordAction>span');
let currentIndex = 0;

function showNextWord() {
  // Скрываем текущий элемент
  words[currentIndex]?.classList.remove('active');

  // Переход к следующему элементу
  currentIndex = (currentIndex + 1) % words.length;

  // Показываем следующий элемент
  words[currentIndex]?.classList.add('active');
}

// Показываем первый элемент сразу
words[currentIndex]?.classList.add('active');

// Меняем элементы каждые 3 секунды
setInterval(showNextWord, 3000);


const podborImages = document.querySelector('.podborImages');
const images = document.querySelectorAll('.podborImages .image');
let currentIndexOfImages = 0;

function showNextImage() {
  // Перемещаем текущий элемент в конец
  podborImages.appendChild(images[currentIndexOfImages]);

  // currentIndexOfImages к следующему индексу
  currentIndexOfImages = (currentIndexOfImages + 1) % images.length;
}

// Меняем изображения каждые 2 секунды
setInterval(showNextImage, 4000);