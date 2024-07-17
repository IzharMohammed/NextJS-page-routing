import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserInfoPage = () => {
  const router = useRouter();

  /*   const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const { id } = router.query;
    const fetchData = async (id) => {
      const data = await fetch(`https://dummyjson.com/users/${id}`);
      setUserInfo(await data.json());
    };
    fetchData(id);
  }, []); */

  const { id } = router.query;
  const { data, error } = useSWR(`https://dummyjson.com/users/${id}`, fetcher);

  if (error) return <h1>Error .....</h1>;

  if (!data) return <h1>Loading .....</h1>;

  return (
    <>
    <div key={data.id}>
    <div>{data.firstName}</div>
      <div>{data.email}</div>
      <div>{data.address?.country}</div>
    </div>
    </>
  );
};

export default UserInfoPage;
