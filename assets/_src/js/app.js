$(document).ready(function(){

  $('.testimonial-slider').slick({
      arrows:false,
      dots:true,
      autoplay:true,
    });

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

  var maxHeight = 0;

  $(".testimonial-container").each(function(){
     if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
  });

  $(".testimonial-container").height(maxHeight);

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
