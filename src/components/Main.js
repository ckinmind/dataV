import React from 'react'
import Markdown from './markdown'

let test = `

相关代码：
\`\`\`js
let a = 123;
var html = Prism.highlight(props.literal, Prism.languages[props.language]);
var cls = 'language-' + props.language;
\`\`\`

解释：
\`\`\`js
解释：
- fdf
- fdfd
- fdfdf
1. 第一点
2. 第二点
3. 第三点
\`\`\`

`;




class App extends React.Component {


  render() {

    return (
      <div>
          <h1> D3 Leaning</h1>
          <Markdown source={test} />
      </div>

    );
  }
}


export default App;
