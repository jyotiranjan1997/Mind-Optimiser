import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import SidePanel from "../Components/SidePanel";
import axios from "axios";
import { GET_LOCAL } from "../utils/loacldata";

export default function profile() {
    const [Load, setLoad] = useState(false);


    const token = 0;
    const get_user = async() => {
   
}
    useEffect(() => {
    
})


  return (
      <div>
          {Load ? <Loading/> :<SidePanel/>  }
     
    </div>
  );
}
