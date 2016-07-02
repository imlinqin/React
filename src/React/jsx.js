
//使用JSX
'use strict';

var link = "";
React.render(React.createElement(
   'div',
   null,
   React.createElement(
      'div',
      null,
      React.createElement(
         'div',
         { className: 'abc' },
         'content'
      )
   )
), document.getElementById('examples'));

