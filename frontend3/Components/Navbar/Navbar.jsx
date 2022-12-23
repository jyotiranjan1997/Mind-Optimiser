import styles from "./nav.module.css";
// import logo from "./Assets/logo.png";

import Image from "next/image";
import React from "react";
import {
  Box,
  TabList,
  Tab,
  TabPanels,
  Tabs,
  TabPanel,
  Flex,
  Heading,
  Stack,
  Text,
  Button,
  Grid,
  GridItem,
  Spacer,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaCartArrowDown } from "react-icons/fa";
import Link from "next/link";
import { ImMenu } from "react-icons/im";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import { Dropdown, Space } from "antd";
import Navinput from "./Navinput";
import { GET_LOCAL } from "../../utils/loacldata";
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let token;
  if (typeof window !== "undefined") {
    token = GET_LOCAL("psctoken");
  } else {
    token = "";
  }

  return (
    <div>
      <div className={styles.nav_container}>
        {/*menu */}
        <div className={styles.navmenu}>
          <Box className={styles.wrapper}>
            <ul className={styles.navLink}>
              <Button colorScheme="dark" mt="15px" onClick={onOpen}>
                <ImMenu color="#08bd80" size="50px" />
              </Button>
              <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerHeader borderBottomWidth="1px">
                    CATEGORIES
                  </DrawerHeader>
                  <DrawerBody>
                    <div>
                      <Menu>
                        <MenuButton rightIcon={<ChevronDownIcon />}>
                          SSC
                        </MenuButton>
                        <MenuList>
                          <MenuItem>
                            <Link href={"/product"}>
                              <h3>SSC CGL</h3>
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link href={"/product"}>
                              <h3>SSC CHSL</h3>
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            {" "}
                            <Link href={"/product"}>
                              <h3>SSC CGL MTS</h3>
                            </Link>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                    <div>
                      <Menu>
                        <MenuButton rightIcon={<ChevronDownIcon />}>
                          BANKING
                        </MenuButton>
                        <MenuList>
                          <MenuItem>
                            {" "}
                            <Link href={"/product"}>
                              <h3>SBI PO</h3>
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link href={"/product"}>
                              <h3>SBI PO</h3>
                            </Link>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                    <div>
                      <Menu>
                        <MenuButton rightIcon={<ChevronDownIcon />}>
                          RAILWAY
                        </MenuButton>
                        <MenuList>
                          <MenuItem>
                            <Link href={"/"}>
                              <h3>SBI PO</h3>
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link href={"/"}>
                              <h3>SBI PO</h3>
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link href={"/"}>
                              <h3>SBI PO</h3>
                            </Link>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </ul>
          </Box>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ height: "60px" }}>
            <Link href="/">
              {" "}
              <Image src="/logo.png" width={100} height={40} alt="logo" />
            </Link>{" "}
          </div>
        </div>

        <div className={styles.nav_child}>
          {/* dropedown series */}
          <Box className={styles.wrapper}>
            <ul className={styles.navLink}>
              <li>
                <div>
                  <div className={styles.nav_but}>Test Series</div>
                </div>

                {/* MEGA BOX */}
                <div className={styles.megaBox}>
                  {/* test series tabs */}

                  <Tabs variant="soft-rounded" colorScheme="green">
                    <TabList>
                      <Tab>SSC</Tab>
                      <Tab>BANKING</Tab>
                      <Tab>CIVIL EXAMS</Tab>
                      <Tab>RAILWAY EXAMS</Tab>
                      <Tab>DEFENCE EXAMS</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/SSC_All_1594144453.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>SSC CGL</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/SSC_All_1594144453.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>SSC CHSL</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/SSC_All_1594144453.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>SSC CGL MTS</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/SSC_All_1594144453.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>SSC CGL CONSTABLE</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/SSC_All_1594144453.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>SSC STENOGRAPHER</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/SSC_All_1594144453.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>SSC JE MAIN</h3>
                            </Link>
                          </Button>
                        </Grid>
                      </TabPanel>
                      <TabPanel>
                        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/SBI_All_1594152511.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>SBI PO</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/SBI_All_1594152511.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>IBPS PO</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/SBI_All_1594152511.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>IBPS CLERK</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/IBPS_All_1594152521.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>RRB</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/IDBI_All_1594152777.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>SIDBI</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/Nainital%20Bank_All_1603377866.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>NANITAL BANK OF INDIA</h3>
                            </Link>
                          </Button>
                        </Grid>
                      </TabPanel>
                      <TabPanel>
                        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/UPSC_All_1603376811.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>UPSC CIVIL SERVICES </h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/UPSC_All_1604667940.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>BPSC</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/UPSC_All_1604667940.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>UPPCS</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/APPSC_All_1613562850.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>UPPSC ARO</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/MPPSC_All_1622616444.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>MPPSC State</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/MPSC_All_1604667971.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>APPSC</h3>
                            </Link>
                          </Button>
                        </Grid>
                      </TabPanel>
                      <TabPanel>
                        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/RRB%20SSE_All_1628756213.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>RAILWAY NTPC</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/RRB%20SSE_All_1628756213.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>RRB GROUP D</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/RRB%20SSE_All_1628756213.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>RRB JL</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/RRB%20SSE_All_1628756213.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>RRB ALP</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/RRB%20SSE_All_1628756213.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>RRB SSC</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/RRB%20SSE_All_1628756213.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>RRB ME</h3>
                            </Link>
                          </Button>
                        </Grid>
                      </TabPanel>
                      <TabPanel>
                        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/Airforce_All_1594152047.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>AFCAT</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/Airforce_All_1594152038.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>Airfoce Group</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/CDS_All_1594152001.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>CDS</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/NDA_All_1594143675.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>NDA</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/DRDO_All_1594151304.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>DRDO Technologies</h3>
                            </Link>
                          </Button>
                          <Button colorScheme="green">
                            <img
                              src="https://cdn.testbook.com/resources/productionimages/Navy_All_1594151954.png"
                              className={styles.dropdown_img}
                            ></img>
                            <Link href={"/"}>
                              <h3>NAVY AGNIVEER</h3>
                            </Link>
                          </Button>
                        </Grid>
                      </TabPanel>
                    </TabPanels>
                    <Button colorScheme="red" width="100%" marginTop="30px">
                      <img
                        src="https://cdn.testbook.com/resources/productionimages/state%20govt%20exams_All_1583571248.png"
                        className={styles.dropdown_img}
                      ></img>
                      <Link href={"/product"}>
                        <h3>EXPLORE MORE TEST SERIES</h3>
                      </Link>
                    </Button>
                  </Tabs>
                </div>
              </li>
            </ul>
          </Box>

          {/* antd deropedown */}
          <div className={styles.nav_but}>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <p>Courses</p>
                  <AiOutlineDown />
                </div>
              </a>
            </Dropdown>
          </div>
          {/* live classes */}
          <div>
            <div className={styles.nav_but}>Teachers</div>
          </div>
          <div>
            <div className={styles.nav_but}>Lectures</div>
          </div>
          {/* nav input */}
          {/* account details */}
          <div style={{ display: "flex", alignContent: "center" }}>
            <Navinput />

            <div>
              <Menu isLazy>
                <Box
                  style={{
                    display: "flex",
                    gap: "0.65rem",
                    alignContent: "center",
                  }}
                >
                  <RiAccountCircleFill size="27px" color="#08bd80" />
                  <MenuButton style={{ fontWeight: "700" }}>ACCOUNT</MenuButton>
                </Box>

                <MenuList marginRight="-30px" marginTop="7px">
                  {token ? (
                    <Link href="/profile">
                      {" "}
                      <MenuItem>Profile</MenuItem>
                    </Link>
                  ) : (
                    <Link href="/login">
                      {" "}
                      <MenuItem>Login</MenuItem>
                    </Link>
                  )}
                  <Link href="/signup">
                    {" "}
                    <MenuItem>Register</MenuItem>
                  </Link>
                  <MenuItem>Admin</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
        {/*account meedia */}
        <div className={styles.navaccount}>
          <Menu isLazy>
            <Box
              style={{
                display: "flex",
                gap: "0.65rem",
                alignContent: "center",
              }}
            >
              <RiAccountCircleFill size="27px" color="#08bd80" />
              <MenuButton style={{ fontWeight: "700" }}>ACCOUNT</MenuButton>
            </Box>

            <MenuList marginRight="-30px" marginTop="7px">
              {token ? (
                <Link href="/profile">
                  {" "}
                  <MenuItem>Profile</MenuItem>
                </Link>
              ) : (
                <Link href="/login">
                  {" "}
                  <MenuItem>Login</MenuItem>
                </Link>
              )}
              <Link href="/signup">
                {" "}
                <MenuItem>Register</MenuItem>
              </Link>
              <MenuItem>Admin</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        SSC JE & State AE Exams
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        UPSC CSE-Optional
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Bank Exams
      </a>
    ),
  },
  {
    key: "4",
    danger: "true",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Explore all Courses
      </a>
    ),
  },
];
