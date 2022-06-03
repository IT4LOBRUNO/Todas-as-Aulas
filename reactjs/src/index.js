import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function primeiroJSX(){
    return (
        <div>
            Italo Silva - Introdução ao ReactJS
        </div>
    )
}

const App = () => {
    return (
        <div className ="App">
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)