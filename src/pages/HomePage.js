import { Container, Flex, Heading, Link as RadixLink, Section, Strong, Text } from "@radix-ui/themes"

function HomePage() {
  return (
    <Container size="3" py="3">
      <Flex justify="center" align="center">
        <img 
          src="https://store-jp.nintendo.com/dw/image/v2/BFGJ_PRD/on/demandware.static/-/Sites-all-master-catalog/ja_JP/dwfe080eff/products/D70010000019662/heroBanner/054e861d9bc2a6077e838df18a21446d87ab4d2a815fb864854cafe69be593db.jpg?sw=1368&strip=false" 
          alt="DQM1 banner from Nintendo Switch Japanese E-shop"
          style={{ borderRadius: '10px '}}
        />
      </Flex>
      <Section p={{initial: '3'}}>
        <Flex direction="column" gap="2">
          <Heading>Dragon Quest Monsters Database</Heading>
          <Text>Dragon Quest Monsters is a spin-off series based on the famous JRPG series, Dragon Quest. </Text>

          <Text>This database informs the user of game details (monsters, breeding combinations, skills, items, etc.) for Dragon Quest Monsters - Terry's Wonderland (also known as Dragon Warrior Monsters in the US) <Strong>for the original GameBoy Color game</Strong> (not the 3DS version). It is also available on the Japanese Nintendo E-shop as <RadixLink href="https://store-jp.nintendo.com/item/software/D70010000019662">Dragon Quest Monsters Terry's Wonderland RETRO</RadixLink> for the Nintendo Switch</Text>

          <Text>All game images property of Square Enix</Text>
        </Flex>
      </Section>
    </Container>
  )
};

export default HomePage;
