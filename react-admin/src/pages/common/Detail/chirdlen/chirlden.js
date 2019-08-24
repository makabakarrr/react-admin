import E from 'wangeditor'
import React, { Component } from 'react';



class Children extends Component {

    render() {
        return (
            <div ref='editorElem' style={{ textAlign: 'left' }} />
        )
    }
    componentDidMount() {
        this.initEditor()
    }

    initEditor() {
        const elem = this.refs.editorElem
        const editor = new E(elem)
        editor.create()
    }
    componentDidUpdate(){
        this.editor.txt.html()
    }
}

export default Children