import React from 'react';
import ReactTable from './ReactTable';


function App() {

/*    const data = React.useMemo(() => ReactTable, []);
    const columns = React.useMemo(() =>[])
    {
        ReactTable.headerGroups
    }
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});
*/
    return (
        <article>
            <h1>Cinema Calc Coding Challenge</h1>
            <ReactTable />
            {/* <table {...getTableProps()}>
                <thead></thead>
                {headerGroups.map((headerGroup))}
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => {
                    <th {...column.getHeaderProps()}>
                        {column.render("Header")}

                    </th>
                    })}
                </tr>
                <tbody></tbody>
            </table> */}
        </article>
    )
}

export default App;