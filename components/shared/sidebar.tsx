import Link from "next/link";
import MainMenu from "@/components/shared/main-menu";
import { cn } from "@/libs/utils";

interface SidebarProps {
  showMenu: boolean;
}

const Sidebar = ({ showMenu }: SidebarProps) => {
  return (
    <>
      <aside
        className={cn(
          "lg:left-0 fixed top-0 bg-dark w-[60vw] md:w-[30vw] lg:w-[14vw] h-full border-r border-gray-500/30 transition-all duration-300 ease-in-out z-50",
          showMenu ? "left-0" : "-left-full"
        )}
      >
        <section className="p-8 border-b border-gray-500/30">
          <Link
            href={"/"}
            className="text-xl text-white hover:text-primary transition-colors duration-300"
          >
            José Ossorio
          </Link>
          <h3 className="text-gray-500 tracking-wide font-light">
            Software Engineer
          </h3>
        </section>
        <section>
          <MainMenu />
        </section>
      </aside>
    </>
  );
};

export default Sidebar;
