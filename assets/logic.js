

$(document).ready(function() {
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








activePage();
    showSideBar();
    hideSideBar();
});















