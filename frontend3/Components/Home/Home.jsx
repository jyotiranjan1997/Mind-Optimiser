import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { BiChevronRight } from "react-icons/bi";

const Home = () => {
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
                One Destination For Complete Exam Preparation
              </Heading>

              <VStack
                gap={8}
                w="100%"
                align={{ base: "center", lg: "flex-start" }}
              >
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
                  Learn{" "}
                  <Icon
                    as={BiChevronRight}
                    verticalAlign="middle"
                    boxSize={6}
                  />{" "}
                  Practice{" "}
                  <Icon
                    as={BiChevronRight}
                    verticalAlign="middle"
                    boxSize={6}
                  />{" "}
                  Improve{" "}
                  <Icon
                    as={BiChevronRight}
                    verticalAlign="middle"
                    boxSize={6}
                  />{" "}
                  Succeed
                </Box>
                <Button
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  Sign Up For Free
                </Button>
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

      <Box h="120%" m="100px auto" w="80%">
        <VStack
          w={"100%"}
          textAlign="center"
          display={"block"}
          justifyContent={"center"}
          marginTop={5}
        >
          <Heading
            fontWeight={600}
            fontSize="1.875rem"
            lineHeight={1.3}
            marginBottom={5}
            textAlign="center"
            display={"block"}
            color="#202c45"
            fontFamily={
              "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            }
          >
            Popular Exams
          </Heading>

          <Tabs variant="soft-rounded" colorScheme="green" mb={5}>
            <TabList ml={{ base: "none", lg: 250 }} mb={5}>
              <Tab>SSC</Tab>
              <Tab>Banking</Tab>
              <Tab>Teaching</Tab>
              <Tab>Civil Services</Tab>
              <Tab>Railways</Tab>
              <Tab>Engineering</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SimpleGrid
                  columns={["1", "3"]}
                  direction={["column", "row"]}
                  spacing={5}
                >
                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC GD Constable
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC CGL
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC CHSL
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC MTS
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC Head Constable
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC JHT
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC CPO
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC JE EE
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC JE CE
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC Selection Post
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC Stenographer
                      </MenuButton>
                    </Menu>
                  </Box>
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid
                  columns={["1", "3"]}
                  direction={["column", "row"]}
                  spacing={5}
                >
                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SBI PO
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        IBPS PO
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        MP Cooperative Manager
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        MP Cooperative Clerk
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SIDBI Assistant Manager
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SBI Clerk
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        RRB Officer Scale - I
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        IBPS Clerk
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SBI CBO
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        JAIIB Exam
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        CAIIB Exam
                      </MenuButton>
                    </Menu>
                  </Box>
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid
                  columns={["1", "3"]}
                  direction={["column", "row"]}
                  spacing={5}
                >
                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        CTET
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        KVS PGT
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        KVS PRT
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        KVS Librarian
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        KVS TGT
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        KVS Junior Secretariat
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        KVS Stenographer
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        KVS
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        Rajasthan Grade Teacher
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        DSSSB TGT
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        UP TGT
                      </MenuButton>
                    </Menu>
                  </Box>
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid
                  columns={["1", "3"]}
                  direction={["column", "row"]}
                  spacing={5}
                >
                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        AUPSC Civil Services
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        BPSC Exam
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        UPPCS
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        UPPSC RO ARO
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        APPSC Group 1
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        MPSC State Service
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        BPSC CDPO
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        MPPSC State Service
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        RPSC RAS
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        MPPSC Forest Service
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        UPSC EPFO
                      </MenuButton>
                    </Menu>
                  </Box>
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid
                  columns={["1", "3"]}
                  direction={["column", "row"]}
                  spacing={5}
                >
                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        RRB NTPC
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        RRB Group D
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        RRB ALP
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        RPF SI
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        RRB JE
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        RPF Constable
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        RRB SSE
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        RRB Ministerial Category
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        RRB Junior Stenographer
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        RRB Junior Translator
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        RRB JE EC
                      </MenuButton>
                    </Menu>
                  </Box>
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid
                  columns={["1", "3"]}
                  direction={["column", "row"]}
                  spacing={5}
                >
                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        FCI JE
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC JE EE
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC JE CE
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC JE ME
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        SSC Scientific Assistant
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        RSMSSB JE
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        TN TRB CE
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        TN TRB EC
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        TN TRB EE
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        TN TRB ME
                      </MenuButton>
                    </Menu>
                  </Box>

                  <Box>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<BiChevronRight />}
                        w="80%"
                      >
                        TN TRB CS
                      </MenuButton>
                    </Menu>
                  </Box>
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
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
              What You Get
            </Heading>
          </VStack>

          <SimpleGrid columns={[1, null, 3]} spacing="40px" w="100%" gap={10}>
            <Box w="90%" textAlign="center">
              <Image
                boxSize={"120px"}
                ml={20}
                display={"block"}
                textAlign="center"
                src="https://static.uacdn.net/web-cms/dailyliveclasses_0c0023950f_c187155ee3.svg?q=75&fm=webp&w=750"
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
                Daily live classes
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
                Chat with educators, ask questions, answer live polls, and get
                your doubts cleared - all while the class is going on
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
                src="https://static.uacdn.net/web-cms/syllabus_a9da21d824_b20b285483.svg?q=75&fm=webp&w=750"
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
                Practice and revise
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
                Learning isn't just limited to classes with our practice
                section, mock tests and lecture notes shared as PDFs for your
                revision
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
                src="https://static.uacdn.net/web-cms/learnanytimeanywhere_cb19d5de30_b92bc0c6a1.svg?q=75&fm=webp&w=750"
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
                Learn anytime, anywhere
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
                One subscription gets you access to all our live and recorded
                classes to watch from the comfort of any of your devices
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

      <Box m="100px auto" w="90%">
        <VStack
          w={"100%"}
          textAlign="center"
          display={"block"}
          justifyContent={"center"}
          marginTop={10}
        >
          <SimpleGrid
            columns={["1", "2"]}
            direction={["column", "row"]}
            spacing={20}
            gap={50}
          >
            <Box>
              <Image
                h="80%"
                w="100%"
                src="https://testbook.com/assets/img/index/explore-pass__illust.svg"
              />
            </Box>
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
                Enroll With Us
              </Heading>

              <VStack
                gap={8}
                w="100%"
                align={{ base: "center", lg: "flex-start" }}
              >
                <Box
                  display={"block"}
                  lineHeight={1.2}
                  fontWeight={500}
                  textAlign={{ base: "none", lg: "left" }}
                  fontSize="1.125rem"
                  color="#202c45"
                  fontFamily={
                    "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  Get unlimited access to the most relevant Mock Tests, on
                  India's #1 Online Test Series Platform
                </Box>
                <SimpleGrid
                  columns={["2", "2"]}
                  direction={["column", "row"]}
                  gap={5}
                  spacing={5}
                >
                  <Box>
                    <HStack>
                      <Image
                        h="auto"
                        verticalAlign={"middle"}
                        src="https://testbook.com/assets/img/index/explore-pass-trophy.svg"
                      />
                      <Text>All India Rank</Text>
                    </HStack>
                  </Box>
                  <Box>
                    <HStack>
                      <Image
                        h="auto"
                        verticalAlign={"middle"}
                        src="https://testbook.com/assets/img/index/explore-pass-test.svg"
                      />
                      <Text>Latest Exam Patterns</Text>
                    </HStack>
                  </Box>
                  <Box>
                    <HStack>
                      <Image
                        h="auto"
                        verticalAlign={"middle"}
                        src="https://testbook.com/assets/img/index/explore-pass-poll.svg"
                      />
                      <Text>In-depth Analysis</Text>
                    </HStack>
                  </Box>
                  <Box>
                    <HStack>
                      <Image
                        h="auto"
                        verticalAlign={"middle"}
                        src="https://testbook.com/assets/img/index/explore-pass-lang.svg"
                      />
                      <Text>Multi-lingual Mock Tests</Text>
                    </HStack>
                  </Box>
                </SimpleGrid>
                <Button
                  display={"block"}
                  textAlign="left"
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  Sign Up For Free
                </Button>
              </VStack>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box h="130%" m="100px auto" w="90%">
        <VStack gap={8} w="100%" align={"flex-start"}>
          <Box
            display={"block"}
            lineHeight={1.2}
            fontWeight={500}
            textAlign={{ base: "none", lg: "left" }}
            fontSize="1.125rem"
            color="#202c45"
            fontFamily={
              "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            }
          >
            Learn Professional Skills & Become Job Ready
          </Box>
          <SimpleGrid
            columns={["2", "4"]}
            direction={["column", "row"]}
            gap={5}
            spacing={5}
          >
            <Box>
              <HStack>
                <Image
                  h="auto"
                  verticalAlign={"middle"}
                  src="https://testbook.com/assets/img/select/skill-feature-f2.svg"
                />
                <Text>Internship Certificate</Text>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <Image
                  h="auto"
                  verticalAlign={"middle"}
                  src="https://testbook.com/assets/img/select/skill-feature-f1.svg"
                />
                <Text>Become Job Ready</Text>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <Image
                  h="auto"
                  verticalAlign={"middle"}
                  src="https://testbook.com/assets/img/select/select-unique-f2.svg"
                />
                <Text>Hands-on Real World Project</Text>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <Image
                  h="auto"
                  verticalAlign={"middle"}
                  src="https://testbook.com/assets/img/select/select-unique-f2.svg"
                />
                <Text>Multi-lingual Mock Tests</Text>
              </HStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box m="100px auto" w="90%" h="120vh">
        <VStack
          w={"100%"}
          textAlign="center"
          display={"block"}
          justifyContent={"center"}
          marginTop={10}
        >
          <SimpleGrid
            columns={["1", "2"]}
            direction={["column", "row"]}
            textAlign="center"
            spacing={10}
            gap={10}
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
                Start your learning journey now!
              </Heading>

              <VStack
                gap={8}
                w="100%"
                align={{ base: "center", lg: "flex-start" }}
              >
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
                  Learn{" "}
                  <Icon
                    as={BiChevronRight}
                    verticalAlign="middle"
                    boxSize={6}
                  />{" "}
                  Practice{" "}
                  <Icon
                    as={BiChevronRight}
                    verticalAlign="middle"
                    boxSize={6}
                  />{" "}
                  Improve{" "}
                  <Icon
                    as={BiChevronRight}
                    verticalAlign="middle"
                    boxSize={6}
                  />{" "}
                  Succeed
                </Box>
                <Button
                  display="flex"
                  textAlign="center"
                  justifyContent="center"
                  alignItems="center"
                  ml={{ base: "30px", lg: "none" }}
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  Get Started
                </Button>
                <Button
                  display="flex"
                  textAlign="center"
                  justifyContent="center"
                  alignItems="center"
                  ml={{ base: "30px", lg: "none" }}
                  bgColor={"black"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                  _hover={{ background: "#45e890" }}
                >
                  Download App
                </Button>
              </VStack>
            </VStack>

            <Box>
              <Image
                h="80%"
                w="100%"
                src="https://testbook.com/assets/img/index/web-phone.png"
              />
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
