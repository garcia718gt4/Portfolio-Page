const title = document.querySelector('.title');
const container = document.querySelector('.container');

title.addEventListener('click', () => {
    if(container.style.display == 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
});