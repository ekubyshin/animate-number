(function(Math, window){

    "use strict";

    var animateNumber = function(begin, end, cb, precision) {

        var value = begin,
            toValue = Math.abs(begin - end),
            counter = +(Math.ceil(toValue / 200) + ((Math.random() * 0.1 + 0.1).toFixed(precision || 0))),
            interval;

        if (end < begin) {

            counter = -counter;
        }

        interval = setInterval(
                function() {

                    value += counter;

                    if (value >= end &&
                        counter > 0 ||
                            value <= end &&
                                counter < 0) {

                        clearInterval(interval);
                        value = end;
                    }

                    return cb(value.toFixed(precision || 0));
                },
                15
            );
    };

    window.animateNumber = animateNumber;
}(Math, window));