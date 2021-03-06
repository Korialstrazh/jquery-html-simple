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

List of usable tags:
* a
* area
* article
* aside
* audio
* b
* base
* bdi
* bdo
* blockquote
* br
* button
* canvas
* caption
* cite
* code
* col
* colgroup
* datalist
* dd
* details
* dfn
* div
* dl
* dt
* em
* embed
* fieldset
* figcaption
* figure
* footer
* form
* h1
* h2
* h3
* h4
* h5
* h6
* header
* hr
* i
* iframe
* img
* input
* ins
* kbd
* keygen
* label
* legend
* li
* link
* main
* mark
* math
* menu
* meta
* meter
* nav
* noscript
* object
* ol
* optgroup
* option
* output
* p
* pre
* progress
* q
* rp
* rt
* ruby
* s
* samp
* script
* section
* select
* small
* source
* span
* strong
* sub
* summary
* sup
* svg
* table
* tbody
* td
* textarea
* tfoot
* th
* thead
* time
* title
* tr
* track
* u
* ul
* value
* video
* wbr