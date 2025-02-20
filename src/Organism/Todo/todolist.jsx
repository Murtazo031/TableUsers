import { useState } from "react";

export default function TableUser() {
  const [users, setUsers] = useState([
    {
      id: 1,
      avatar:
        "https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-download-in-svg-png-gif-file-formats--person-picture-profile-business-pack-illustrations-6515860.png",
      name: "Saidali",
      email: "john@example.com",
      city: "Dushanbe",
      status: false,
      phone: "88880863111",
    },
    {
      id: 2,
      avatar:
        "https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-download-in-svg-png-gif-file-formats--person-picture-profile-business-pack-illustrations-6515860.png",
      name: "John Doe",
      email: "john@example.com",
      city: "Dushanbe",
      status: false,
      phone: "88880863111",
    },
    {
      id: 3,
      avatar:
        "https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-download-in-svg-png-gif-file-formats--person-picture-profile-business-pack-illustrations-6515860.png",
      name: "John Smith",
      email: "john@example.com",
      city: "Dushanbe",
      status: false,
      phone: "88880863111",
    },
    {
      id: 4,
      avatar:
        "https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-download-in-svg-png-gif-file-formats--person-picture-profile-business-pack-illustrations-6515860.png",
      name: "Jacky Smith",
      email: "john@example.com",
      city: "Dushanbe",
      status: false,
      phone: "88880863111",
    },
  ]);

  //SET EDIT MODAL
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editCity, setEditCity] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editModal, setEditModal] = useState(false);

  //SET INFO MODAL
  const [infoId, setInfoId] = useState(null);
  const [infoModal, setInfoModal] = useState(false);

  //SET ADD MODAL
  const [addModal, setAddModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  //ADD
  function openAddModal() {
    setAddModal(true);
  }
  function addNewUser() {
    setUsers([
      ...users,
      { id: users.length + 1, name, email, city, phone, status: false },
    ]);
    setName("");
    setEmail("");
    setCity("");
    setPhone("");
    setAddModal(false);
  }

  //INFO
  function openInfoModal(id) {
    setInfoId(id);
    setInfoModal(true);
  }

  //EDIT
  function openEditModal(user) {
    setEditId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
    setEditCity(user.city);
    setEditPhone(user.phone);
    setEditModal(true);
  }
  function updateUser() {
    setUsers(
      users.map((user) =>
        user.id === editId
          ? {
              ...user,
              name: editName,
              email: editEmail,
              city: editCity,
              phone: editPhone,
            }
          : user
      )
    );
    setEditModal(false);
  }

  //DELTE
  function DeleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  function chek(id) {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: !user.status } : user
      )
    );
  }

  return (
    <>
      <button onClick={() => openAddModal()}>New+</button>
      <table className="tableUser">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Status</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    cursor: "pointer",
                    background: "lightgray",
                    border: "1px solid #ccc",
                  }}
                  src={user.avatar}
                  alt={user.name}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>
                <button
                  style={{
                    color: "white",
                    backgroundColor: user.status ? "green" : "grey",
                    border: "none",
                  }}
                  onClick={() => chek(user.id)}
                >
                  {user.status ? "ACTIVE" : "INACTIVE"}
                </button>
              </td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => DeleteUser(user.id)}>delete</button>
                <button onClick={() => openEditModal(user)}>Edit</button>
                <button onClick={() => openInfoModal(user.id)}>Info</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/*EDIT*/}
      {editModal && (
        <div className="editModal">
          <div>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <input
              type="text"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
            />
            <input
              type="text"
              value={editCity}
              onChange={(e) => setEditCity(e.target.value)}
            />
            <input
              type="text"
              value={editPhone}
              onChange={(e) => setEditPhone(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: "20px",
                width: "90%",
              }}
            >
              <button
                style={{
                  backgroundColor: "#2196F3",
                  color: "white",
                  border: "none",
                  // padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "22px",
                }}
                onClick={() => updateUser(editId)}
              >
                Save
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#2196F3",
                  border: "1px solid #2196F3",
                  // padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "22px",
                }}
                onClick={() => setEditModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/*INFO*/}
      {infoModal && (
        <div className="infoModal">
          <div>
            <h2>Name: {users.find((user) => user.id === infoId)?.name}</h2>
            <h2>Email: {users.find((user) => user.id === infoId)?.email}</h2>
            <h2>City: {users.find((user) => user.id === infoId)?.city}</h2>
            <h2>Phone: {users.find((user) => user.id === infoId)?.phone}</h2>
            <button onClick={() => setInfoModal(false)}>Close</button>
          </div>
        </div>
      )}
      {/*ADD*/}
      {addModal && (
        <div className="addModal">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: "20px",
                width: "90%",
              }}
            >
              <button
                style={{
                  backgroundColor: "#2196F3",
                  color: "white",
                  border: "none",
                  // padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "22px",
                }}
                onClick={() => addNewUser()}
              >
                Save
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#2196F3",
                  border: "1px solid #2196F3",
                  // padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "22px",
                }}
                onClick={() => setAddModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
