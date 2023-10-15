import { RiHome3Line } from "react-icons/ri";
import Link from "next/link";

const MainMenu = () => {
  return (
    <ul>
      <li>
        <Link href="/" className="flex items-center gap-4">
          <RiHome3Line size={18} /> Home
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
