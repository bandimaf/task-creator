(function () {
    "use strict";
    const root = document.documentElement;
    // $(window).scroll(function() {
    //     $('subtask__subheading').toggleClass('scroll', $(this).scrollTop() > 100);
    //   });

    window.addEventListener('scroll', function () {
        const header = document.querySelector('.subtask__subheading');
        if (window.scrollY > 100) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });

    function toggleElement() {
        const element = document.getElementById('desctop-subhead');
        const element2 = document.getElementById('mobile-subhead');
        const header = document.getElementById('header')
        const headerMobile = document.getElementById('header-mobile')
        const nav = document.getElementById('navigator')
        const subtask = document.getElementById('subtask')


        if (window.innerWidth > 767 && window.innerWidth < 991) {
            // Если ширина окна больше 768px, показываем элемент
            element.style.display = 'flex';
            element2.style.display = 'none';
            header.style.display = 'block';
            nav.style.display = 'block';
            subtask.style.marginLeft = '56px'
            headerMobile.style.display = 'none'

        } else if (window.innerWidth > 991) {
            // Если ширина окна меньше или равна 768px, скрываем элемент
            element.style.display = 'flex';
            element2.style.display = 'none';
            header.style.display = 'block';
            nav.style.display = 'block';
            subtask.style.marginLeft = '336px'
            headerMobile.style.display = 'none'
        } else {
            element.style.display = 'none';
            element2.style.display = 'flex';
            header.style.display = 'none'
            nav.style.display = 'none';
            subtask.style.marginLeft = '0'
            headerMobile.style.display = 'block'
        }

    }

    window.onload = toggleElement;
    window.onresize = toggleElement;

    const pp = document.querySelector("#pp");
    if (pp) {
        const openBtn = document.querySelector("#open-btn");
        const closePP = function (event) {
            function close() {
                document.removeEventListener("keyup", closePP);
                pp.removeEventListener("click", closePP);
                root.classList.remove("show-pp");
            }
            switch (event.type) {
                case "keyup":
                    if (event.key === "Escape" || event.keyCode === 27) close();
                    break;
                case "click":
                    if (
                        event.target === this ||
                        event.target.classList.contains("close-pp")
                    )
                        close();
                    break;
            }
        };
        openBtn.addEventListener("click", function () {
            root.classList.add("show-pp");
            document.addEventListener("keyup", closePP);
            pp.addEventListener("click", closePP);
        });
    }
})();