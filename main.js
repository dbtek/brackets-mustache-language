/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50*/
/*global define, $, brackets, window*/

/*!
 * Brackets Mustache language extension.
 * Adds support for mustache file extensions.
 * © 2014, İsmail Demirbilek, MIT License
 * http://github.com/dbtek/brackets-mustache-language
 */

define(function (require, exports, module) {
    "use strict";
    var LanguageManager = brackets.getModule("language/LanguageManager");
    var language = LanguageManager.getLanguage("html");
    language.addFileExtension("mustache");
});