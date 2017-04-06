import React from 'react'
import ReactMarkdown from 'react-markdown'
import Prism from 'prismjs'
import 'prismjs/themes/prism-coy.css'


function CodeBlock(props) {
    let html = Prism.highlight(props.literal, Prism.languages[props.language]);
    let cls = 'language-' + props.language;

    return (
      <pre className={cls}>
      <code
        dangerouslySetInnerHTML={{__html: html}}
        className={cls}
      />
    </pre>
    )
}

const Markdown = ({source}) =>(
    <ReactMarkdown source={source} renderers={{CodeBlock: CodeBlock}} />
);

export default Markdown;