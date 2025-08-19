import "./App.css";
const Format = () => {
    interface person{
        firstname:string,
        lastname:string
    }
    const user:person={
        firstname:"Nguyen Van",
        lastname:"Nam"
    }
    function formatName(user:person):string{
        return `${user.firstname} ${user.lastname}`;
    }
  return (
    <>
        <div>Ho va ten:{formatName(user)}</div>
    </>
  )
}

export default Format