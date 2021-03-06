/*
 * This is functionally exactly the same as tagify.jquery.min.js, but documented, unrolled, and with unnecessary bits added to
 * help make it more easily understood. Note, also, that this is not the same as if whitespace had been added.
 * 
 * !! DO NOT USE THIS in a production environment !!
 * This file is 2,217 Bytes, and tagify.jquery.min.js is only 154 Bytes.
 */

/**
 * Uses the given parameters to create an array of HTML elements to use as tags on a webpage. This version relies on jQuery
 * being loaded in the webpage when this function is called
 * 
 * @param tagString      the user-created, raw string of tags with arbitrary delimiters between tags
 * @param delimiterArray an array of arbitrary delimiters used between the given tags
 * @param cssClass       the CSS class(es) assigned to all returned elements
 * @param htmlTagName    the tag name of the returned elements
 * 
 * @return an array of elements, each representing a tag given in tagString
 * 
 * @author Blue Husky Studios
 * @since 2014-10-27
 * @version 1.1.1
 * 		- 1.1.1 (2014-10-27) - removed unnecessary rexex assignment (not reflected here)
 * 		- 1.1.0 (2014-10-27) - added htmlTagName parameter
 * 		- 1.0.0 (2014-10-27) - created the method
 */
 function tagify(tagString, delimiterArray, cssClass, htmlTagName)
{
	var delimiterString = ""; // start a string version of the given array of delimiters
	for (i in delimiterArray) // for each delimiter
	{
		delimiterString += delimiterArray[i]; // add it to the string without more delimiters between them
	}
	var regex = new RegExp("[^" + delimiterString + "]+","g"); // create a regex that matches anything between delimiters
	
	tags = tagString.match(regex); // create array of the tags in tagString, using delimiters as delimiters (amazing!)
	for (i in tags) // for each of these tags
	{
		tags[i] = // replace the tag with the following:
			$("<" + htmlTagName + ">" + tags[i] + "</>") // create a new HTML element of the specified type, whose inner HTML is the tag text
			.addClass(cssClass) // add the given class
			[0]; // only use the first item returned by jQuery
	}
	return tags; // return the tags as HTML elements
}