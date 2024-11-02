import React, { useEffect, useState } from "react"
// import { Link } from "react-router-dom";
import { fetchItemsList } from "../api/itemListAPI.js"
import { Table } from "@radix-ui/themes"

function ItemListPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        const ItemData = await fetchItemsList();
        setItems(ItemData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getItems();
  }, []);

  if (loading) return <p>Loading items...</p>;
  if (error) return <p>Error fetching items: {error}</p>;

  const renderedItemList = (items) => {
    return (
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Item</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Sell Location</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map(item => (
            <Table.Row key={item.id}>
              <Table.RowHeaderCell>{item.item_name}</Table.RowHeaderCell>
              <Table.Cell>{item.item_category}</Table.Cell>
              <Table.Cell>{item.item_description}</Table.Cell>
              <Table.Cell>{item.price}</Table.Cell>
              <Table.Cell>{item.sell_location}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  };

  return (
    <div>
      <h1>Item List</h1>
      {renderedItemList(items)}
    </div>
  )
}

export default ItemListPage;
