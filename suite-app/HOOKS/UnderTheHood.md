HOOKS UNDER THE HOOD:

react is a runtime
A system that continually outputs a tree of nodes

in the browser, nodes translate to document object nodes that construct HTML

The eventual output of react as a runtime is an entire document that represents the entire application

react engine can react to external events (like UI, network responses, timers, etc) and will adjust tree of nodes so the document updates with the added or removed elements based on the expected responses to those events

react creates DOM nodes under the hood by running core DOM API code

ReactDOM.render(

  <p>Hello Wrld</p>,
  document.getElementById('root');
);

translates to....

let rootDiv = document.getElementById('root');
let pNode = document.createElement('p');
pNode.innerText = 'Hello Wrld';
rootDiv.appendChild(pNode);

So, kind of syntatic suger to this point...

UNTIL you want to update:

And I Do ... I spelled world wrong, smh...

ReactDOM.render(

  <p>Hello World</p>,
  document.getElementById('root');
);

React runtime cant take one of two approaches:
ONE: Nuke original code and create from scratch;

let rootDiv = document.getElementById('root');
rootDiv.innerHTML = "
let pNode = document.createElement('p');
pNode.innerText = 'Hello World';
rootDiv.appendChild(pNode);

TWO: GO through RECONCILIATION
decide whether to update an existing node OR create a new node
