import Link from "next/link";

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li><Link href={'/index'}>Latest Comics</Link></li>
          <li><Link href={'/index'}>Explorer</Link></li>
          <li><Link href={'/index'}>XKCD official</Link></li>
          <li><Link href={'/index'}>About me</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
