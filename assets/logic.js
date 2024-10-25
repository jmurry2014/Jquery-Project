
$(document).ready(function() {
 // Initialize Swiper with Coverflow effect
 var swiper = new Swiper('.swiper', {
    initialSlide: 1,
    slidesPerView: 1,
    freeMode: true,
    loop: true,
    spaceBetween: 32,
    // effect: 'coverflow', // Add Coverflow effect
    // coverflowEffect: {
    //     rotate: 0, // Rotate the slides
    //     stretch: 0, // Stretch the slides
    //     depth: 100, // Depth of the slides
    //     modifier: .3, // Multiplier effect
    //     slideShadows: true, // Enable slide shadows
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            // Customize for screens >= 320px
        },
        480: {
            // Customize for screens >= 480px
        },
        996: {
            initialSlide: 1,
            slidesPerView: 'auto',
            spaceBetween: 32,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }
    }
});






    $('body').css('display', 'none'); // Initially hide the body
    $('body').fadeIn();


function primaryButtonHover(){

    $(".primary-button").hover(
function(){
    $(this).css('background-color','#42A418')
    $(this).css('color','white')
}

    )



}

    function showSideBar() {
        const sidebar = $('.sidebar');
        $('.hamburger').click(function () {
            sidebar.css("display", "flex");
        });
    }
    
    function hideSideBar() {
        const sidebar = $('.sidebar');
        $('.close').click(function () {
            sidebar.css("display", "none");
        });
    }
    
    function activePage(){
    // Get the current URL path
    var currentPage = window.location.pathname;
    $('.nav-list li a').filter(function() {
        return this.href.includes(currentPage);
    }).css('font-size', '20px' , 'font-weight', 'bold');  
    }
    



   
primaryButtonHover();
activePage();
    showSideBar();
    hideSideBar();
});















