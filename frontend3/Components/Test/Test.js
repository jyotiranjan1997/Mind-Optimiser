import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import ButtonComponent from "../ButtonComponent";
import Card from "./Card";
import Link from "next/link";

export default function Test() {


  return (
    <Box w="90%" m="auto" mt="30px">
      <Flex
        w={["90%", "70%", "50%", "50%"]}
        className="drop-shadow-md"
        m="auto"
        p="20px"
        bgColor="green.100"
        justifyContent="space-between"
      >
        <Box>
          <Heading fontSize={["10px", "10px", "18px", "18px"]}>
            Net Book
          </Heading>
          <Text fontSize={["9px", "9px", "15px", "15px"]}>
            Get Unlimited Access to Mock Test Series
          </Text>
          <Text fontSize={["9px", "9px", "15px", "15px"]}>
            for 300+ Exams and much more .
          </Text>
        </Box>
        <Link href="/mocktest">
          <ButtonComponent
            Title="START TEST"
            txtColor="white"
            buttonColor="green"
            bgColor="green"
          />
        </Link>
      </Flex>

      <Flex mt="60px" justifyContent="space-around" flexWrap="wrap" gap="15px">
        <Card
          image={"https://www.ixambee.com/v2/icons/icon-ibps_main.png"}
          name={"IBPS RA and Hindi Officer Free Mock Test "}
          rating={"4.3"}
        />
        <Card
          image={"https://www.ixambee.com/v2/icons/sbi.png"}
          name={"SBI PO Prelims Free Mock Test "}
          rating={"4.7"}
        />
        <Card
          image={"https://www.ixambee.com/v2/icons/icon-ibps_main.png"}
          name={"IBPS RA and Hindi Officer Free Mock Test "}
          rating={"4.3"}
        />
        <Card
          image={"https://www.ixambee.com/v2/icons/canara.png"}
          name={"Canara Bank PO Free Mock Test "}
          rating={"4.1"}
        />
        <Card
          image={"https://www.ixambee.com/v2/icons/rrb.png"}
          name={"Railway RRB Free Mock Test"}
          rating={"4.5"}
        />
        <Card
          image={"https://www.ixambee.com/v2/icons/390.png"}
          name={"DRDO STA-B Tier 2 Computer Science Free "}
          rating={"4.0"}
        />
        <Card
          image={"https://www.ixambee.com/v2/icons/nabard.png"}
          name={"IBPS RA and Hindi Officer Free Mock Test "}
          rating={"4.3"}
        />
      </Flex>
      <Box mt="45px">
        <Heading mb="10px" fontSize={["10px", "10px", "18px", "18px"]}>
          Why Opt for the Mock Test Series?
        </Heading>
        <Text>
          <Flex gap="8px" mb="5px" fontSize={["9px", "9px", "15px", "15px"]}>
            <input type="checkbox" disabled={true} />
            Candidates will be given the most up-to-date and dependable practice
            material, which will include the most anticipated and critical SSC
            Exam questions. The SSC Reasoning Pack Test Series will also assist
            you in preparing for the SSC Exams.
          </Flex>
          <Flex gap="8px" mb="5px" fontSize={["9px", "9px", "15px", "15px"]}>
            <input type="checkbox" disabled={true} />
            <br /> Candidates will enhance their problem-solving efficiency and
            accuracy by taking the SSC Reasoning Pack sample exam. Candidates
            for the SSC Reasoning Pack Test Series will have no trouble
            answering difficult questions. The SSC Reasoning Pack will help you
            prepare for the exam.
          </Flex>
          <Flex gap="8px" mb="5px" fontSize={["9px", "9px", "15px", "15px"]}>
            <input type="checkbox" disabled={true} />
            <br /> Your time accuracy will improve if you take the SSC Reasoning
            Pack mock test. Solving the SSC Reasoning Pack will help you solve
            easy, difficult, and moderate questions with ease.{" "}
          </Flex>
          <Flex gap="8px" mb="5px" fontSize={["9px", "9px", "15px", "15px"]}>
            <input type="checkbox" disabled={true} />
            <br /> Your revision of the whole syllabus will also be done by
            attempting the SSC Reasoning Pack Test Series. We hope you found
            this article on the SSC Reasoning Pack helpful and informative.
          </Flex>
          <Flex gap="8px" mb="5px" fontSize={["9px", "9px", "15px", "15px"]}>
            <input type="checkbox" disabled={true} />
            <br /> You can also download our Testbook App and start preparing
            for various government exams.
          </Flex>
          <br />
          <Flex gap="8px" mb="5px" fontSize={["9px", "9px", "15px", "15px"]}>
            <input type="checkbox" disabled={true} />
            This Testbook App will provide you with previous year papers, Test
            Series, Mock tests, PDFs, live coaching sessions, etc.
          </Flex>
        </Text>
      </Box>
    </Box>
  );
}
