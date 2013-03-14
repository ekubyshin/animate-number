animate-number
==============

animate number

usage
==============

animateNumber(50000, 30000, {precision: 2, callback: console.log.bind(console)});

animateNumber(30000, 50000, {callback: console.log.bind(console)});

defaults
==============

```javascript
    var defaults = {
        precision: 0,
        interval:  15,
        steps:     200,
        callback:  function(val){return val;}
    };
```