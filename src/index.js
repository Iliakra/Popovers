/* eslint-disable no-unused-vars */
let buttonContainer = document.getElementsByClassName('button-container')[0];
let button = document.getElementsByClassName('button')[0];


let onFocusHint = (e) => {
    let errorHint = document.createElement('div');
    errorHint.className = 'error-hint';
    errorHint.innerHTML = '<h3>Popover title</h3><p><span>And here is some amazing content. It is very engaging. Right?</span></p>';
    buttonContainer.appendChild(errorHint);
    errorHint.style.top = `${button.offsetTop - errorHint.offsetHeight - 10}px`;
    errorHint.style.left = `${-(errorHint.offsetWidth - button.offsetWidth) / 2}px`;
}

let blurButton = (e) => {
    let errorHint = document.getElementsByClassName('error-hint')[0];
    buttonContainer.removeChild(errorHint);
}


button.addEventListener('focus', onFocusHint);

button.addEventListener('blur', blurButton);

