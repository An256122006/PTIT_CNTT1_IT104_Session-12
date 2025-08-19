import "./App.css";
const Todolist = () => {
  class Person {
    private static idCount: number = 1;
    id: number;
    name: string;
    job: string;
    status: boolean;
    date: string;

    constructor(name: string, job: string, status: boolean, date: string) {
      this.id = Person.idCount++;
      this.job = job;
      this.name = name;
      this.status = status;
      this.date = date;
    }
  }
  function getDate(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  const users: Person[] = [];
  users.push(new Person("An", "thiet ke giao dien", true, getDate()));
  users.push(new Person("Bình", "thiet ke giao dien", false, getDate()));
  users.push(new Person("Cường", "thiet ke giao dien", true, getDate()));

  console.log(users);

  return (
    <>
      <table>
        <thead>
          <th>STT</th>
          <th>Name</th>
          <th>Ten cong viec</th>
          <th>Trang thai</th>
          <th>Thoi gian tao</th>
          <th>Chuc nang</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.job}</td>
              <td><span className={`status ${user.status ? "done" : "pending"}`}>
                {user.status ? "Hoàn thành" : "Chưa hoàn thành"}
              </span></td>
              <td>{user.date}</td>
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
