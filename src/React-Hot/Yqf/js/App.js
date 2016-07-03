import React, { Component } from 'react';

export default class App extends Component {
    render() {
       
        var aa= [{a:'1',b:'2'},{c:'3',d:'4'}];
        var bb= [2,3];
        var cc={a:22,b:33};

        const itemLeft = {
            href: '#',
            title: 'Left'
        };

        const itemRight = {
            href: '#',
            title: 'Right'
        };

        const dataAll = {
            title: 'Navbar',
            leftNav: [{...itemLeft, icon: 'left-nav'}],
        rightNav: [itemRight, itemRight],
   
    };

console.log(aa);
console.log(bb);
console.log(cc);
console.log(dataAll.leftNav[0].icon);
return (
  <h1>Hsello, rryyf4733s. </h1>
);
}
}