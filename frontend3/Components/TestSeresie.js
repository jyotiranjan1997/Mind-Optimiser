import { Box,Flex,Text,Input,Select,Heading } from "@chakra-ui/react"; 
import styles from "./Test.module.css"
export default function TestSeriese({handleChange,value,name,question,no,opt1,opt2,opt3,opt4}) {
    

  return (
      <div className={styles.boxes} > 
      <Box
        padding="5px"
        className="drop-shadow-lg "
        mt="15px"
      >
        <Flex flexWrap="wrap">
          <Heading fontSize={["12px", "12px", "18px", "18px"]}>
            {" "}
            Question {no}:
          </Heading>
          <Text>{question}</Text>
        </Flex>
        <Box mt="5px">
          <Flex gap="10px" mt="5px" alignItems="center">
            <Text>a) {opt1}</Text>
          </Flex>
          <Flex gap="10px" mt="5px" alignItems="center">
            <Text>b) {opt2}</Text>
          </Flex>
          <Flex gap="10px" mt="5px" alignItems="center">
            <Text>c) {opt3}</Text>
          </Flex>
          <Flex gap="10px" mt="5px" alignItems="center">
            <Text>d) {opt4}</Text>
          </Flex>
        </Box>
        <Select
          name={name}
          value={value}
          mt="8px"
          onChange={handleChange}
          w={["35%", "20%", "30%", "10%"]}
        >
          <option>Answer</option>
          <option value={opt1}>A</option>
          <option value={opt2}>B</option>
          <option value={opt3}>C</option>
          <option value={opt4}>D</option>
        </Select>
      </Box></div>
    );
}