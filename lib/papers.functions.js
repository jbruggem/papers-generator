
// if we are in a node env
if(typeof(exports) == 'object'){
  publicObject = exports;
  
// if we are in the browser
}else{
  publicObject = {};
  papersLib = publicObject;
}

if( 'undefined' != typeof($)) publicObject.$ = $;


/**
 * Append data to DOM by calling formatter on the source data 
 * then appending it to the DOM
 * 
 * @param {DOMElement} recipientDomElement
 * @param {DOMElement} templateDomElement
 * @param {object} sourceData
 * @param {function} formatter
 */
publicObject.appendElem = function(sourceData,templateDomElement,recipientDomElement,formatter){
  
  publicObject.$(recipientDomElement).append(
    formatter(
      sourceData,
      publicObject.$(templateDomElement).clone()
    )
  );
}



