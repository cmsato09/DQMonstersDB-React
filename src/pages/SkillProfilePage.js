import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { fetchSkillDetail } from "../api/monsterSkillAPI.js"
import { Container, Flex, Heading, Link as RadixLink, Strong, Table } from "@radix-ui/themes"

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

  if (loading) {
    return (
      <Container size="3" m="3">
        <Heading>Skill Profile</Heading>
        <p>Loading skill...</p>
      </Container>
    );
  }
  
  if (error) {
    return (
      <Container size="3" m="3">
        <Heading>Skill Profile</Heading>
        <p>Error fetching skill: {error}</p>
      </Container>
    );
  }

  return (
    <Container size="2" m="3">
      <Flex direction="column" gap="3">
        <Heading as="h1" size="5">
          Skill Profile : {skill.old_name} 
        </Heading>
        
        <Table.Root variant='surface' size="3">
          <Table.Row>
            <Table.Cell><Strong>Game Name</Strong></Table.Cell>
            <Table.Cell>{skill.old_name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Strong>Updated Name</Strong></Table.Cell>
            <Table.Cell>{skill.new_name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Strong>Category</Strong></Table.Cell>
            <Table.Cell>{skill.category_type}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Strong>Family Type</Strong></Table.Cell>
            <Table.Cell>{skill.family_type}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Strong>Description</Strong></Table.Cell>
            <Table.Cell>{skill.description}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Strong>MP Cost</Strong></Table.Cell>
            <Table.Cell>{skill.mp_cost}</Table.Cell>
          </Table.Row>

          {skill.upgrade_from && (
            <Table.Row>
              <Table.Cell><Strong>Upgrades From</Strong></Table.Cell>
              <Table.Cell>
                <RadixLink asChild weight={"bold"}>
                  <Link to={`/dqm1/skills/${skill.upgrade_from.id}`}>
                    {skill.upgrade_from.old_name}
                  </Link>
                </RadixLink>
              </Table.Cell>
            </Table.Row>
          )}
          {skill.upgrade_to && (
            <Table.Row>
              <Table.Cell><Strong>Upgrades To</Strong></Table.Cell>
              <Table.Cell>
                <RadixLink asChild weight={"bold"}>
                  <Link to={`/dqm1/skills/${skill.upgrade_to.id}`}>
                    {skill.upgrade_to.old_name}
                  </Link>
                </RadixLink>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Root>

        <Heading as="h2" size="3">Required Stats to Learn Skill</Heading>

        <Table.Root variant='surface' size="2">
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
      </Flex>
    </Container>
  );
}

export default SkillProfilePage
