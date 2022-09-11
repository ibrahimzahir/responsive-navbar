import { useState } from "react";
import { MenuOutlined } from "@material-ui/icons";
import MenuItems from "./MenuItems";
import Link from "next/link";

function Header() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="fixed w-full text-black flex justify-between p-4 items-center">
      <div className="text-2xl font-bold text-center uppercase">
        <h1>
          <span className="block text-4xl">RESPONSIVE NAVBAR</span>
        </h1>
      </div>

      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150">
          <MenuOutlined
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          />
        </div>

        <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
}

export default Header;
