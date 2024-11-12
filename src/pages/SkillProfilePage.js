import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { fetchSkillDetail } from "../api/monsterSkillAPI.js"
import { Container, Table, Text } from "@radix-ui/themes"

function SkillProfilePage() {
  const params = useParams();
  const [skill, setSkill] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSkillDetail = async (skill_id) => {
      try {
        const skillData = await fetchSkillDetail(skill_id);
        setSkill(skillData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getSkillDetail(params.skillId);
  }, [params.skillId]);

  if (loading) return <p>Loading skill...</p>;
  if (error) return <p>Error fetching skill: {error}</p>;

  return (
    <Container size="2">
      <Text>Skill Profile</Text>
      
      <Table.Root variant='surface'>
        <Table.Row>
          <Table.Cell>Game Name</Table.Cell>
          <Table.Cell>{skill.old_name}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Updated Name</Table.Cell>
          <Table.Cell>{skill.new_name}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Category</Table.Cell>
          <Table.Cell>{skill.category_type}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Family Type</Table.Cell>
          <Table.Cell>{skill.family_type}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{skill.description}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>MP Cost</Table.Cell>
          <Table.Cell>{skill.mp_cost}</Table.Cell>
        </Table.Row>

        {skill.upgrade_from && (
          <Table.Row>
            <Table.Cell>Upgrades From</Table.Cell>
            <Table.Cell>
              <Link to={`/dqm1/skills/${skill.upgrade_from.id}`}>
                {skill.upgrade_from.old_name}
              </Link>
            </Table.Cell>
          </Table.Row>
        )}
        {skill.upgrade_to && (
          <Table.Row>
            <Table.Cell>Upgrades To</Table.Cell>
            <Table.Cell>
              <Link to={`/dqm1/skills/${skill.upgrade_to.id}`}>
                {skill.upgrade_to.old_name}
              </Link>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Root>

      <Text>Required Stats to Learn Skill</Text>

      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Level</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>HP</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>MP</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>ATK</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>DEF</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>AGL</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>INT</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              {skill.required_level ? skill.required_level : 'N/A'}
            </Table.Cell>
            <Table.Cell>
              {skill.required_hp ? skill.required_hp : 'N/A'}
            </Table.Cell>
            <Table.Cell>
              {skill.required_mp ? skill.required_mp : 'N/A'}
            </Table.Cell>
            <Table.Cell>
              {skill.required_atk ? skill.required_atk : 'N/A'}
            </Table.Cell>
            <Table.Cell>
              {skill.required_def ? skill.required_def : 'N/A'}
            </Table.Cell>
            <Table.Cell>
              {skill.required_agl ? skill.required_agl : 'N/A'}
            </Table.Cell>
            <Table.Cell>
              {skill.required_int ? skill.required_int : 'N/A'}
            </Table.Cell>
          </Table.Row>
          
        </Table.Body>
        
      </Table.Root>
    </Container>
  );
}

export default SkillProfilePage
