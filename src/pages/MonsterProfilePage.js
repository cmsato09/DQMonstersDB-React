import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { fetchBreedingInfo, fetchMonsterDetail } from "../api/monsterInfoAPI"
import apiClient from "../api/apiClient";
import { Card, Flex, Grid, Table, Text } from "@radix-ui/themes"

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
    <div>
      <Text>Monster Profile</Text>
      <Flex>
        <Card>
          <img src={imageURL} alt={monster.old_name}></img>
        </Card>
        <Card>
          <Grid>
            <Text>Game Name: {monster.old_name}</Text>
            <Text>Updated Name: {monster.new_name}</Text>
            <Text>{monster.family.family_eng} Family</Text>
            <Text>Description: {monster.description}</Text>
          </Grid>
        </Card>
      </Flex>
      <Card>
        <Text>Skills</Text>
        <Flex>
          {monster.skills.map(skill => (
            <Text>{skill.old_name} -- {skill.description}</Text>
          ))}
        </Flex>
      </Card>

      <Card>
        <Text>Breeding Combinations</Text>
        <Table.Root>
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
                  {combo.child.old_name}
                </Table.Cell>

              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Card>
      
    </div>
  );
}

export default MonsterProfilePage
