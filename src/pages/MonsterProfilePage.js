import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchMonsterDetail } from "../api/monsterInfoAPI"
import apiClient from "../api/apiClient";
import { Card, Flex, Grid, Text } from "@radix-ui/themes"

function MonsterProfilePage() {
  const params = useParams();
  const [monster, setMonster] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMonsterDetail = async (monster_id) => {
      try {
        const monsterData = await fetchMonsterDetail(monster_id);
        setMonster(monsterData);
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

      
    </div>
  );
}

export default MonsterProfilePage
