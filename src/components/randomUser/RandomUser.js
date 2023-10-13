import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { BsCalendar } from "@react-icons/all-files/bs/BsCalendar";
import { BsMap } from "@react-icons/all-files/bs/BsMap";
import { AiOutlinePhone } from "@react-icons/all-files/ai/AiOutlinePhone";
import { RiLockPasswordFill } from "@react-icons/all-files/ri/RiLockPasswordFill";

const icons = [
  {
    label: "name",
    icon: <AiOutlineUser />,
  },
  {
    label: "email",
    icon: <AiOutlineMail />,
  },
  {
    label: "age",
    icon: <BsCalendar />,
  },
  {
    label: "adress",
    icon: <BsMap />,
  },
  {
    label: "phone",
    icon: <AiOutlinePhone />,
  },
  {
    label: "password",
    icon: <RiLockPasswordFill />,
  },
];


export default function App() {
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState("name");

  const newUser = () => {
    async function fetchData() {
      try {
        const response = await axios.get("https://randomuser.me/api/");
        setUser({
          picture: response.data.results[0].picture.large,
          name: response.data.results[0].name.first,
          email: response.data.results[0].email,
          age: response.data.results[0].dob.age,
          adress: response.data.results[0].location.city,
          phone: response.data.results[0].phone,
          password: response.data.results[0].location.postcode,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  };

  useEffect(() => {
    newUser();
  }, []);

  return (
    <div>
      <div className="block">
        <img src={user?.picture} alt="error"/>
        <p>My {info} is</p>
        <p style={{ margin: 10 }}>{user?.[info]}</p>
        <div className="blockIcon">
          {icons.map((el) => (
            <button className="icon" onClick={() => setInfo(el.label)}>
              {el.icon}
            </button>
          ))}
        </div>
        <button className="blockRandomUser" onClick={() => newUser()}>
          random user
        </button>
      </div>
    </div>
  );
}
