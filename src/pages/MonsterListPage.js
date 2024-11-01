import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { fetchMonsterList } from "../api/monsterInfoAPI"

function MonsterListPage() {
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const renderedMonsterList = (monsters) => {
    return (
      <ul>
        {monsters.map(monster => (
          <div>
            <Link key={monster.id} to={`${monster.id}`}>
              {monster.old_name}
            </Link>
            {monster.family.family_eng}
          </div>
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
