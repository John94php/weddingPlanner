import React from 'react';
import ReactDom from 'react-dom'
import { createRoot} from 'react-dom/client'
const container = document.getElementById('hello')
const root = createRoot(container)
class Hello extends React.Component {
    render() {
        return <>
        <p>Hello</p>
        </>
    }
}
root.render(<Hello/>)

