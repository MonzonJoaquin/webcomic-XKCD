

import { motion } from "framer-motion"
import Link from 'next/link'

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '70vh', justifyContent: 'space-evenly' }}>
      <Link href={'/'}>
        <a>
          <motion.h1
            animate={{ y: [-500, 70, -10, 50, -5, 10, 0] }}
            transition={{ ease: "easeOut", duration: 1.8 }}>
              Welcome to WebComics XKCD
          </motion.h1></a>
      </Link>
      <Link href={'/latestComics'}>
        <a>
          <motion.h2
            animate={{ y: [-500, 70, -10, 50, -5, 10, 0] }}
            transition={{ ease: "easeOut", duration: 1.6 }}>
              Latest Comics
        </motion.h2>
        </a>
      </Link>
      <Link href={'/explorer'}>
        <a>
          <motion.h2
            animate={{ y: [-600, 60, -30, 50, -10, 10, 0] }}
            transition={{ ease: "easeOut", duration: 1.7 }}>
              Explorer
        </motion.h2>
        </a>
      </Link>
      <Link href={'/'}>
        <a>
          <motion.h2
            animate={{ y: [-400, 75, -15, 50, -5, 10, 0] }}
            transition={{ ease: "easeOut", duration: 1.5 }}>
              Official WebComic
        </motion.h2>
        </a>
      </Link>
    </div>
  )
}

export default Home