import Link from "next/link";
import MainMenu from "@/components/shared/main-menu";

const Sidebar = () => {
  return (
    <aside className="fixed bg-dark w-[12vw] h-full border-r border-gray-500/30">
      <section className="p-8 border-b border-gray-500/30">
        <Link href={"/"}>
          <img
            src="profile.png"
            alt="Jose Ossorio"
            className="rounded-full w-32 h-32 mb-4"
          />
        </Link>
        <Link
          href={"/"}
          className="text-2xl text-white hover:text-primary transition-colors duration-300"
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
  );
};

export default Sidebar;
