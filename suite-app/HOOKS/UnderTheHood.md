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

But, for obvious reasons, this can become taxing and expensive...

TWO: GO through RECONCILIATION
decide whether to update an existing node OR create a new node

So, would ask ... 'Is the root div's child alreary a <p>?
And since it is, just runs

pNode.innerText = 'Hello World';

This also illuminates why React asks us for unique keys in mapped elements

stuff.map(thing => <div key={thing.id} />)

won't need to update or act upon each node, only the targeted node by id

Soo that's how React works DOM nodes, what about components?

Well, all our react components are functions. Got it.

BUT, we don't call those functions...

We write JSX that specifies what we'd like to render

ReactDOM.render(<App />, document.getElementById('root'));

And with that we hand over the control to react to make ALL the function calls ... this is inversion of control

By handing over the responsibility to React, React gets the ability to do some pretty sweet stuff that, if we were to helm the reigns, would be totally lost

For instance, React can recusively call multiple nested components if a nested JSX structure is provided. SO, we don't call functions to then execute component structure, React does that for us, consistently and efficiently.

So, determines what needs to render to determine the necessary DOM structure over time

Giving React the power to control app components also gives React the ability to augment components with features like STATE, local data, and bind SIDE EFFECTS to rendering of components, perhaps fetching data.

AND the API for such augmentation that we are going to discuss is REACT HOOKS
useState augments components by assigning and handling state
useEffect augments components by assigning and handling render side effects
