// Import CSS
// See: https://github.com/webpack-contrib/css-loader
import css from "./style.css";


// Import vs require
// See: https://github.com/webpack/webpack/issues/1973#issuecomment-18574431
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import * as c from "./content";
document.write(c.whatever());


