/**
 * Credits
 * Isotope with paging: https://codepen.io/TimRizzo/details/ervrRq
 */

$(document).ready(function () {


    /*************** Gallery ******************/
    
    var itemSelector = ".tm-gallery-item"; 
    var itemsPerPage = 500;
    var currentNumberPages = 1;
    var currentPage = 1;
    var currentFilter = '*';
    var filterValue = "";
    var pageAttribute = 'data-page';
    var pagerClass = 'tm-paging';    
    var $container = $('.tm-gallery').isotope({ 
        itemSelector: itemSelector
    });

    $container.imagesLoaded().progress( function() {
        $container.isotope('layout');
    }); 

    function changeFilter(selector) { $container.isotope({ filter: selector }); }

    function goToPage(n) {
        currentPage = n;
        var selector = itemSelector;
        var exclusives = [];
        
        if(currentFilter != '*') {
            exclusives.push(selector + '.' + currentFilter);
        }    

        filterValue = exclusives.length ? exclusives.join('') : '*';

        var wordPage = currentPage.toString();
        filterValue += ('.'+wordPage);
        changeFilter(filterValue);
    }


    function setPagination() {    
        var SettingsPagesOnItems = function(){
            var itemsLength = $container.children(itemSelector).length;
            var pages = Math.ceil(itemsLength / itemsPerPage);
            var item = 1;
            var page = 1;
            var selector = itemSelector;
            var exclusives = [];
                
                if(currentFilter != '*') {
                    exclusives.push(selector + '.' + currentFilter);
                }                

                filterValue = exclusives.length ? exclusives.join('') : '*';
                
                $container.children(filterValue).each(function(){
                    if( item > itemsPerPage ) {
                        page++;
                        item = 1;
                    }
                    wordPage = page.toString();
                    
                    var classes = $(this).attr('class').split(' ');
                    var lastClass = classes[classes.length-1];
                    
                    if(lastClass.length < 4){
                        $(this).removeClass();
                        classes.pop();
                        classes.push(wordPage);
                        classes = classes.join(' ');
                        $(this).addClass(classes);
                    } else {
                       $(this).addClass(wordPage); 
                    }
                    item++;
                });
            currentNumberPages = page;
        }();
        

    }

    setPagination();
    goToPage(1);

    $('.tm-gallery-link').click(function(e) {        
        var filter = $(this).data('filter');        
        currentFilter = filter;
        setPagination();
        goToPage(1);
        $('.tm-gallery-link').removeClass('active');
        $(e.target).addClass('active');
    })

    /****************** Window resize ******************/

    $(window).resize(function(){
        itemsPerPage = defineItemsPerPage();
        setPagination();
        goToPage(1);
    });


    /****************** Smooth Scrolling *****************/

    $(".tm-btn-next").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // window.location.hash = hash;
            });
        }
    });

});