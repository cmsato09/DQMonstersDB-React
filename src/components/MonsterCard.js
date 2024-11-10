import { Box, Card, Text } from "@radix-ui/themes"
import { Link } from "react-router-dom";
import apiClient from "../api/apiClient";

function MonsterCard({monsterID, monsterOldName, monsterFamily}) {
  const imageURL = `${apiClient.defaults.baseURL}static/images/dqm1monsters/${monsterOldName}.png`
  
  return (
    <Box width="125px" margin="10px">
      <Card asChild>
        <Link key={monsterID} to={`${monsterID}`}>
          <img src={imageURL} alt={monsterOldName} width="100%" height="auto"></img>
          <Text as="div">
            {monsterOldName}
          </Text>
          <Text as="div">
            {monsterFamily}
          </Text>
        </Link>
      </Card>
    </Box>
  )
}

export default MonsterCard
