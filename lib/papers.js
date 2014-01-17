
// if we are in a node env
if(typeof(exports) == 'object'){
  var papersLib = require('./papers.functions.js');
  publicObject = exports;

// if we are in a browser
}else{
  publicObject = {};
  papers = publicObject;
}

if( 'undefined' != typeof($)) publicObject.$ = $;

publicObject.debug = false;


////////////////////////////////
// formatters
////////////////////////////////

publicObject.formatters = {
  debug: publicObject.debug,
  /**
  * @param {object} data structed data
  * @param {DOMElement} element Dom Element to populate
  * @returns {DOMElement} the element
  * 
  * takes structured data in the following format:
  * { "tit": "","img": "", "txt": "", }
  * 
  * expects the source element to follow this structure:
  *   <section><h3></h3><img/><p></p></section>
  */
  titleImageText: function(data,element){
    publicObject.$(element).find('h3').text(data.tit);
    publicObject.$(element).find('img').attr('src',data.img);
    publicObject.$(element).find('p').html(data.txt);
    return element;
  },
};


////////////////////////////////
// core
////////////////////////////////
  
// this function is given "export" as it's "public" object
// thus everything added to "public" is actually added to "papers"
(function(public){

  // private functions with no side-effects are loaded seperately
  // this is done so that these can be unit tested
  var appendElem = papersLib.appendElem 

  public.addDataToDocument = function(list,sourceElement,targetElement,formatter){
    
    if(public.debug)
      console.log(list,sourceElement,targetElement,formatter);
    
    if(0 == publicObject.$(sourceElement).length)
      throw new Error("sourceElement is empty.");
      
    if(0 == publicObject.$(targetElement).length)
      throw new Error("targetElement is empty.");
    
    publicObject.$(list).each(function(index,item){
      appendElem(item,sourceElement,targetElement,formatter);
    });
  }
  
  public.helpers = {};
  
  /**
   * Clone existing elements of a list to make it longer
   * 
   * @param {list} list the list of elements
   * @param {Int} newLength the expected number of elements in the list returned
   */ 
  public.helpers.multiplyList = function (list,newLength){
    
    var i = 0;
    while(list.length < newLength) 
      list.push(
        list[ i++ % list.length ]
      );
      
    return list;
  }
  
  /**
   * Duplicate each element of a list to make it longer
   * 
   * @param {list} list the list of elements
   * @param {Int} times number of times to duplicate each element
   */ 
  public.helpers.duplicateList = function (list,times){
    
    var i = 0;
    var newList = [];
    for( var i in list) 
      for(var j=0; j < 3; j++)
        newList.push(list[i]);
      
    return newList;
  }
  
})(publicObject)



