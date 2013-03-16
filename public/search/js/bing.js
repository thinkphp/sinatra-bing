var bing = function(){

      var f, 
          resultscontainer, 
          send, 
          q;
        
      function init() {

          f    = document.getElementById('googleform')
          send = document.getElementById('send'),
          q    = document.getElementById('q')

          if(f && send && q) {

             bing.addEvent(f, 'submit', bing.get, false)
          }
      }

      function get( e ) {

          e.preventDefault()
          e.stopPropagation()

          var searchterm = q.value;

          window.location = 'http://' + window.location.host + '/search/' + searchterm
      }

      function addEvent(elem, evType, fn, useCapture) {
 
          if(elem.addEventListener) {
            return elem.addEventListener(evType, fn, useCapture) 
          } else if(elem.attachEvent) {
            return elem.attachEvent('on'+evType,fn)
          } else {
            elem['on'+evType] = fn
          }
      }

      return {init: init, get: get, addEvent: addEvent}
}();

bing.init();