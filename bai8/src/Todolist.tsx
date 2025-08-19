import "./App.css";
const Todolist = () => {
  class Person {
    private static idCount: number = 1;
    id: number;
    name: string;
    address: string;
    gioitinh:string;
    date: string;

    constructor(name: string, address: string,gioitinh:string, date: string) {
      this.id = Person.idCount++;
      this.address = address;
      this.gioitinh=gioitinh;
      this.name = name;
      this.date = date;
    }
  }
  const users: Person[] = [];
  users.push(new Person("An", "ha noi", "name", "27/1/2003"));
  users.push(new Person("Bình", "tp hcm", "nu", "27/1/2003"));
  users.push(new Person("Cường", "da nang", "nam", "27/1/2003"));

  console.log(users);

  return (
    <>
      <table>
        <thead>
          <th>STT</th>
          <th>Name</th>
          <th>Ngay sinh</th>
          <th>gio tinh</th>
          <th>dia chi</th>
          <th>Chuc nang</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.date}</td>
              <td>{user.gioitinh}</td>
              <td>{user.address}</td>
              <td>
                <button className="edit">Sửa</button>
                <button className="delete">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Todolist;
