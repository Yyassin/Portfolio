const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navbarLinks.classList.toggle('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navbarLinks.classList.toggle('active');
        menuOpen = false;
    }
});

// responsive nav menu
// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active');
// })


// opaque nav-bar on scroll
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 40) {
        $('nav').addClass('nav-scroll');
    }
    else {
        $('nav').removeClass('nav-scroll');
    }
})

//loading
$(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");
})

//smooth-scrolling
$(document).ready(function(){
    var scrollLink = $('.scroll');
    console.log(scrollLink)

    scrollLink.click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    })

    //active link switch
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 5;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active')
                $(this).parent().siblings().removeClass('active');
            }
        })
    })

})

// //Typewriter
// const typeWriter = function(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// //Type Function
// typeWriter.prototype.type = function() {
//     //current word
//     const index = this.wordIndex % this.words.length;
//     const wordTxt = this.words[index];
//     //Type Speed
//     let typeSpeed = 300;

//     if(this.isDeleting) {
//         //remove chars
//         this.txt = wordTxt.substring(0, this.txt.length - 1)
//         typeSpeed /= 2;
//     } else {
//         //add chars
//         this.txt = wordTxt.substring(0, this.txt.length + 1)
//     }

//     //Output text
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

//     if(!this.isDeleting && this.txt === wordTxt){
//         //pause at completion
//         typeSpeed = this.wait;
//         this.isDeleting = true;
//     }   else if(this.isDeleting && this.txt === '' ) {
//         this.isDeleting = false;
//         this.wordIndex ++;

//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed);
// }

// //Init when DOM loads
// document.addEventListener('DOMContentLoaded', init);

// function init() {
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     wait = txtElement.getAttribute('data-wait');

//     //Init typeWriter
//     new typeWriter(txtElement, words, wait);
// }

