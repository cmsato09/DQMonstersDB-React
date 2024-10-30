import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchSkillDetail } from "../api/monsterSkillAPI.js"

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
    <div>
      <h1>Skill Profile</h1>
      <h2>{skill.old_name}</h2>
      <h2>{skill.new_name}</h2>
    </div>
  );
}

export default SkillProfilePage
