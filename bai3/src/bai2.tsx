import "./App.css";

function App() {
  interface Person {
    name: string;
    gioitinh: string;
    date: string;
    email: string;
    address: string;
  }
  const person: Person = {
    name: "Nguyễn Văn A",
    gioitinh: "Nam",
    date: "2000-01-01",
    email: "nguyenvana@example.com",
    address: "Hà Nội, Việt Nam",
  };
  return (
    <>
      <div>
        <h1>thong tin ca nhan</h1>
        <ol>
          <li>name:{person.name}</li>
          <li>gioi tinh:{person.gioitinh}</li>
          <li>ngay sinh:{person.date}</li>
          <li>email:{person.email}</li>
          <li>dia chi:{person.address}</li>
        </ol>
      </div>
    </>
  );
}

export default App;
