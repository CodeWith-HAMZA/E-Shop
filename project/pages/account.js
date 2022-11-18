import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const MyAccount = () => {
  const [first, setFirst] = useState(false);  // ? Is It Right To Render User's Private Details For Short Time For Not-Logged-In Person? Obviously Not!
  const router = useRouter();


  useEffect(() => {
    console.log("first");
    if (localStorage.getItem("token")) {
      setFirst(true);
    } else {
      router.push("/");
    }
  }, []);
  return first && <div>Private Account Details</div>;
};

export default MyAccount;
