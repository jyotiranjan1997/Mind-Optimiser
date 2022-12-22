import {
  border,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Box,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import { useState } from "react";
import styles from "./nav.module.css";
import axios from "axios";
import Link from "next/link";

const getData = (data) => {
  return axios.get(
    `https://repulsive-nightgown-colt.cyclic.app/navbars?q=${data}`
  );
};

export default function Navinput(){
  const [q, setQ] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  const handleText = (data) => {
    setQ(data);
  };



  useEffect(() => {
    let timeout= setTimeout(() => {
      if (q === "") {
        setSuggestion([]);
        
      } else {
        getData(q)
          .then((res) => {
            setSuggestion(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
      
    }, 800);
    return (()=> clearTimeout(timeout))
    
  }, [q]);

  console.log("here suggestion", suggestion);

  return (
    <>
      <InputGroup width="440px" className={styles.medianavinput}>
        
        <Box>
          <Input
            size="lg"
            focusBorderColor="#08bd80"
            color="grey"
            placeholder="Enter Your Search Here"
            onChange={(e) => handleText(e.target.value)}
            value={q}
            w={["100%","100%","100%","30vw"]}
            className={styles.navinputsearch}
          />
          <InputRightElement width="3rem" height="3rem">
            <Button
              h="2.5rem"
              size="sm"
              color="white"
              bg="#08bd80"
              _hover={{
                background: "white",
                color: "#08bd80",
              }}
            >
              <FaSearch />
            </Button>
          </InputRightElement>
          <div className={suggestion.length>0 ? styles.suggestion : null}>
            {suggestion.length > 0
              ? suggestion.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "15px",
                      }}
                    >
                      <Link href={"/"}>
                      <img src={item.image} style={{ height: "40px" }} />
                      <h3>{item.description}</h3>
                      </Link>
                    </div>
                  );
                })
              : null}
          </div>
        </Box>
      </InputGroup>
    </>
  );
};


