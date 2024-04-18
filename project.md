# Project related to DOM manupulation

## Code Link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-sv8xg9?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

## Solution Code

### ColorChanger

```javascript
const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', function (e) {
    console.log(e.target.id);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
 ```

 ### BMI calculater

 ```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const ht = parseInt(document.querySelector('#height').value);
  const wt = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (ht == '' || ht < 0 || isNaN(ht)) {
    result.innerHTML = `Please define correct height`;
  } else if (wt == '' || wt < 0 || isNaN(wt)) {
    result.innerHTML = `Please define correct weight`;
  } else {
    const bmi = (wt / ((ht * wt) / 10000)).toFixed(2);
    //show result
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
 ```
 ### Digital Clock

```javascript
  const clock = document.querySelector('#clock');
// const date = new Date(); if we didn't add this in setInterval then it will not get updated for every sec

setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
### Unlimited Color
``` javascript
const hexacolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interval; //It can be defined inside ChangeColor function where it is initialized but it will not be accessible while stoping it.
const startChangeColor = function () {
  if (interval == null) {
    interval = setInterval(changeColor, 1000);
  }

  function changeColor() {
    document.body.style.backgroundColor = hexacolor();
  }
};
const stopChangeColor = function () {
  clearInterval(interval); //To stop changecolor function
  interval = null;
};

document.querySelector('#start').addEventListener('click', startChangeColor);
document.querySelector('#stop').addEventListener('click', stopChangeColor);

```