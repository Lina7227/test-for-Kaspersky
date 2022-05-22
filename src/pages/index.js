import css from '../pages/index.css';

// прокрутка страницы и привязка header
const header = document.querySelector('.header');

function scrollMonitoring(event) {
  
    if (event.deltaY < 0) {
      header.classList.add('header_sticky');
    }
    else {
      header.classList.remove('header_sticky');
    }
}
  
document.onwheel = scrollMonitoring;
window.addEventListener('wheel', scrollMonitoring);

// появление блока покупок
const products = document.querySelector('.products');
const buyBlock = document.querySelector('.buy-tablo');
const buyLink = buyBlock.querySelector('.link_buy');

function scrollBuy(event) {
  
    if (event.deltaY > 0) {
      buyBlock.classList.add('buy-tablo_sticky');
    }
    else {
      buyBlock.classList.remove('buy-tablo_sticky');
    }
}
  
document.onwheel = scrollBuy;
products.addEventListener('wheel', scrollBuy);

function clickBuyButton() {
  buyBlock.classList.remove('buy-tablo_sticky');
}

buyLink.addEventListener('click', clickBuyButton);


// пролистывание слайдера
const block = document.querySelectorAll('.carousel__cell');
const text = document.querySelectorAll('.carousel__table-cell');
const button = document.querySelectorAll('.carousel__button');

block.forEach((item, index) => {
  item.dataset.index = index;

  if (index === 0) {
    item.classList.add('carousel__cell_active')
  }
});

text.forEach((item, index) => {
  item.dataset.index = index;

  if (index === 0) {
    item.classList.add('carousel__table-cell_active')
  }
});

button.forEach((item, index) => {
  item.dataset.index = index;

  if (index === 0) {
    item.classList.add('carousel__button_active')
  }
});


const toggleActivity = (index) => {
  for (let i = 0; i < block.length; i++) {
    if (i === Number(index)) {
      block[i].classList.add('carousel__cell_active');
      text[i].classList.add('carousel__table-cell_active');
      button[i].classList.add('carousel__button_active');
    } else {
      block[i].classList.remove('carousel__cell_active');
      text[i].classList.remove('carousel__table-cell_active');
      button[i].classList.remove('carousel__button_active');
    }
  }
}

document.querySelector('.carousel__nav').addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('carousel__button')) {
    toggleActivity(event.target.dataset.index);
  }
})

// передача стоимости товара
if (document.querySelector('input[name="a"]')) {
  document.querySelectorAll('input[name="a"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
      var item = event.target.value;

      document.querySelectorAll('p[name="a"]').forEach((el) => {
        if(el.classList.contains('block__text_type_value')){el.textContent = item*2;}
        else {el.textContent = item;}
        
      });
    });
  });
}

if (document.querySelector('input[name="b"]')) {
  document.querySelectorAll('input[name="b"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
      var item = event.target.value;

      document.querySelectorAll('p[name="b"]').forEach((el) => {
        if(el.classList.contains('block__text_type_value')){el.textContent = item*2;}
        else {el.textContent = item;}
        
      });
    });
  });
}

if (document.querySelector('input[name="c"]')) {
  document.querySelectorAll('input[name="c"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
      var item = event.target.value;

      document.querySelectorAll('p[name="c"]').forEach((el) => {
        if(el.classList.contains('block__text_type_value')){el.textContent = item*2;}
        else {el.textContent = item;}
        
      });
    });
  });
}
