import React from "react";
import ReactTable from "./ReactTable";
import CurrencyTry from "./CurrencyTry";
import "./App.css"


function App() {

    return (
        <article>
            <h1>Cinema Calc Coding Challenge</h1>
            <p>For the price type as follows: 100 or 100.99 </p>
            <p>For the markup type as follows: 100 or 100.00 </p>
            <ReactTable />
            {/* <CurrencyTry /> */}
            {/* comment it in and ReactTable out to see the automated try for €, % implementation */}
        </article>
    )
}

export default App;