import React from "react";
import ReactTable from "./ReactTable";
import CurrencyTry from "./CurrencyTry";
import "./App.css"


function App() {

    return (
        <article>
            <h1>Cinema Calc Coding Challenge</h1>
            <ReactTable />
            {/* <CurrencyTry /> */}
            {/* comment it in and ReactTable out to see the automated try for €, % implementation */}
        </article>
    )
}

export default App;