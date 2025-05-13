import { useState } from "react";
import { Box, Button, Container, Flex, Heading, Text, TextArea, TextField } from "@radix-ui/themes";

function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "21a2d630-6c9d-45f4-a220-831fbd427771");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <Container size="3" m="6">
      <Flex direction="column" gap="6">
        <Box>
          <Flex direction="column" gap="4">
            <Heading as="h1" mb={"1"}>Contact</Heading>
            <Text>Thank you for visiting the website. If you have any feedback or questions, please let me know! I'll try to answer back within a day. Another way to raise problems is to go to the GitHub repository and write a new issue.</Text>
            <div>
              <form onSubmit={onSubmit} classname="flex-col">
                <Flex direction="column" gap="1">
                  <Box>
                    <Text as="label" size="2" mb="2" weight="bold">
                      Name:
                    </Text>
                    <TextField.Root 
                      name="name"
                      type="text"
                      placeholder="Your name" 
                      required
                    />
                  </Box>

                  <Box>
                    <Text as="label" size="2" mb="2" weight="bold">
                      Email:
                    </Text>
                    <TextField.Root
                      name="email" 
                      type="email"
                      placeholder="username@email.com" 
                      required
                    />
                  </Box>
                  <Box>
                    <Text as="label" size="2" mb="2" weight="bold">
                      Message:
                    </Text>
                    <TextArea
                      name="message"
                      placeholder="Write your comment, feedback, or question"
                      size="3"
                      required
                    />
                  </Box>
                  <Button 
                    type="submit"
                    color="indigo"
                  >
                    Submit Comment
                  </Button>
                </Flex>
              </form>
              <Text>{result}</Text>
            </div>
          </Flex>
        </Box>
      </Flex>
    </Container>
  )
}

export default ContactPage;