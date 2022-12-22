import React from 'react'

import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

const Test = () => {
  return (
    <>
    <Box m="100px auto" w="90%">
        <VStack
          w={"100%"}
          position="relative"
          textAlign="center"
          display={"block"}
          justifyContent={"center"}
          marginTop={10}
        >
          <SimpleGrid
            columns={["1", "2"]}
            direction={["column", "row"]}
            spacing={10}
            gap={10}
            textAlign="center"
          >
            <VStack
              w={{ base: "100%", lg: "82%" }}
              textAlign="center"
              display={"block"}
              justifyContent={"center"}
              marginTop={10}
            >
              <Heading
                fontWeight={600}
                fontSize="1.875rem"
                lineHeight={1.3}
                marginBottom={12}
                textAlign={{ base: "none", lg: "left" }}
                display={"block"}
                color="#202c45"
                fontFamily={
                  "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                }
              >
                India's #1 Online Test Series Platform
              </Heading>

              <VStack gap={8} w="100%" align={{ base: "center", lg: "flex-start" }}>
                <Box
                  display={"block"}
                  lineHeight={1.2}
                  fontWeight={500}
                  textAlign={{ base: "none", lg: "left" }}
                  fontSize={{ base: "1rem", lg: "1.125rem" }}
                  color="#202c45"
                  fontFamily={
                    "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                 Boost your exam preparation with Test Series for Banking, SSC, RRB & All other Govt. Exams
                </Box>
                <Input placeholder='Search for your exam' />
              </VStack>

              
            </VStack>

            <Box>
              <Image
                h="80%"
                w="100%"
                src="https://testbook.com/assets/img/index/home-banner__illust.svg"
              />
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box h="130%" m="100px auto" w="80%">
      <VStack
        w={"100%"}
        textAlign="center"
        display={"block"}
        justifyContent={"center"}
        marginTop={10}
      >
        <VStack marginBottom={10}>
          <Heading
            fontWeight={600}
            fontSize="1.875rem"
            lineHeight={1.3}
            textAlign="center"
            display={"block"}
            color="#202c45"
            fontFamily={
              "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            }
          >
            What You Get
          </Heading>
        </VStack>

        <SimpleGrid  spacing="40px" w="100%" gap={10} columns={["1", "4"]} direction={["column", "row"]} >
          
          <Box w="90%" align='center' boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' p={5} borderRadius={5}>
          <Image src='https://cdn.testbook.com/resources/productionimages/SSC_All_1594144442.png' boxSize='70px'/>
            <Heading
              textAlign={"center"}
              mb={"1rem"}
              mt={"1rem"}
              fontSize="1.125rem"
              fontWeight={600}
              lineHeight={1.3}
              display="block"
              color="#202c45"
              fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              SSC Reasoning Previous Year Questions Mock 
            </Heading>
            <UnorderedList w='100%' align='flex-start'>
              <ListItem>124 SSC CGL</ListItem>
              <ListItem>198 SSC CHSL</ListItem>
              <ListItem>89 SSC GD</ListItem>
            </UnorderedList>
            <Button
                  display={"block"}
                  textAlign="left"
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  View Test Series
            </Button>
          </Box>

          <Box w="90%" align='center' boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' p={5} borderRadius={5}>
            <Image src='https://cdn.testbook.com/resources/productionimages/SSC_All_1594144442.png' boxSize='70px'/>
            <Heading
              textAlign={"center"}
              mb={"1rem"}
              mt={"1rem"}
              fontSize="1.125rem"
              fontWeight={600}
              lineHeight={1.3}
              display="block"
              color="#202c45"
              fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              SSC GD Constable 2022 Mock Test (New Pattern)
            </Heading>
            <UnorderedList w='100%' align='flex-start'>
              <ListItem>99 PYCT</ListItem>
              <ListItem>276 Chapter Test</ListItem>
              <ListItem>94 Sectional Test</ListItem>
            </UnorderedList>
            <Button
                  display={"block"}
                  textAlign="left"
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  View Test Series
            </Button>
          </Box>

          <Box w="90%" align='center' boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' p={5} borderRadius={5}>
          <Image src='https://cdn.testbook.com/resources/productionimages/SSC_All_1594144442.png' boxSize='70px'/>
           
            <Heading
              textAlign={"center"}
              mb={"1rem"}
              mt={"1rem"}
              fontSize="1.125rem"
              fontWeight={600}
              lineHeight={1.3}
              display="block"
              color="#202c45"
              fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              SSC GK Previous Year Questions Mock Test
            </Heading>
            <UnorderedList w='100%' align='flex-start'>
              <ListItem>124 SSC CGL</ListItem>
              <ListItem>198 SSC CHSL</ListItem>
              <ListItem>89 SSC GD</ListItem>
            </UnorderedList>
            <Button
                  display={"block"}
                  textAlign="left"
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  View Test Series
            </Button>
          </Box>

          <Box w="90%" align='center' boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' p={5} borderRadius={5}>
          <Image src='https://cdn.testbook.com/resources/productionimages/SSC_All_1594144442.png' boxSize='70px'/>
            
            <Heading
              textAlign={"center"}
              mb={"1rem"}
              mt={"1rem"}
              fontSize="1.125rem"
              fontWeight={600}
              lineHeight={1.3}
              display="block"
              color="#202c45"
              fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              FCI JE 2022 Mock Test CE/ME/EE (Phase I & II)
            </Heading>
            <UnorderedList w='100%' align='flex-start'>
              <ListItem>75 Chapter Test</ListItem>
              <ListItem>20 Subject Test</ListItem>
              <ListItem>30 Full Test</ListItem>
            </UnorderedList>
            <Button
                  display={"block"}
                  textAlign="left"
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  View Test Series
            </Button>
          </Box>

          <Box w="90%" align='center' boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' p={5} borderRadius={5}>
          <Image src='https://cdn.testbook.com/resources/productionimages/SSC_All_1594144442.png' boxSize='70px'/>
            <Heading
              textAlign={"center"}
              mb={"1rem"}
              mt={"1rem"}
              fontSize="1.125rem"
              fontWeight={600}
              lineHeight={1.3}
              display="block"
              color="#202c45"
              fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              CUET Mock Test 2022 (General & Domain) 
            </Heading>
            <UnorderedList w='100%' align='flex-start'>
              <ListItem>5 Full Session Test</ListItem>
              <ListItem>106 General Test</ListItem>
              <ListItem>189 Language Subjec</ListItem>
            </UnorderedList>
            <Button
                  display={"block"}
                  textAlign="left"
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  View Test Series
            </Button>
          </Box>

          <Box w="90%" align='center' boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' p={5} borderRadius={5}>
          <Image src='https://cdn.testbook.com/resources/productionimages/SSC_All_1594144442.png' boxSize='70px'/>
            <Heading
              textAlign={"center"}
              mb={"1rem"}
              mt={"1rem"}
              fontSize="1.125rem"
              fontWeight={600}
              lineHeight={1.3}
              display="block"
              color="#202c45"
              fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
             SSC CHSL 2022-23 (Tier I & Tier II) Mock Test
            </Heading>
            <UnorderedList w='100%' align='flex-start'>
              <ListItem>122 Chapter Test</ListItem>
              <ListItem>50 Sectional Test</ListItem>
              <ListItem>50 Full Test</ListItem>
            </UnorderedList>
            <Button
                  display={"block"}
                  textAlign="left"
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  View Test Series
            </Button>
          </Box>

          <Box w="90%" align='center' boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' p={5} borderRadius={5}>
          <Image src='https://cdn.testbook.com/resources/productionimages/SSC_All_1594144442.png' boxSize='70px'/>
           
            <Heading
              textAlign={"center"}
              mb={"1rem"}
              mt={"1rem"}
              fontSize="1.125rem"
              fontWeight={600}
              lineHeight={1.3}
              display="block"
              color="#202c45"
              fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              FCI Stenographer Mock Test 2022 (Phase I & II)
            </Heading>
            <UnorderedList w='100%' align='flex-start'>
              <ListItem>75 Chapter Test</ListItem>
              <ListItem>20 Subject Test</ListItem>
              <ListItem>30 Full Test</ListItem>
            </UnorderedList>
            <Button
                  display={"block"}
                  textAlign="left"
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  View Test Series
            </Button>
          </Box>

          <Box w="90%" align='center' boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' p={5} borderRadius={5}>
          <Image src='https://cdn.testbook.com/resources/productionimages/SSC_All_1594144442.png' boxSize='70px'/>
            
            <Heading
              textAlign={"center"}
              mb={"1rem"}
              mt={"1rem"}
              fontSize="1.125rem"
              fontWeight={600}
              lineHeight={1.3}
              display="block"
              color="#202c45"
              fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              FCI JE 2022 Mock Test CE/ME/EE (Phase I & II)
            </Heading>
            <UnorderedList w='100%' align='flex-start'>
              <ListItem>75 Chapter Test</ListItem>
              <ListItem>20 Subject test</ListItem>
              <ListItem>30 Full Test</ListItem>
            </UnorderedList>
            <Button
                  display={"block"}
                  textAlign="left"
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  View Test Series
            </Button>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>

    <Box h="130%" m="100px auto" w="80%">
      <VStack
        w={"100%"}
        textAlign="center"
        display={"block"}
        justifyContent={"center"}
        marginTop={10}
      >
        <VStack marginBottom={10}>
          <Heading
            fontWeight={600}
            fontSize="1.875rem"
            lineHeight={1.3}
            textAlign="center"
            display={"block"}
            color="#202c45"
            fontFamily={
              "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            }
          >
            Live Test Series & Quizzes
          </Heading>
        </VStack>

        <SimpleGrid  spacing="40px" w="100%" gap={10} columns={["1", "3"]} direction={["column", "row"]} >
          
          <Box w="90%" align='center' boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' p={5} borderRadius={5}>
          <Image src='https://cdn.testbook.com/resources/productionimages/Airforce_All_1594152047.png' boxSize='70px'/>
            <Heading
              textAlign={"center"}
              mb={"1rem"}
              mt={"1rem"}
              fontSize="1.125rem"
              fontWeight={600}
              lineHeight={1.3}
              display="block"
              color="#202c45"
              fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              Reasoning for Defence Exams (Logic Builder): Live Test
            </Heading>
            <Text fontSize='sm'>20 Questions | 20 Minutes | 20 Marks</Text>
           
            <Button
                  display={"block"}
                  textAlign="left"
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  Register
            </Button>
          </Box>

          <Box w="90%" align='center' boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' p={5} borderRadius={5}>
            <Image src='https://cdn.testbook.com/resources/productionimages/KVS%20PRT_All_1657003604.png' boxSize='70px'/>
            <Heading
              textAlign={"center"}
              mb={"1rem"}
              mt={"1rem"}
              fontSize="1.125rem"
              fontWeight={600}
              lineHeight={1.3}
              display="block"
              color="#202c45"
              fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              KVS PRT/ TGT/ PGT (Common Topics): Mini Live Test 
            </Heading>
            <Text fontSize='sm'>20 Questions | 20 Minutes | 20 Marks</Text>
            
            <Button
                  display={"block"}
                  textAlign="left"
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  Register
            </Button>
          </Box>

          <Box w="90%" align='center' boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' p={5} borderRadius={5}>
          <Image src='https://cdn.testbook.com/resources/productionimages/GATE%20Mathematics_All_1661236426.png' boxSize='70px'/>
           
            <Heading
              textAlign={"center"}
              mb={"1rem"}
              mt={"1rem"}
              fontSize="1.125rem"
              fontWeight={600}
              lineHeight={1.3}
              display="block"
              color="#202c45"
              fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              National Mathematics Day (22nd Dec): Taxi No. 1729 Quiz
            </Heading>
            <Text fontSize='sm'>20 Questions | 20 Minutes | 20 Marks</Text>
            
            <Button
                  display={"block"}
                  textAlign="left"
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  Start Now
            </Button>
          </Box>

        </SimpleGrid>
      </VStack>
    </Box>


    
    <Box h="130%" m="100px auto" w="80%">
      <VStack
        w={"100%"}
        textAlign="center"
        display={"block"}
        justifyContent={"center"}
        marginTop={10}
      >
        <VStack marginBottom={20}>
          <Heading
            fontWeight={600}
            fontSize="1.875rem"
            lineHeight={1.3}
            textAlign="center"
            display={"block"}
            color="#202c45"
            fontFamily={
              "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            }
          >
            Why take Our Test Series?
          </Heading>
        </VStack>

        <SimpleGrid columns={[1, null, 3]} spacing="40px" w="100%" gap={10}>
          <Box w="90%" textAlign="center">
            <Image
              boxSize={"120px"}
              ml={20}
              display={"block"}
              textAlign="center"
              src="https://testbook.com/assets/img/test-series/exam-patterns.svg"
            />
            <Heading
              textAlign={"center"}
              mb={"1rem"}
              mt={"1rem"}
              fontSize="1.125rem"
              fontWeight={600}
              lineHeight={1.3}
              display="block"
              color="#202c45"
              fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              Latest Exam Patterns
            </Heading>
            <Text
              display={"block"}
              fontSize="14px"
              textAlign="center"
              lineHeight={1.7}
              fontWeight={400}
              color="#202c45"
              fontFamily={
                "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
              }
            >
              Prepare for the level expected in the upcoming exams.
            </Text>
            <Button
              colorScheme="#1a2e44"
              variant="outline"
              fontSize=".875rem"
              marginTop={2}
            >
              Learn More
            </Button>
          </Box>

          <Box w="90%" textAlign="center">
            <Image
              boxSize={"120px"}
              ml={20}
              display={"block"}
              textAlign="center"
              src="https://testbook.com/assets/img/test-series/save-test.svg"
            />
            <Heading
              textAlign={"center"}
              mb={"1rem"}
              mt={"1rem"}
              fontSize="1.125rem"
              fontWeight={600}
              lineHeight={1.3}
              display="block"
              color="#202c45"
              fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              Save Tests & Questions
            </Heading>
            <Text
              display={"block"}
              fontSize="14px"
              textAlign="center"
              lineHeight={1.7}
              fontWeight={400}
              color="#202c45"
              fontFamily={
                "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
              }
            >
              Save important Tests & Questions to revise or reattempt them later.
            </Text>
            <Button
              colorScheme="#1a2e44"
              variant="outline"
              fontSize=".875rem"
              marginTop={2}
            >
              Learn More
            </Button>
          </Box>

          <Box w="90%" textAlign="center">
            <Image
              boxSize={"120px"}
              ml={20}
              display={"block"}
              textAlign="center"
              src="https://testbook.com/assets/img/test-series/performance.svg"
            />
            <Heading
              textAlign={"center"}
              mb={"1rem"}
              mt={"1rem"}
              fontSize="1.125rem"
              fontWeight={600}
              lineHeight={1.3}
              display="block"
              color="#202c45"
              fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              In-depth Performance Analysis
            </Heading>
            <Text
              display={"block"}
              fontSize="14px"
              textAlign="center"
              lineHeight={1.7}
              fontWeight={400}
              color="#202c45"
              fontFamily={
                "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
              }
            >
              Get insights on your Strengths & Weaknesses, All India Rank & Performance Comparison with the Topper
            </Text>
            <Button
              colorScheme="#1a2e44"
              variant="outline"
              fontSize=".875rem"
              marginTop={2}
            >
              Learn More
            </Button>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>


      


    </>
  )
}

export default Test