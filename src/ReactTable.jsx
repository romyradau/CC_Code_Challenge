import * as React from "react";
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import BigNumber from "bignumber.js";

import { 
    Table,
    Header,
    HeaderRow,
    HeaderCell,
    Body,
    Row,
    Cell
 } from '@table-library/react-table-library/table';


const list = [
  {
    id: '1',
    name: 'VSCode',
    price: "price",
    percentage_markup: "percentage_markup",
    total_price: "total_price",
  },
  {
    id: '2',
    name: 'VSCode',
    price: "price",
    percentage_markup: "percentage_markup",
    total_price: "total_price",
  },
  {
    id: '3',
    name: 'VSCode',
    price: "price",
    percentage_markup: "percentage_markup",
    total_price: "total_price",
  }
];

//to create a custom theme
//update the return!

const ReactTable = () => {

  //const data = { nodes: list };
  const [data, setData] = React.useState({ nodes : list });
  const [value, setValue] = React.useState("");


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    const id = Math.floor(Math.random() * (9990 - 0 + 1)) + 0;

    setData((state) => ({
      ...state,
      nodes: state.nodes.concat({
        id,
        name: value,
        price: "",
        percentage_markup: "",
        total_price: "",
        nodes: null,
      }),
    }));

    event.preventDefault();
  };
  //to add

  const handleRemove = (id) => {
    setData((state) => ({
      ...state,
      nodes: state.nodes.filter((node) => node.id !== id),
    }));
  };
  //to remove

 /* const handleUpdate = (value, id) => {
    setData((state) => ({
      ...state,
      nodes: state.nodes.map((node) => {
        if (node.id === id) {
          return { ...node, name: value };
        } else {
          return node;
        }
      }),
    }));
  };*/

  const handleUpdate = (value, id, property) => {
    setData((state) => ({
      ...state,
      nodes: state.nodes.map((node) => {
        if (node.id === id) {
          return { ...node, [property]: value };
        } else {
          return node;
        }
      }),
    }));
  };
  //to update
  
  //const theme = useTheme(THEME);
  const theme = useTheme(getTheme());

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Create</button>
    </form>
    <Table data={data} theme={theme}>
      {(tableList) => (
        <>
        <Header>
          <HeaderRow>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Price</HeaderCell>
            <HeaderCell>Markup</HeaderCell>
            <HeaderCell>Total</HeaderCell>
            <HeaderCell>Delete</HeaderCell>

          </HeaderRow>
        </Header>

          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    value={item.name}
                    onChange={(event) =>
                      handleUpdate(event.target.value, item.id, "name")
                    }
                  />
                </Cell>
                {/* <Cell>{item.name}</Cell> */}
                <Cell>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    value={item.price}
                    onChange={(event) =>
                      handleUpdate(event.target.value, item.id, "price")
                    }
                  />
                </Cell>
                {/* <Cell>{item.price}</Cell> */}
                <Cell>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    value={item.percentage_markup}
                    onChange={(event) =>
                      handleUpdate(event.target.value, item.id, "percentage_markup")
                    }
                  />
                </Cell>
                {/* <Cell>{item.percentage_markup}</Cell> */}
                <Cell>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    value={item.total_price}
                    onChange={(event) =>
                      handleUpdate(event.target.value, item.id, "total_price")
                    }
                  />
                </Cell>
                {/* <Cell>{item.total_price}</Cell> */}
                <Cell>
                  <button type="button" onClick={() => handleRemove(item.id)}>
                    Remove
                  </button>
                </Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
    </>
  );
};
//tableList (and not data or list) should be used to render the items within the table
export default ReactTable;