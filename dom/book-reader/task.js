const book = document.querySelector('.book')

const font_size = [...document.querySelectorAll('.font-size')]

const size = function () {
    font_size.forEach(size => {
        size.addEventListener("click", (el) => {
            el.preventDefault();
            font_size.forEach(elem_size => {
                elem_size.classList.remove('font-size_active')
            });
            size.classList.add('font-size_active')
            if(size.classList.contains('font-size_big')) {
                book.classList.add('book_fs-big');
                book.classList.remove('book_fs-small');
            }else if (size.classList.contains('font-size_small')) {
                book.classList.add('book_fs-small');
                book.classList.remove('book_fs-big')
            }else {
                book.classList.remove('book_fs-small');
                book.classList.remove('book_fs-big');
            }
        });
    });
};
size();