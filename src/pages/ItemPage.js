import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { fetchItemsList } from "../api/itemListAPI.js"

function ItemListPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        const SkillData = await fetchItemsList();
        setItems(SkillData);
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
      <ul>
        {items.map(item => (
          <Link key={item.id} to={`${item.id}`}>
            {item.item_name} -- {item.item_description} -- {item.item_category} {item.price}
          </Link>
        ))}
      </ul>
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
