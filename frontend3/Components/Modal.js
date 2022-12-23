import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Button, Input } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import swal from "sweetalert";
import { GET_LOCAL } from "../utils/loacldata";
import Loading from "./Loading";
 function Modals({ firstName, lastName, email, renderPage }) {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [load, setload] = useState(false);
   const [data, setData] = useState({
     firstName,
     lastName,
     email,
   });
   const router = useRouter();
   const handleChange = (e) => {
     const { name, value } = e.target;
     setData({ ...data, [name]: value });
   };
   let token;
   if (typeof window !== "undefined") {
     token = GET_LOCAL("psctoken");
   } else {
     token = "";
   }

   const handleUpdate = async (e) => {
     e.preventDefault();
     setload(true);
     await axios
       .patch("https://sapphire-bull-robe.cyclic.app/users/update", data, {
         headers: { token: `Babel ${token}` },
       })
       .then((res) => {
         setload(false);
         onClose();
         swal({
           title: "Profile Update Successfully!",
           text: "",
           icon: "success",
           button: "ok",
         }).then(() => renderPage());
       });
   };
   useEffect(() => {}, [load]);

   return (
     <>
       <Button onClick={onOpen}>Edit Profile</Button>

       <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent>
           <ModalHeader>Profile Edit</ModalHeader>
           <ModalCloseButton />
           {load ? (
             <Loading />
           ) : (
             <ModalBody>
               <Input
                 type="text"
                 name="firstName"
                 value={data.firstName}
                 onChange={handleChange}
               />
               <Input
                 type="text"
                 name="lastName"
                 value={data.lastName}
                 onChange={handleChange}
               />
               <Input
                 type="text"
                 name="email"
                 value={data.email}
                 onChange={handleChange}
               />
             </ModalBody>
           )}

           <ModalFooter>
             <Button colorScheme="blue" mr={3} onClick={onClose}>
               Close
             </Button>
             <Button onClick={handleUpdate} variant="ghost">
               Update Profile
             </Button>
           </ModalFooter>
         </ModalContent>
       </Modal>
     </>
   );
 }

export default memo(Modals);