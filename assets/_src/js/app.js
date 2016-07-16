$(document).ready(function(){

  // Mobile Menu
  $('#menu-trigger').on('click', function(e) {
    e.preventDefault();
    $('#mobile-menu').slideToggle();
  });

  // Tabs
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });

  // Scroll To
  $('.down').on('click', function(e){
    e.preventDefault();
    var toGo = $(this).data('down');
    $('html,body').animate({
      scrollTop: $(toGo).offset().top
    }, 'slow');
  });

  // Equalize testimonial heights

  equalheight = function(container){

  var currentTallest = 0,
       currentRowStart = 0,
       rowDivs = new Array(),
       $el,
       topPosition = 0;
   $(container).each(function() {

     $el = $(this);
     $($el).outerHeight('auto')
     topPostion = $el.position().top;

     if (currentRowStart != topPostion) {
       for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].outerHeight(currentTallest);
       }
       rowDivs.length = 0; // empty the array
       currentRowStart = topPostion;
       currentTallest = $el.outerHeight();
       rowDivs.push($el);
     } else {
       rowDivs.push($el);
       currentTallest = (currentTallest < $el.outerHeight()) ? ($el.outerHeight()) : (currentTallest);
    }
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].outerHeight(currentTallest);
     }
   });
  }

  $(window).load(function() {
    equalheight('.block-row div');
  });


  $(window).resize(function(){
    equalheight('.block-row div');
  });

  // Super awesome event tracking for the win
  (function() {
    var Event, event, i, len, list, sendEvent;

    Event = (function() {
      function Event(el) {
        this.$el = $(el);
        this.hitType = 'event';
        this.eventCategory = this.$el.data('event-category');
        this.eventAction = this.$el.data('event-action');
        this.eventLabel = this.$el.data('event-label');
      }

      return Event;

    })();

    list = [];

    $('.ga-event').each(function() {
      return list.push(new Event(this));
    });

    sendEvent = function(event) {
      return function() {
        ga('send', event.hitType, event.eventCategory, event.eventAction, event.eventLabel);
      };
    };

    for (i = 0, len = list.length; i < len; i++) {
      event = list[i];
      event.$el.click(sendEvent(event));
    }

  }).call(this);

});
