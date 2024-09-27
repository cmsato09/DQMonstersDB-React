import React, { useEffect, useState } from "react"
import { fetchMonsters } from "../api/monsterListAPI"

function MonsterListPage() {
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMonsters = async () => {
      try {
        const monsterData = await fetchMonsters();
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

  const renderedMonsterList = (monsters) => {
    return (
      <ul>
        {monsters.map(monster => (
          <li key={monster.id}>
            {monster.old_name} -- {monster.family.family_eng}
          </li>
        ))}
      </ul>
    )
  };

  return (
    <div>
      <h1>Monster List</h1>
      {renderedMonsterList(monsters)}
    </div>
  )
}

export default MonsterListPage;