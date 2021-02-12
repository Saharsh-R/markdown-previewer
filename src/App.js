import './App.scss';
import Split from 'react-split'
import marked, { Renderer, use } from 'marked';
import  { useState, useEffect } from 'react';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://reactjs.org/logo-og.png)
`;


function App() {

  let [mark, setMark] = useState(placeholder)

  const handleChange = e => {
    setMark(e.target.value)
  }
  return (
    <div className="App">
      <Split
        className='split'
        minSize = {400}
      >
          <C1 mark={mark} onChange={handleChange}/>
          <C2 mark={mark}/>
      </Split>

      
    </div>
  );
}

function C1(props) {
  return (
    <div className="comp">
      <p className='heading'>Editor</p>
      <div id='editor-box'>
        <textarea id='editor' value={props.mark}  onChange={props.onChange}></textarea>
      </div>
    </div>
  );
}

function C2(props) {
  
  return (
    <div className="comp ">
      <p className='heading'>Previewer</p>
      <div id='preview' className ="preview" dangerouslySetInnerHTML={{__html: marked(props.mark, {gfm: true, breaks: true})}}></div>
    </div>
  );
}

export default App;
