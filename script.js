//Select the items
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container')

//Add the classes to expand and contract when the mouse gets hovered and leaves
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));
