import * as React from "react";
import "./ReactTable.css"
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import BigNumber from "bignumber.js";

import { 
    Table,
    Header,
    HeaderRow,
    HeaderCell,
    Body,
    Row,
    Cell
 } from "@table-library/react-table-library/table";

const list = [
  {
    id: "1",
    name: "Actor",
    price: "1000",
    percentage_markup: "15.00",
    total_price: "1150.00",
  },
  {
    id: "2",
    name: "Video",
    price: "1000",
    percentage_markup: "15.00",
    total_price: "1150.00",
  },
  {
    id: "3",
    name: "Director",
    price: "1000",
    percentage_markup: "15.00",
    total_price: "1150.00",
  }
];


const calculateTotalPrice = (price, percentageMarkup) => {
  const priceBN = new BigNumber(price);
  const markupBN = new BigNumber(percentageMarkup).dividedBy(100);

  const totalPriceBN = priceBN.plus(priceBN.multipliedBy(markupBN));

  return totalPriceBN.toFixed(2);
};

const sumOfAll = (list) => {
  let totalSum = new BigNumber(0);

  list.forEach((expense) => {
    if (expense.total_price) {
      const expenseTotalPrice = new BigNumber(expense.total_price);
      totalSum = totalSum.plus(expenseTotalPrice);
    }
  });

  return totalSum.toFixed(2); 
};


const ReactTable = () => {

  const [data, setData] = React.useState({ nodes : list });
  const [value, setValue] = React.useState("");
  const [totalSum, setTotalSum] = React.useState("0.00");

  const handleInput = (event) => {
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
    
    setValue("");
    
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

  
  const handleUpdate = (value, id, property) => {
    setData((state) => ({
      ...state,
      nodes: state.nodes.map((node) => {
        if (node.id === id) {
          if (property === "price" || property === "percentage_markup") {
            const totalPrice = calculateTotalPrice(
              property === "price" ? value : node.price,
              property === "percentage_markup" ? value : node.percentage_markup
            );
            
            return {
              ...node,
              [property]: value,
              total_price: totalPrice,
            };
          }
          
          return { ...node, [property]: value };
        } else {
          return node;
        }
      }),
    }));
  };
  //to update

  React.useEffect(() => {
    const newTotalSum = sumOfAll(data.nodes);
    setTotalSum(newTotalSum);
  }, [data.nodes]);
  //calculates the total sum whenever the list data changes
  
  const theme = useTheme(getTheme());

  return (
    <>
    <form className="addexpense" onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleInput} />
      <button type="submit">Add new expense</button>
    </form>
    {/* form to submit new input */}
    <Table data={data} theme={theme}>
      {(tableList) => (
        <>
        <Header>
          <HeaderRow>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Price</HeaderCell>
            <HeaderCell>Markup</HeaderCell>
            <HeaderCell>Total</HeaderCell>
            <HeaderCell>Action</HeaderCell>
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

                {/* commented out you see the version with currency/percentage
                this is an ungly hardcode approach though
                and one has to put the curser before the sign to change the value*/}
                
                {/* <Cell>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    value={item.price}
                    onChange={(event) => {
                      newPrice = event.target.value.replace("€", "")
                      handleUpdate(newPrice, item.id, "price")
                    }
                    }
                  />
                </Cell> */}

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

                {/* same here */}

                {/* <Cell>
                <input
                    style={{ width: "100%" }}
                    type="text"
                    value={item.percentage_markup + "%"}
                    onChange={(event) => {
                      const newPercent = event.target.value.replace("%", "")
                      handleUpdate(newPercent, item.id, "percentage_markup")
                    }
                    }
                  />
                </Cell> */}

                <Cell>{item.total_price + " €"}</Cell>
                <Cell>
                  <button className="deletebutton" type="button" onClick={() => handleRemove(item.id)}>
                    Delete
                  </button>
                </Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
    <div className="totalsum">Total: {totalSum + " €"}</div>
    </>
  );
};

export default ReactTable;