import { Box, Flex, Text, Heading, VStack, Input, Button, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="nav" p={4} bg="gray.100" justifyContent="space-between" alignItems="center">
        <Heading size="lg">My Portfolio</Heading>
        <Box>
          <Link href="#about" mx={2}>About</Link>
          <Link href="#portfolio" mx={2}>Portfolio</Link>
          <Link href="#contact" mx={2}>Contact</Link>
        </Box>
      </Flex>
      <Box id="about" p={4}>
        <Heading size="md" mb={2}>About Me</Heading>
        <Text fontSize="lg">I am a passionate web developer with a knack for creating visually appealing and functional websites.</Text>
      </Box>
      <Box id="portfolio" p={4}>
        <Heading size="md" mb={2}>Portfolio</Heading>
        <VStack spacing={4}>
          <Text fontSize="lg">Project 1: E-commerce Site</Text>
          <Text fontSize="lg">Project 2: Social Media App</Text>
          <Text fontSize="lg">Project 3: Personal Blog</Text>
        </VStack>
      </Box>
      <Box id="contact" p={4}>
        <Heading size="md" mb={2}>Contact Me</Heading>
        <VStack spacing={4}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Button colorScheme="blue">Send</Button>
        </VStack>
        <Flex mt={4} justifyContent="center">
          <Link href="https://github.com" isExternal mx={2}><FaGithub size="24px" /></Link>
          <Link href="https://linkedin.com" isExternal mx={2}><FaLinkedin size="24px" /></Link>
          <Link href="mailto:example@example.com" mx={2}><FaEnvelope size="24px" /></Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;