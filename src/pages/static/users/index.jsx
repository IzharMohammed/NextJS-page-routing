const UserInfo = (props) =>{
    return (
       <>
          {props.data && props.data.users.map((user) => <li key={user.id}>{user.firstName}</li>)}
       </>
    )
}

export const getStaticProps = async () => {
    const data = await (await fetch("https://dummyjson.com/users")).json();
    return {
      props: {
        data,
      },
    };
  };

export default UserInfo;