import React, { useEffect, useState } from "react"
// import { Link } from "react-router-dom";
import { fetchItemsList } from "../api/itemListAPI.js"
import { Select, Table } from "@radix-ui/themes"

function ItemListPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

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

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
  };

  const categories = ['All', ...new Set(items.map(item => item.item_category))];
  const locations = ['All', ...new Set(items.map(item => item.sell_location))];

  const categoryDropdown = (
    <Select.Root onValueChange={handleCategoryChange}>
      <Select.Trigger placeholder="item category"/>
      <Select.Content>
        <Select.Group>
          <Select.Label>Category</Select.Label>
          {categories.map(category => (
            <Select.Item key={category} value={category}>{category}</Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );

  const locationDropdown = (
    <Select.Root onValueChange={handleLocationChange}>
      <Select.Trigger placeholder="shop location"/>
      <Select.Content>
        <Select.Group>
          <Select.Label>Location</Select.Label>
          {locations.map(location => (
            <Select.Item key={location} value={location}>{location}</Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );

  const renderedItemList = (items) => {
    const filteredItems = items.filter(item => {
      const categoryMatch = selectedCategory === 'All' || item.item_category === selectedCategory;
      const locationMatch = selectedLocation === 'All' || item.sell_location === selectedLocation;
      return categoryMatch && locationMatch;
    });
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
          {filteredItems.map(item => (
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
      <div>
        Filter by: 
        {categoryDropdown}
        {locationDropdown}
      </div>
      {renderedItemList(items)}
    </div>
  )
}

export default ItemListPage;
