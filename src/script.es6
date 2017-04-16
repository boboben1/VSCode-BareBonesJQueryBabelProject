import jQuery from 'jquery'
import levenshtein from 'levenshtein.js'

window.$ = window.jQuery = jQuery;

$(function()
{
    $("#content").html(levenshtein.get("hello", "hallow"));
});
