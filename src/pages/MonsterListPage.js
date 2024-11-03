import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { fetchMonsterList } from "../api/monsterInfoAPI"
import { Table } from "@radix-ui/themes"

function MonsterListPage() {
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMonsters = async () => {
      try {
        const monsterData = await fetchMonsterList();
        setMonsters(monsterData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getMonsters();
  }, []);

  if (loading) return <p>Loading monsters...</p>;
  if (error) return <p>Error fetching monsters: {error}</p>;

  const renderedMonsterList = (monsters) => {
    return (
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Family</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {monsters.map(monster => (
            <Table.Row key={monster.id}>
              <Table.RowHeaderCell>
                <Link key={monster.id} to={`${monster.id}`}>
                  {monster.old_name}
                </Link>
              </Table.RowHeaderCell>
              <Table.Cell>{monster.family.family_eng}</Table.Cell>
              
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  };

  return (
    <div>
      <h1>Monster List</h1>
      {renderedMonsterList(monsters)}
    </div>
  )
}

export default MonsterListPage;
