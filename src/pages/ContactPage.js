import { useState } from "react";
import { Box, Button, Container, Flex, Heading, Text, TextArea, TextField } from "@radix-ui/themes";

function ContactPage() {
  const [formState, setFormState] = useState({
    loading: false,
    message: "",
    success: null
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormState({ 
      loading: true, 
      message: "Sending....", 
      success: null 
    });
    const formData = new FormData(event.target);

    formData.append("access_key", "21a2d630-6c9d-45f4-a220-831fbd427771");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState({
          loading: false,
          message: "Message sent successfully!",
          success: true
        });
        event.target.reset();
      } else {
        setFormState({
          loading: false,
          message: data.message || "Failed to send message",
          success: false
        });
      }
    } catch (error) {
        setFormState({
          loading: false,
          message: "An error occurred. Please try again.",
          success: false
      });
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
              <form onSubmit={onSubmit} className="flex-col">
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
                    disabled={formState.loading}
                  >
                    {formState.loading ? "Sending..." : "Submit Comment"}
                  </Button>
                </Flex>
              </form>
              
              {formState.message && (
                <Text color={formState.success ? "green" : "red"}>
                  {formState.message}
                </Text>
              )}
            </div>
          </Flex>
        </Box>
      </Flex>
    </Container>
  )
}

export default ContactPage;