import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { fetchMonsterList } from "../api/monsterInfoAPI"
import { Select, Table, TextField } from "@radix-ui/themes"

function MonsterListPage() {
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFamily, setSelectedFamily] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleFamilyChange = (value) => {
    setSelectedFamily(value);
  };

  const monsterfamilies = ['All', ...new Set(monsters.map(monster => monster.family.family_eng))];

  const monsterfamilyDropdown = (
    <Select.Root onValueChange={handleFamilyChange}>
      <Select.Trigger placeholder="monster family"/>
      <Select.Content>
        <Select.Group>
          <Select.Label>FAMILY</Select.Label>
          {monsterfamilies.map(family => (
            <Select.Item key={family} value={family}>{family}</Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );

  const searchInput = (
    <TextField.Root
      placeholder="Search monster name..."
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
    />
  );
  
  const renderedMonsterList = (monsters) => {
    const filteredMonsters = monsters.filter(monster => {
      const familyMatch = selectedFamily === 'All' || monster.family.family_eng === selectedFamily;
      const nameMatch = monster.old_name.toLowerCase().includes(searchQuery.toLowerCase());
      return familyMatch && nameMatch;
    });
    return (
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Family</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filteredMonsters.map(monster => (
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
      <div>
        {searchInput}
        Filter by: 
        {monsterfamilyDropdown}
      </div>
      {renderedMonsterList(monsters)}
    </div>
  )
}

export default MonsterListPage;
