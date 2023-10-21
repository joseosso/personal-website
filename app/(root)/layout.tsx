"use client";
import Sidebar from "@/components/shared/sidebar";
import { ReactNode, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Sidebar showMenu={showMenu} />
      <button className="lg:hidden" type="button">
        <AiOutlineMenu className="size-20" onClick={() => setShowMenu(true)} />
      </button>
      {children}
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className={
            "bg-black/10 fixed left-0 top-0 z-40 w-full h-full lg:hidden"
          }
        ></div>
      )}
    </>
  );
};

export default MainLayout;
