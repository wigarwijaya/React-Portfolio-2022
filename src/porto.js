import { SiTailwindcss, SiWordpress, SiReact  } from 'react-icons/si'
import { FaElementor } from 'react-icons/fa'
import port_1 from "./assets/port_1.jpg";
import port_2 from "./assets/port_2.jpg";
// import port_3 from "./assets/port_3.jpg";

const porto = [
  {
    id: 1,
    image: port_1,
    title: "Bluewheels Ebike Rental Bali",
    icon : [
      <SiWordpress/>,
      <FaElementor/>
    ],
    link: "https://www.bluewheelsebikerental.com/",
  },
  {
    id: 2,
    image: port_2,
    title: "BrodoxCoin Crypto Token",
    icon : [
      <SiReact/>,
      <SiTailwindcss/>
    ],
    link: "https://brodoxcoin.com/",
  },
];

export default porto;
