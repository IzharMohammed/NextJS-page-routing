        /* static site Generation */
const UsersInfo = (props) => {
   
  return (
    <>
  <div>{props.data.firstName}</div>
      <div>{props.data.email}</div>
      <div>{props.data.address?.country}</div>
    </>
  );
};

export const getStaticPaths =async () => {
    const data = await (await fetch(`https://dummyjson.com/users`)).json();
    console.log('data',data.users);
  return {
   paths: data.users.map(data =>({params: { id: `${data.id}` }}) ) ,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log(context);
  const id = context.params.id;
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
  return {
    props: {
      data,
    },
  };
};

export default UsersInfo;
