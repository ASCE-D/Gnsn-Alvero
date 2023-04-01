import { CiWarning, CiMenuFries, CiUser, CiShop } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Footer from "./components/Footer";
import { useState } from "react";

import './App.css';
import HamTitle from "./components/TitleHam/HamTitle";

function App() {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu)
  }


  return (
    <div>
      <nav class="main-nav">
        <div class="container_1">
          <div class="icon_1"><CiMenuFries size='5rem' /></div>
        </div>

        <div className="heading">
          <div><a href="https://www.linkedin.com/company/gnsnalvero/" target="_blank">GNAL</a></div>
        </div>

        <li className="Services"><a href="https://www.linkedin.com/company/gnsnalvero/" target="_blank">Services</a></li>
        <li className="Shop"><a href="https://www.linkedin.com/company/gnsnalvero/" target="_blank">Shop</a></li>
        <div class="container_2">
          <div class="icon_2"><CiShop size='2rem' /></div>
        </div>
        <div class="container_3">
          <div class="icon_3"><CiUser size='2rem' /></div>
        </div>

      </nav>


      <body>

        <div class="container">
          <div class="icon"><CiWarning size='4.5rem' /></div>
        </div>

        <div className='message'>
          We’re currently working on this page. We’ll be back with this feature soon. We really acknowledge your support & believe on us.
        </div>

        <div className='message_1'>
          VISIT OTHER SERVICES
        </div>

      </body>
      <div />




    </div >
  );
}
export default App;
