import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { fetchSkillsList } from "../api/monsterSkillAPI.js"
import { Table } from "@radix-ui/themes"

function SkillListPage() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const renderedSkillList = (skills) => {
    return (
      <Table.Root>
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
          {skills.map(skill => (
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
    <div>
      <h1>Skill List</h1>
      {renderedSkillList(skills)}
    </div>
  )
}

export default SkillListPage;
