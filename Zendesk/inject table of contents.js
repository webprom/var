/**
 * Inject TOC above Zendesk Help Center Article
 * (once there are more than 2 article headings)
 * @license MIT License
 * @author Rutger Meekers [rutger@meekers.eu]
 */
if ($('.article-body h2').length > 2) {

  // Create an array to store the TOC
  var toc = [];

  // Find all the headers, create a list from them and add name attributes
  $('.article-body h2').replaceWith(function() {
    // Get the heading text
    var headingText = $.trim($(this).text());
    // Add the text to the menu
    toc.push(headingText);
    return '<a name="' + headingText + '"></a><h2>' +  headingText + '</h2>';
  });

  // Create the TOC placeholder
  $('.article-body').prepend('<div class="article-table-of-contents"><ol></ol></div>');

  // Add the TOC to the placeholder
  $(toc).each(function(index) {
    $('.article-table-of-contents ol')
      .append('<li><a href="#' + toc[index] + '">' + toc[index] + '</a></li>');
  });
}
