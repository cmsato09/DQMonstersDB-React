import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";

function AboutPage() {
  return (
    <Container size="3" m="6">
      <Flex direction="column" gap="6">
        <Box>
          <Heading as="h1" mb={"3"}>About the Website</Heading>
            <Text as="p">
              I didn't like how information was displayed in other webpages about these games (Particularly the Japanese websites), so I made my own. Game information was compiled from several sources, online and print. I hope this website helps you on your journey in Dragon Quest Monsters. Thanks for visiting!
            </Text>
        </Box>
        <Box>
          <Heading as="h1" mb={"3"}>About the Game</Heading>
          <Text as="p">
            Dragon Quest Monsters is a spin-off series based on the famous JRPG series, Dragon Quest. Released in Japan in 1998 for the Gameboy Color by Enix, it was compared to the Pokemon series due to their similar gameplay of taming and training monsters to battle other monsters via random encounters. However, gameplay differs with its roguelike dungeon levels, the battling system, and the breeding system. This database informs the user of game details (monsters, skills, items, etc.) of Dragon Quest Monsters -- Terry's Wonderland (also known as Dragon Warrior Monsters in the US).
          </Text>
        </Box>
      </Flex>
    </Container>
  )
}

export default AboutPage;
