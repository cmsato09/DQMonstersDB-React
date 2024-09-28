import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchMonster } from "../api/monsterListAPI"

function MonsterProfilePage() {
  const params = useParams();
  const [monster, setMonster] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMonsterDetail = async (monster_id) => {
      try {
        const monsterData = await fetchMonster(monster_id);
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

  return (
    <div>
      <h1>Monster Profile</h1>
      <h2>{monster.old_name}</h2>
    </div>
  );
}

export default MonsterProfilePage
