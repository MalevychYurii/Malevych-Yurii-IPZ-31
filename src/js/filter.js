document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.main_buttons .main__button');
    console.log('Знайдено кнопок:', buttons.length); 

    function filterItems(category) {
        const items = document.querySelectorAll('.filling__item');
        console.log('Знайдено елементів:', items.length);

        items.forEach(item => {
            const subtitle = item.querySelector('.filling__subtitle').textContent.trim();
            console.log('Перевірка елемента:', subtitle); 

            if (subtitle === category || category === 'Усі') {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.textContent.trim();
            console.log('Клік по кнопці:', category); 
            filterItems(category);
        });
    });
});
