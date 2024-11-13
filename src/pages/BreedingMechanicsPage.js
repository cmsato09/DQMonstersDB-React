import { Flex, Table, Text } from "@radix-ui/themes"

function BreedingMechanicsPage() {
  return (
    <Flex direction="column">
      <h1>Breeding Mechanics</h1>
      <Text>
        To get better monsters, you can mate them at the Shrine of Starry Night at the base of the Great Tree. This area is unlocked after you clear Class F Arena battle.
      </Text>
      
      <div>
        <h2>Conditions</h2>
        <ul>
          <li>
            - Two parent monsters where one is male and the other is female
          </li>
          <li>
            - Both parent monsters must at least be level 10
          </li>
          <li>
            - Have at least 3 monsters in total
          </li>
        </ul>
        <Text>
          The two parent monsters will leave and never return to your party but will leave behind an egg. The resulting offspring primarily depends upon family lineage or pedigree (the first monster you select), so you must be careful which monster you set as pedigree or partner (order matters). See breeding combination of each monster in the monster detail page.
        </Text>
      </div>
      
      <div>
        <h2>Plus Value</h2>
        <Text>
          After you mate two monsters, you will see the offspring with something similar to '+1' by its name, which is referred to as the plus value or plus level. The plus value affects status and the level cap of your monster. It is determined by the total level of the parent monsters noted in the following table and if the parents themselves have a + value.
        </Text>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Total Level</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Plus Value</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>20-39</Table.Cell>
              <Table.Cell>+1</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>40-59</Table.Cell>
              <Table.Cell>+2</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>60-75</Table.Cell>
              <Table.Cell>+3</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>76-99</Table.Cell>
              <Table.Cell>+4</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>100 and above</Table.Cell>
              <Table.Cell>+5</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
        <Text>
          When two monsters that have a plus value are mated, the higher + value is added on to the total. e.g. if you have two monsters with +10 and +8 with a total level of over 100, the resulting offspring is +15. (10 + 5)
        </Text>
      </div>

      <div>
        <h2>Level Cap Limit</h2>
        <Text>
          Monsters that you recruit in the wild has a level cap limit. By breeding, you can increase the level cap limit of the offspring. Level cap limit is calculated by the following:
        </Text>
        <Text>(Plus value) x 2 + (monsters base level cap) </Text>
        <Text>
          e.g. Unicorn’s base level cap is 50 so a Unicorn +6 has a level cap of 62 (6 x 2 + 50).
        </Text>
      </div>

      <div>
        <h2>Offspring stats parameter calculation</h2>
        <Text>
          Resulting offspring monster stat (Attack, Defense, Agility, Intelligence) is determined by the following equation.
        </Text>
        <Text>
          ( pedigree parent monster stat + partner parent monster stat ) ÷ 4 + (offspring plus value)
        </Text>
        <Text>
          e.g. pedigree parent attack = 300 and partner parent attack = 500 with the offspring +1 would have a attack value of 201 [(300+500) ÷ 4 + 1].
        </Text>
      </div>

      <div>
        <h2>Skill Inheritance</h2>
        <Text>
          A monster recruited in the wild usually only have the 3 skills listed in the monster detail page. However, a offspring can learn up to 8 different skills. The offspring monster can learn the 3 skills naturally learned by each parent monster, the 3 skills the offspring monster naturally learns, and any other skills the parent monsters do not naturally learn and was inherited from their parents at the time of mating. Any monster learning over 8 skills will have to 'forget' a skill to make room for any new skills."
        </Text>
      </div>
    </Flex>
  )
};

export default BreedingMechanicsPage
