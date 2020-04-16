# jquery-html-simple
Simplifies the HTML elements generation a bit.
```javascript
// the following default generation..
var withDefault = $("<div>");
// .. can be replaced by
var withSimple = $.div();
```

It is also possible to create nested elements and pass text values:
```javascript
const pnl = $.div(
  $.img().attr({src: "path/to/some/image.png"}),
  $.div(
    $.span("Hello"),
    $.span("World"),
    $.span("!")
  )
);
```
