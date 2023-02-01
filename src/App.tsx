import './App.css'
import Nav from './Comp/Nav'
import { ChakraProvider } from '@chakra-ui/react'
import {Box,Button,ButtonGroup,Container,Flex,HStack,IconButton,useBreakpointValue,} from '@chakra-ui/react'
import {  Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Grid, GridItem } from '@chakra-ui/react'





import { Link } from '@chakra-ui/react'
export const App = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <><Box as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg-surface" boxShadow="m">
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">

            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {['Home', 'About', 'Contact'].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
                <HStack spacing="6">
                  <Button variant="ghost">Sign in</Button>
                  <Button variant="primary">Sign up</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"

                aria-label="Open Menu" />
            )}
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            </Grid>

          </HStack>
        </Container>
      </Box>
    </Box><Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
        <Stack spacing={{ base: '4', md: '5' }}>
          <Stack justify="space-between" direction="row" align="center">

            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />} />
              <IconButton as="a" href="https://github.com/Samah1899" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
              <IconButton
                as="a"
                href="https://twitter.com/"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" />} />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
          </Text>
        </Stack>
      </Container></>
  )
}

export default App
