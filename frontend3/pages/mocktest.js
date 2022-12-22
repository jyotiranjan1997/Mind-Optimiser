import React, { useState, useEffect, useRef } from "react";
import { Heading, Flex, Box, Text, Select, Input } from "@chakra-ui/react";
import TestSeriese from "../Components/TestSeresie";
import swal from "sweetalert";

import styles from "../styles/Timer.module.css";
import { SSC_DATA } from "../utils/loacldata";
const IntialState = {
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
  q6: "",
  q7: "",
  q8: "",
  q9: "",
  q10: "",
};

export default function mocktest() {
  const [data, setData] = useState(IntialState);
  const [miniute, setMiniute] = useState(10);
  const [second, setSecond] = useState(60);

  const timerId = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };
  const handleMock = (e) => {
    e.preventDefault();
    stopTimer();
    const final = handleScore();

    swal({
      title: "Good job!",
      text: "Your Test Submitted Successfully!",
      icon: "success",
    }).then(() => {
      swal({
        title: `Your Score is ${final}`,
        text: "",
        icon: "success",
      });
    });
  };

  const TimeUp = () => {
    stopTimer();
    const final = handleScore();

    swal({
      title: "Time Up!",
      text: "Your Test Submitted Automatically!",
      icon: "success",
    }).then(() => {
      swal({
        title: `Your Score is ${final}`,
        text: "",
        icon: "success",
      });
    });
  };

  const handleScore = () => {
    let i = 0;
    let j = 0;
    for (let key in data) {
      console.log(data[key], SSC_DATA[i]);
      if (data[key] == SSC_DATA[i]) {
        j++;
      }
      i++;
    }
    return j;
  };

  console.log(data);
  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
      if (second === 0) {
        if (miniute !== 0) {
          setMiniute(miniute - 1);
          setSecond(60);
        } else {
          TimeUp();
        }
      } else {
        setSecond((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(timerId.current);
  }, [second]);
  return (
    <div>
      <Box w="90%" m="auto">
        <div className={styles.Timer}>
          <Heading color="red" fontSize={["9px", "9px", "15px", "15px"]}>
            Time:00.{miniute > 10 ? miniute : `0${miniute}`}:
            {second > 10 ? second : `0${second}`}
          </Heading>
        </div>

        <Box mt="5%">
          <form onSubmit={handleMock}>
            <TestSeriese
              value={data.q1}
              handleChange={handleChange}
              question={
                "What is that least digit that must be added to the product 5786 ×5784 to make it a perfect square ?"
              }
              name="q1"
              no={1}
              opt1={1}
              opt2={5}
              opt3={6}
              opt4={4}
            />

            <TestSeriese
              value={data.q2}
              name="q2"
              handleChange={handleChange}
              question={
                "Sum of four times a fraction and 7 times its reciprocal is 16. What is the fraction?"
              }
              no={2}
              opt1={"2/7"}
              opt2={"7/2"}
              opt3={"4/7"}
              opt4={"7/4"}
            />

            <TestSeriese
              value={data.q3}
              name="q3"
              handleChange={handleChange}
              question={"Which of the following is NOT prime number?"}
              no={3}
              opt1={251}
              opt2={571}
              opt3={331}
              opt4={341}
            />

            <TestSeriese
              value={data.q4}
              name="q4"
              handleChange={handleChange}
              question={
                "If 169 is subtracted from the square of a number, then the result obtained is 7056. What is the number?"
              }
              no={4}
              opt1={75}
              opt2={78}
              opt3={85}
              opt4={87}
            />

            <TestSeriese
              value={data.q5}
              name="q5"
              handleChange={handleChange}
              question={"What is the remainder when 2468 is divided by 37?"}
              no={5}
              opt1={26}
              opt2={36}
              opt3={18}
              opt4={14}
            />

            <TestSeriese
              value={data.q6}
              name="q6"
              handleChange={handleChange}
              question={
                "What is the average of all numbers between 8 and 74 which are divisible by 7?"
              }
              no={6}
              opt1={40}
              opt2={41}
              opt3={42}
              opt4={43}
            />

            <TestSeriese
              value={data.q7}
              name="q7"
              handleChange={handleChange}
              question={
                "Sum of twice a fraction and its reciprocal is 17/6. What is the fraction?"
              }
              no={7}
              opt1={"4/3"}
              opt2={"5/4"}
              opt3={"3/4"}
              opt4={"4/5"}
            />

            <TestSeriese
              value={data.q8}
              name="q8"
              handleChange={handleChange}
              question={
                "When a number is increased by 120, it becomes 130% of itself. What is the number?"
              }
              no={8}
              opt1={400}
              opt2={520}
              opt3={460}
              opt4={580}
            />

            <TestSeriese
              value={data.q9}
              name="q9"
              handleChange={handleChange}
              question={
                "The sum of a fraction and 3 times its reciprocal is 19/4. What is the fraction?"
              }
              no={9}
              opt1={"3/4"}
              opt2={"4/3"}
              opt3={"5/4"}
              opt4={"4/5"}
            />

            <TestSeriese
              value={data.q10}
              name="q10"
              handleChange={handleChange}
              question={
                "What least number must be added to 329, so that the sum is completely divisible by 7?"
              }
              no={10}
              opt1={1}
              opt2={0}
              opt3={2}
              opt4={3}
            />
            <Flex justifyContent="center" mt="15px">
              <Input
                type="submit"
                bgColor="green.400"
                w={["35%", "30%", "25%", "10%"]}
              />
            </Flex>
          </form>
        </Box>
      </Box>
    </div>
  );
}
