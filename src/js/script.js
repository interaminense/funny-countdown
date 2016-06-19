(function($) {

    'use strict';

    var pageTimer = $("#pageTimer");
    var dots = $("#dots");

    var dot = 0;

    //countdown
    var timerId = countdown(new Date(2016, 6, 18), function(ts) {
        if(ts.days < 2){
            $(".days").html(ts.days + " dia");
        }else{
            $(".days").html(ts.days + " dias");
        }
        if(ts.hours != 0){
            $(".hours").html(ts.hours + " horas, ");
        }
        $(".minutes").html(ts.minutes + " minutos e");
        $(".seconds").html(ts.seconds + " segundos");

        dot = ts.days;

    }, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

    var showChartDot = function() {
        for (var i = 0; i < 30; i++) {
            if(i < dot){
                dots.append("<span class='dot remaining'></span>");
            }else{
                if(i == dot){
                    dots.append("<span class='dot active'></span>");
                }else{
                    dots.append("<span class='dot'></span>");
                }
            }
        }
    };

    showChartDot();

})($);
