import { Strong, Text } from "@radix-ui/themes"

function HomePage() {
  return (
    <div>
      <h1>Dragon Quest Monsters Database</h1>
      <img src="https://store-jp.nintendo.com/dw/image/v2/BFGJ_PRD/on/demandware.static/-/Sites-all-master-catalog/ja_JP/dwfe080eff/products/D70010000019662/heroBanner/054e861d9bc2a6077e838df18a21446d87ab4d2a815fb864854cafe69be593db.jpg?sw=1368&strip=false" alt="DQM1 banner from Nintendo Switch Japanese E-shop"></img>
      <Text>Dragon Quest Monsters is a spin-off series based on the famous JRPG series, Dragon Quest.</Text>
      <Text>This database informs the user of game details (monsters, breeding combinations, skills, items, etc.) of Dragon Quest Monsters -- Terry's Wonderland (also known as Dragon Warrior Monsters in the US) <Strong>for the original GameBoy Color game</Strong> (not the new 3DS version).</Text>
      <Text>All game images property of Square Enix</Text>
    </div>
  )
};

export default HomePage;
