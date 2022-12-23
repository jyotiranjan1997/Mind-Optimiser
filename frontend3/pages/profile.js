import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import SidePanel from "../Components/SidePanel";
import axios from "axios";

import { GET_LOCAL } from "../utils/loacldata";  


export default function profile1() {
  const [Load, setLoad] = useState(false);
  const [userData, setUserData] = useState([]);
  const [attempt, setAttempt] = useState(0);
  const [auth,setAuth]=useState(false)
  let token;
  if (typeof window !== 'undefined') {
  token = GET_LOCAL("psctoken");
  } else {
    token = "";
  }
  
  const renderPage = () => {
    setAuth(true);
    return setTimeout(() => {
    setAuth(false)
  },1500)
}


  const get_mock = async () => {
 
  await axios
    .get("https://sapphire-bull-robe.cyclic.app/userdata", {
      headers: { token: `Babel ${token}` },
    })
    .then((res) => setAttempt(res.data.data));
}



  const get_user = async () => {
         setLoad(true);
      try {
         await axios.get("https://sapphire-bull-robe.cyclic.app/users/single",{headers:{token:`Babel ${token}`}}).then((res) => {
          
           setUserData(res.data.user);
         })
        get_mock()
      } catch (err) {
        
    }
    
       setLoad(false);
}
  useEffect(() => {
    get_user();
  }, [auth]);


  return (
    <div>
      {Load ? (
        <Loading />
      ) : (
        <SidePanel
          mock={attempt.length}
          firstname={userData.firstName}
          lastname={userData.lastName}
          mobile={userData.phone}
          email={userData.email}
          renderPage={renderPage}
        />
      )}
    </div>
  );
}
