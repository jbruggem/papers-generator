
var assert = require("assert");

describe('papers', function() {
  
  var zeptoEnv = (function loadDomEnv(){
    var domino = require('domino');
    var Zepto = require('zepto-node');

    var window = domino.createWindow();
    return Zepto(window);
  })();

  var papers = require('./../lib/papers.js');
  var paperFunctions = require('./../lib/papers.functions.js');

  papers.$ = zeptoEnv;
  paperFunctions.$ = zeptoEnv;

  var $ = zeptoEnv;

  var dataList = function(){ return [
		{'tit': "a", 'img': "src/img/a", 'txt': "test a text" },
		{'tit': "b", 'img': "src/img/b", 'txt': "test b text" },
		{'tit': "c", 'img': "src/img/c", 'txt': "test c text" },
	]; 
  }

  var srcElem = function(){ return "<section><h3></h3><img/><p></p></section>"; }

  describe('paper object' , function() {
	  
    it('should expose the right attrs and funcs', function() {
      assert.equal(typeof(papers.debug),'boolean'); 
      assert.equal(typeof(papers.formatters),'object');
      assert.equal(typeof(papers.formatters.titleImageText),'function');
      assert.equal(typeof(papers.addDataToDocument),'function');
      assert.equal(typeof(papers.helpers),'object');
      assert.equal(typeof(papers.helpers.multiplyList),'function');
            
      assert.equal(typeof(papers.appendAll),'undefined');
      assert.equal(typeof(papers.appendOne),'undefined');
      
      assert.equal(typeof(paperFunctions.appendElem),'function');
    });
    
  });
  
  describe('titleImageText' , function() {
    var elem = $(srcElem());
    var data = dataList();
    var res = papers.formatters.titleImageText(data[0],elem);
		
    it('should send the same DOM Element', function() {
      assert.equal($(res).attr('nodeName'),elem.attr('nodeName'));
      assert.equal ( res , elem);
    });
    
    it('should populate data', function() {
		assert.notEqual($(res).find("h3").text().length, 0);
		assert.notEqual($(res).find("img").attr('src').length, 0);
		assert.notEqual($(res).find("p").text().length, 0);
    });
  });
  
  describe('multiplyList' , function() {
    var newLength = 50;
    var oldList = dataList();
    var newList = papers.helpers.multiplyList(oldList,newLength);
	  
    it('should make the right list size', function() {
      assert.equal(newList.length,newLength);
    });
    
    it('should use only elements from the source list', function() {
		for(var i in newList)
			assert.notEqual(-1,oldList.indexOf(newList[i]));
    });
  });  
  
  describe('addDataToDocument' , function() {
    var list = dataList();
    var form = papers.formatters.titleImageText;
    
    it('should fail is source or target is empty', function() {
		assert.throws(function(){
			papers.addDataToDocument(list,$(""),$("<div></div>"),form);
		},/empty/);
		
		assert.throws(function(){
			papers.addDataToDocument(list,$("<section></section>"),$(""),form);
		},/empty/);
		
		assert.throws(function(){
			papers.addDataToDocument(list,$(""),$(""),form);
		},/empty/);
    });
    
  });  
  
  describe('appendElem' , function() {

  });  
  
});

