const panels = document.querySelectorAll('.panel');

function toggleOpen() {

    this.classList.toggle('open');
}

function toggleActive(e) {
    // console.log(e.propertyName); // Show what has just transitioned
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
