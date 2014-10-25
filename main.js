// check for changes on the text area
$( "#edit" ).bind( "input propertychanged", function() {

    var str = this.innerHTML;

    var numChars = count(str, /[^\s]/gi).length;
    $("#char-count").html(pluralize(numChars, "character"));

    var numWords = count(str, /[\w\d]+/gi).length;
    $("#word-count").html(pluralize(numWords, "word"));

    var sentences = count(str, /[^\.?!]+[\.?!]+[^\.?!]/gi);
    $("#sentence-count").html(pluralize(sentences.length, "sentence"));
});


function pluralize(count, base) {
    if (count != 1) {
        return count + " " + base + "s";
    } else {
        return count + " " + base;
    }
} 

function count(str, regex) {
    var matches = str.match(regex);
    return matches ? matches : [];
}
