import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { fetchMonsterList } from "../api/monsterInfoAPI"
import { Box, Container, Flex, Select, Text, TextField } from "@radix-ui/themes"
import MonsterCard from "../components/MonsterCard";

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
    <Flex align="center" gap="2">
      <Text as="label" size="3">
        Filter by :
      </Text>
      <Select.Root onValueChange={handleFamilyChange}>
        <Select.Trigger placeholder="Monster Family"/>
        <Select.Content>
          <Select.Group>
            <Select.Label>FAMILY</Select.Label>
            {monsterfamilies.map(family => (
              <Select.Item key={family} value={family}>{family}</Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Flex>
  );

  const searchInput = (
    <Box maxWidth="250px">
      <TextField.Root
        placeholder="Search monster name..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </Box>
  );
  
  const renderedMonsterList = (monsters) => {
    const filteredMonsters = monsters.filter(monster => {
      const familyMatch = selectedFamily === 'All' || monster.family.family_eng === selectedFamily;
      const nameMatch = monster.old_name.toLowerCase().includes(searchQuery.toLowerCase());
      return familyMatch && nameMatch;
    });
    
    return (
      <Flex gap="3" wrap="wrap" justify="start">
        {filteredMonsters.map(monster => (
            <MonsterCard
              key={monster.id}
              monsterID={monster.id}
              monsterOldName={monster.old_name}
              monsterFamily={monster.family.family_eng}
            />
        ))}
      </Flex>
    )
  };

  return (
    <Container size="3">
      <h1>DQM1 Monster List</h1>
      <Flex direction="column" gap="1" pt="2" pb="2">
        {searchInput}
        {monsterfamilyDropdown}
      </Flex>
      {renderedMonsterList(monsters)}
    </Container>
  )
}

export default MonsterListPage;
