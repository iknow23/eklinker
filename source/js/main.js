var area1 = document.querySelector('.area__item--1');
var area2 = document.querySelector('.area__item--2');
var area3 = document.querySelector('.area__item--3');
var area4 = document.querySelector('.area__item--4');
var text = document.querySelector('.area__number');
var contactNumbers = ['8(495)324-00-04', '8(863)310-01-02', '8(495)324-00-04', '8(495)324-00-04'];

area1.addEventListener('click', function(evt) {
  text.innerText = contactNumbers[0];
  area1.style.opacity = '1';
  if (area2.style.opacity = '1' || area3.style.opacity = '1' || area4.style.opacity = '1') {
    area2.style.opacity = '0.5';
    area3.style.opacity = '0.5';
    area4.style.opacity = '0.5';
  }
});

area2.addEventListener('click', function(evt) {
  text.innerText = contactNumbers[1];
  area2.style.opacity = '1';
  if (area1.style.opacity = '1' || area3.style.opacity = '1' || area4.style.opacity = '1') {
    area1.style.opacity = '0.5';
    area3.style.opacity = '0.5';
    area4.style.opacity = '0.5';
  }
});

area3.addEventListener('click', function(evt) {
  text.innerText = contactNumbers[2];
  area3.style.opacity = '1';
  if (area1.style.opacity = '1' || area2.style.opacity = '1' || area4.style.opacity = '1') {
    area1.style.opacity = '0.5';
    area2.style.opacity = '0.5';
    area4.style.opacity = '0.5';
  }
});

area4.addEventListener('click', function(evt) {
  text.innerText = contactNumbers[3];
  area4.style.opacity = '1';
  if (area1.style.opacity = '1' || area2.style.opacity = '1' || area3.style.opacity = '1') {
    area1.style.opacity = '0.5';
    area2.style.opacity = '0.5';
    area3.style.opacity = '0.5';
  }
});