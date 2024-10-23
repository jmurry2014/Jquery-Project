
$(document).ready(function() {
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















