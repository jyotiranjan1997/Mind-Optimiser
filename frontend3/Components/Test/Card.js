import { Flex,Heading,Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Card({ image, name, rating }) {
  const data = "";
    return (
      <div>
        <div class="flex justify-center">
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <Flex justifyContent="space-between" gap="10px">
              {" "}
              <Image src={image} w="18%" alt="logo" />{" "}
              <Heading fontSize={["9px", "9px", "15px", "15px"]} class="text-gray-900 text-xl leading-tight font-medium mb-2">
                {name}
              </Heading>{" "}
            </Flex>

            <p class="text-gray-700 text-base mb-4">{data}</p>
            <Text fontSize={["9px", "9px", "15px", "15px"]} mt="5x" mb="8px">
              Language: English,Hindi
            </Text>
            <Text fontSize={["9px", "9px", "15px", "15px"]} mt="5x" mb="8px">
              Rating: {rating}
            </Text>

            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              View Test
            </button>
          </div>
        </div>
      </div>
    );
}