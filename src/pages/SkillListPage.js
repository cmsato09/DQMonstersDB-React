import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { fetchSkillsList } from "../api/monsterSkillAPI.js"
import { Box, Container, Flex, Heading, Select, Strong, Table } from "@radix-ui/themes"

function SkillListPage() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFamily, setSelectedFamily] = useState('All');

  useEffect(() => {
    const getSkills = async () => {
      try {
        const SkillData = await fetchSkillsList();
        setSkills(SkillData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getSkills();
  }, []);

  if (loading) return <p>Loading skills...</p>;
  if (error) return <p>Error fetching skills: {error}</p>;

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleFamilyChange = (value) => {
    setSelectedFamily(value);
  };

  const categories = ['All', ...new Set(skills.map(skill => skill.category_type))];
  const skillfamilies = ['All', ...new Set(skills.map(skill => skill.family_type))];

  const categoryDropdown = (
    <Select.Root onValueChange={handleCategoryChange}>
      <Select.Trigger placeholder="skill category"/>
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

  const skillfamilyDropdown = (
    <Select.Root onValueChange={handleFamilyChange}>
      <Select.Trigger placeholder="skill family"/>
      <Select.Content>
        <Select.Group>
          <Select.Label>Location</Select.Label>
          {skillfamilies.map(family => (
            <Select.Item key={family} value={family}>{family}</Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );

  const renderedSkillList = (skills) => {
    const filteredSkills = skills.filter(skill => {
      const categoryMatch = selectedCategory === 'All' || skill.category_type === selectedCategory;
      const familyMatch = selectedFamily === 'All' || skill.family_type === selectedFamily;
      return categoryMatch && familyMatch;
    });

    return (
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Skill</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Family</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>MP Cost</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filteredSkills.map(skill => (
            <Table.Row key={skill.id}>
              <Table.RowHeaderCell>
                <Link key={skill.id} to={`${skill.id}`}>
                  {skill.old_name}
                </Link>
              </Table.RowHeaderCell>
              <Table.Cell>{skill.category_type}</Table.Cell>
              <Table.Cell>{skill.family_type}</Table.Cell>
              <Table.Cell>{skill.description}</Table.Cell>
              <Table.Cell>{skill.mp_cost}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  };

  return (
    <Container size="3" m="3">
      <Heading>DQM1 Skills List</Heading>
      <Flex direction="row" gap="2" align="center">
        <Strong>Filter by:</Strong>
        {categoryDropdown}
        {skillfamilyDropdown}
      </Flex>
      <Box my="3">
        {renderedSkillList(skills)}
      </Box>
    </Container>
  )
}

export default SkillListPage;
