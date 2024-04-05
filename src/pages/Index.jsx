import React from "react";
import { Box, Heading, Text, Button, Flex, Image, Stack, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaSlack } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navbar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.50">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Netlify
          </Heading>
        </Flex>

        <Stack direction={{ base: "column", md: "row" }} display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" mt={{ base: 4, md: 0 }}>
          <Link href="#">Docs</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Support</Link>
          <Link href="#">Login</Link>
          <Button variant="outline" _hover={{ bg: "teal.700", borderColor: "teal.700" }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      {/* Hero */}
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Deploy the web, faster
        </Heading>
        <Text color={"gray.500"} mb={6}>
          All-in-one platform for modern web projects
        </Text>
        <Stack spacing={4} direction="row" align="center" justify="center">
          <Button colorScheme="teal" bg="teal.400" _hover={{ bg: "teal.500" }} size="lg">
            Get Started For Free
          </Button>
          <Button colorScheme="teal" bg="white" color="teal.400" _hover={{ bg: "gray.100" }} size="lg">
            Request Demo
          </Button>
        </Stack>
      </Box>

      {/* Features */}
      <Box p={4}>
        <Stack spacing={4} as={Box} textAlign={"center"} mb={8}>
          <Heading as="h2" size="xl">
            All-in-one platform
          </Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Everything you need to build fast, modern websites.
          </Text>
        </Stack>

        <Flex flexWrap="wrap" justifyContent="center">
          <Box p={6} maxW={"330px"} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBob3N0aW5nJTIwaWNvbnxlbnwwfHx8fDE3MTIzNDA3ODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Hosting" mb={4} mx="auto" />
            <Heading as="h3" size="md" mb={2}>
              Web Hosting
            </Heading>
            <Text fontSize={"sm"}>Deploy your site in seconds with our global CDN.</Text>
          </Box>
          <Box p={6} maxW={"330px"} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1707759642885-42994e023046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb250aW51b3VzJTIwZGVwbG95bWVudCUyMGljb258ZW58MHx8fHwxNzEyMzQwNzg1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Continuous Deployment" mb={4} mx="auto" />
            <Heading as="h3" size="md" mb={2}>
              Continuous Deployment
            </Heading>
            <Text fontSize={"sm"}>Every git push automatically goes live.</Text>
          </Box>
          <Box p={6} maxW={"330px"} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1707759642885-42994e023046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZXJ2ZXJsZXNzJTIwZnVuY3Rpb25zJTIwaWNvbnxlbnwwfHx8fDE3MTIzNDA3ODZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Serverless Functions" mb={4} mx="auto" />
            <Heading as="h3" size="md" mb={2}>
              Serverless Functions
            </Heading>
            <Text fontSize={"sm"}>Deploy server-side code without managing infrastructure.</Text>
          </Box>
        </Flex>
      </Box>

      {/* CTA */}
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Ready to get started?
        </Heading>
        <Text color={"gray.500"} mb={6}>
          It only takes a few minutes to deploy your first site.
        </Text>
        <Button colorScheme="teal" bg="teal.400" _hover={{ bg: "teal.500" }} size="lg">
          Start Deploying Now
        </Button>
      </Box>

      {/* Footer */}
      <Box bg="gray.50" color="gray.700" py={6} px={{ base: 4, md: 8 }} mt={8}>
        <Flex align="center" justify="space-between" direction={{ base: "column", md: "row" }}>
          <Flex align="center">
            <Heading as="h2" size="lg" letterSpacing={"-.1rem"}>
              Netlify
            </Heading>
          </Flex>

          <Stack direction={{ base: "column", md: "row" }} spacing={6} mt={{ base: 4, md: 0 }}>
            <Link href="#">About</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Careers</Link>
          </Stack>

          <Stack direction="row" spacing={6} mt={{ base: 4, md: 0 }}>
            <Icon as={FaGithub} w={6} h={6} />
            <Icon as={FaTwitter} w={6} h={6} />
            <Icon as={FaSlack} w={6} h={6} />
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
