                   /* Client side rendering */
                   
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function UserPage() {
                            /* Method -1 */

  /*   const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://dummyjson.com/users");
      setData(await data.json());
    };
    fetchData();
  }, []); */
         
                /* Method - 2 */
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);
  console.log(data);

  if (error)  return <h1>Error .....</h1>;
  
  if (!data)   return <h1>Loading .....</h1>;
  

  return (
    <>
      {data.users &&
        data.users.map((user) => (
          <li>
            <Link href={`users/${user.id}`} key={user.id}>
              {user.firstName}
            </Link>
          </li>
        ))}
    </>
  );
}

export default UserPage;
