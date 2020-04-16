if (window["jQuery"] == undefined) console.error("jQuery must be defined first");
else {
  const generateTagFunction = function(tag) {
    $[tag] = function() {
        let element = $("<" + tag + ">");
        if (arguments.length > 0) {
            $.each(arguments, function(i, arg) {
                switch ((typeof arg).toLowerCase()) {
                    case "string": try { element.text(arg); } catch (err) { console.error(err.message); }; break;
                    case "object": try { element.append(arg); } catch (err) { console.error(err.message); }; break;
                    default: break;
                }
            });
        }
        return element;
    }
  };
  
  $.each([
    "a",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "h6",
    "header",
    "hr",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "mark",
    "math",
    "menu",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "sub",
    "summary",
    "sup",
    "svg",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "type",
    "u",
    "ul",
    "value",
    "video",
    "wbr"
  ], (i, tag) => { if (tag.length > 0) generateTagFunction(tag); });
}



