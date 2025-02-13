import Link from "next/link";

const NavgationBar = () => {
  return (
    <div className="fixed top-0 h-[60px] left-0 right-0 shadow flex justify-center">
      <div className="flex justify-between items-center sm:max-w-5xl w-full">
        <p>Son</p>
        <ul className="flex items-center gap-3">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavgationBar;
