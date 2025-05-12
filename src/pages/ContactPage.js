import { Box, Container, Flex, Heading } from "@radix-ui/themes";

function ContactPage() {
  return (
    <Container size="3" m="6">
      <Flex direction="column" gap="6">
        <Box>
          <Heading as="h1" mb={"3"}>Contact</Heading>
        </Box>
      </Flex>
    </Container>
  )
}

export default ContactPage;