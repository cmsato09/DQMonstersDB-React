import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { fetchSkillsList } from "../api/monsterSkillAPI.js"

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
      <ul>
        {skills.map(skill => (
          <Link key={skill.id} to={`${skill.id}`}>
            {skill.old_name} -{skill.category_type}- {skill.description}
          </Link>
        ))}
      </ul>
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
