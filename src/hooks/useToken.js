import { useEffect, useState } from "react";

const useTOken = (user) => {
  const [token, setToken] = useState(""); // empty string hove default value

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://polar-fjord-97375.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data inside use TOken", data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);

  return [token, setToken];
};

export default useTOken;
