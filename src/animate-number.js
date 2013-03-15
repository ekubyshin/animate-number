(function(Math, window){

    "use strict";

    var defaults = {
        precision: 0,
        interval:  15,
        steps:     200,
        callback:  function(val){return val;}
    };

    /**
     * Animates integer value from to.
     *
     * @param {Number} from
     * @param {Number} to
     * @param {Object} [options]
     */
    var animateNumber = function(from, to, options) {

        for (var opt in defaults) {
            if (!options.hasOwnProperty(opt)) {
                options[opt] = defaults[opt];
            }
        }

        var value   = from,
            toValue = Math.abs(from - to),
            counter = +(Math.ceil(toValue / options.steps) + ((Math.random() * 0.1 + 0.1).toFixed(options.precision))),
            interval;

        if (to < from) {
            counter = -counter;
        }

        interval = setInterval(
            function() {

                value += counter;

                if (value >= to && counter > 0 || value <= to && counter < 0) {
                    clearInterval(interval);
                    value = to;
                }

                return options.callback(value.toFixed(options.precision));
            },
            options.interval
        );
    };

    window.animateNumber = animateNumber;

}(Math, window));