import Link from "next/link";

function NavBar() {
  return (
    <>
      <nav>
        <ul style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
          <li style={{listStyleType: 'none', marginLeft: '10px'}}><Link href={'/latestComics'}>Latest Comics</Link></li>
          <li style={{listStyleType: 'none', marginLeft: '10px'}}><Link href={'/explorer'}>Explorer</Link></li>
          <li style={{listStyleType: 'none', marginLeft: '10px'}}><Link href={'/'}>XKCD official</Link></li>
          <li style={{listStyleType: 'none', marginLeft: '10px'}}><Link href={'/'}>About me</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
