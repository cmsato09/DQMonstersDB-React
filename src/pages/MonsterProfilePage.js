import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { fetchBreedingInfo, fetchMonsterDetail } from "../api/monsterInfoAPI"
import apiClient from "../api/apiClient";
import { Card, Container, Flex, Heading, Strong, Table, Text } from "@radix-ui/themes"

function MonsterProfilePage() {
  const params = useParams();
  const [monster, setMonster] = useState();
  const [breedingInfo, setBreedingInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMonsterDetail = async (monster_id) => {
      try {
        const monsterData = await fetchMonsterDetail(monster_id);
        setMonster(monsterData);
        const breedingData = await fetchBreedingInfo(monster_id);
        setBreedingInfo(breedingData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getMonsterDetail(params.monsterId);
  }, [params.monsterId]);

  if (loading) return <p>Loading monsters...</p>;
  if (error) return <p>Error fetching monsters: {error}</p>;
  const imageURL = `${apiClient.defaults.baseURL}static/images/dqm1monsters/${monster.old_name}.png`

  return (
    <Container size="2" m="3">
      <Flex direction="column" gap="2">
        <Heading as="h1">{monster.old_name} Profile</Heading>
        <Flex gap="2">
          <Card>
            <img 
              src={imageURL} 
              alt={monster.old_name}
              styling={{ 
                borderRadius: '10px',
                maxWidth: '100%',
              }}
            />
          </Card>
          <Card>
            <Flex direction="column" justify="between" height="100%">
              <Text>Game Name: {monster.old_name}</Text>
              <Text>Updated Name: {monster.new_name}</Text>
              <Text>{monster.family.family_eng} Family</Text>
              <Text>Description: {monster.description}</Text>
            </Flex>
          </Card>
        </Flex>
        <Card>
          <Heading as="h2" size="4">Skills</Heading>
          <Flex direction="column">
            <Table.Root size="3">
              {monster.skills.map(skill => (
                <Table.Row>
                  <Table.Cell>
                    <Link to={`/dqm1/skills/${skill.id}`}>{skill.old_name} </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Text>{skill.description}</Text>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Root>
          </Flex>
        </Card>

        <Card>
          <Heading as="h2" size="4">Breeding Combinations</Heading>
          <Table.Root size="3">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>PEDIGREE</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>PARTNER</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>OFFSPRING</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {breedingInfo.map(combo => (
                <Table.Row>
                  <Table.Cell>
                    {combo.pedigree ? (
                      combo.pedigree_id !== monster.id ? (
                        <Link to={`/dqm1/monsterlist/${combo.pedigree_id}`}>
                          {combo.pedigree.old_name}
                        </Link>
                      ) : (
                        combo.pedigree.old_name
                      )
                    ) : combo.pedigree_family ? (
                        combo.pedigree_family.family_eng
                    ) : (
                      'No Data Available'
                    )}
                  </Table.Cell>
                  
                  <Table.Cell>
                    {combo.parent2 ? (
                      combo.parent2_id !== monster.id ? (
                        <Link to={`/dqm1/monsterlist/${combo.parent2_id}`}>
                          {combo.parent2.old_name}
                        </Link>
                      ) : (
                      combo.parent2.old_name
                      )
                    ) : combo.family2 ? (
                        combo.family2.family_eng
                    ) : (
                      'No Data Available'
                    )}
                  </Table.Cell>
                    
                  <Table.Cell>
                    {combo.child_id !== monster.id ? (
                      <Link to={`/dqm1/monsterlist/${combo.child_id}`}>
                        {combo.child.old_name}
                      </Link>
                    ) : (
                      combo.child.old_name
                    )}
                  </Table.Cell>

                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Card>
      </Flex>
    </Container>
  );
}

export default MonsterProfilePage
