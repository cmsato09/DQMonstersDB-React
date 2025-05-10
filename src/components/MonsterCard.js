import { Box, Card, Text } from "@radix-ui/themes"
import { Link } from "react-router-dom";
import apiClient from "../api/apiClient";

function MonsterCard({monsterID, monsterOldName, monsterFamily}) {
  const imageURL = `${apiClient.defaults.baseURL}static/images/dqm1monsters/${monsterOldName}.png`
  
  return (
    <Box className="w-full h-full">
      <Card asChild className="group hover:shadow-md hover:shadow-black/20 transition-shadow duration-300 hover:outline hover:outline-2 hover:outline-blue-500">
        <Link key={monsterID} to={`${monsterID}`}>
          <img 
            src={imageURL} 
            alt={monsterOldName} 
            style={{ 
              borderRadius: '10px',
              height: 'auto',
              width: '100%'
            }}
          />
          <Text as="div" weight={"bold"} color="blue" className="group-hover:underline text-sm sm:text-base">
            {monsterOldName}
          </Text>
          <Text as="div" color="blue" className="group-hover:underline text-xs sm:text-sm">
            {monsterFamily}
          </Text>
        </Link>
      </Card>
    </Box>
  )
}

export default MonsterCard
