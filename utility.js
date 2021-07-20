function log(msg) {
    console.log(msg);
}

log('In utility');

function changeText(newText) {
    const title = document.querySelector('.site-title');
    title.innerHTML = `<div class="site-title">A Back Pack</div>`;
    log(title);
};

changeText('');

const changeTitle = function (newTitle) {
    const title = document.querySelector('.site-title');
    title.innerHTML = `<div class="site-title">${newTitle}</div>`;
};

changeTitle('A New BackPack!');
