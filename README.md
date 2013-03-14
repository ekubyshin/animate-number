Animate Number
==============

Mega animation tool for numbers.

Usage
--------------

animateNumber(50000, 30000, {precision: 2, callback: console.log.bind(console)});

animateNumber(30000, 50000, {callback: console.log.bind(console)});

Options
--------------

Plugin have defaults options, that u can override:

```javascript
    var defaults = {
        precision: 0,
        interval:  15,
        steps:     200,
        callback:  function(val){return val;}
    };
```