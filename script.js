$(document).ready(function () {
    const windowHeight = $(window).innerHeight();
    const windowWidth = $(window).innerWidth();
    let top = $('.one-page').eq(0).offset().top;
    let easing = ['easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInQuad',
        'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic',
        'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart',
        'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeInExpo',
        'easeOutExpo', 'easeInOutExpo', 'easeInCirc', 'easeOutCirc',
        'easeInOutCirc', 'easeInBack', 'easeOutBack', 'easeInOutBack',
        'easeInElastic', 'easeOutElastic', 'easeInOutElastic', 'easeInBounce',
        'easeOutBounce', 'easeInOutBounce'];
    let ballColors = ['#619196c4', '#619196;', '#619196a9', '#61919650', '#61919628']

    $('html').animate({ scrollTop: top }, 100)
    $('html').animate({ scrollTop: 0 }, 0)
    $('.circle').eq(0).addClass('activePoint');
    $('.circle').mouseover(function () {
        $(this).css({
            backgroundImage: 'url("img/text_sprites.png")',
            transition: '0.3s'
        })

    }).mouseout(function () {
        $(this).css({
            backgroundImage: 'url("img/nav_sprites.png")',
            transition: '0.3s'
        })
    })

    $('.circle').each(function (index, value) {
        $(value).click(function () {
            if ((index == 0) || (index == 3)) {
                deleteDiv('.ball');
                generateDiv(getRandomInt(40, 50));
                setInterval(animation, 100);
            }
            else {
                deleteDiv('.ball');
            }
            $('.circle').removeClass('activePoint');
            $(this).addClass('activePoint');
            let top = $('.one-page').eq(index).offset().top;
            $('html').animate({ scrollTop: top }, 0)
        });
        document.getElementById("circle-collection").style.top = (windowHeight / 2) - 150 + 'px';
    });

    window.addEventListener("scroll", function () {
        let top = $('#cont2').offset().top;
        $('.circle').removeClass('activePoint');
        $('.circle').eq(Math.trunc(top / windowHeight)).addClass('activePoint');
        if ((Math.trunc(top / windowHeight == 0)) || (Math.trunc(top / windowHeight == 3))) {
            deleteDiv('.ball');
            generateDiv(getRandomInt(50, 70));
            setInterval(animation, 100);
        }
        else {
            deleteDiv('.ball');
        }
    })

    function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min)) + min }
    // let getRandomInt = (min, max) => { Math.floor(Math.random() * (max - min)) + min };

    function createDiv(className) {
        let div = document.createElement('div');
        div.className = className;
        div.style.backgroundColor = ballColors[getRandomInt(0, 4)];
        div.style.zIndex = -1;
        return div;
    }

    function deleteDiv(className) {
        document.querySelectorAll(className).forEach(element => { element.remove() });
    }

    function generateDiv(n) {
        for (let i = 0; i < n; i++) {
            document.getElementById('info-about').appendChild(createDiv('ball'));
        }
    }

    function animation() {
        let windowH = $('.one-page').height();
        let windowW = $('.one-page').width();

        document.querySelectorAll('.ball').forEach(element => {
            let hw = getRandomInt(1, 100);
            $(element).animate({
                left: getRandomInt(0, windowW),
                top: getRandomInt(0, windowH),
                height: hw,
                width: hw
            }, getRandomInt(1000, 10000), easing[getRandomInt(1, 29)]);

        });
    }

    generateDiv(getRandomInt(50, 70));
    setInterval(animation, 100);






})