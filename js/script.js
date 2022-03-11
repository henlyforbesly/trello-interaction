let cardItems = [
    'Wake up at 7pm',
    'Cook avocado toast for breakfast',
    'Go to school',
    'Do homework',
    'Buy a notebook for Julia',
    'Bake a cake',
    'Jogging',
    'Go dinner with Jessica',
];

const cardContainer = document.querySelectorAll('.list__cards');

cardContainer.forEach((container) => {
    cardItems.forEach((cardItem) => {
        container.innerHTML += `
            <div class="card-item rounded-1">${cardItem}</div>
        `;
    });
});

$('.list__cards').dad({
    placeholderTemplate: '<div class="rounded-1"></div>',
    placeholderClass: 'dad-placeholder-card',
    cloneClass: 'dad-clone-card',
    transition: 0,
});

$('.container').dad({
    draggable: '.list__draggable',
    placeholderTemplate: '<div class="rounded-2"></div>',
    placeholderClass: 'dad-placeholder-list',
    cloneClass: 'dad-clone-list',
    transition: 0,
});
