import fs from 'fs/promises'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Image from 'next/image'
import PageLayout from '../components/pageLayout'

interface Props {
  latestComics : Array<{
    month: string,
    num: number,
    link: string,
    year: string,
    news: string,
    safe_title: string,
    transcript: string,
    alt: string,
    img: string,
    title: string,
    day: string,
    width: number,
    height: number
  }>
}

function Home({latestComics}: Props) {
  return (
    <PageLayout title={'Latest Comics'}>
      <div> 
        <section style={{display: 'grid', gridTemplateColumns: 'auto auto auto', justifyContent: 'center', justifyItems: 'center', alignItems: 'center'}}>
        {latestComics.map(comic =>
          <figure style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Link href={`./comic/${comic.num}`} key={comic.num}>
              <Image src={comic.img} width={comic.width} height={comic.height}></Image>
            </Link>
            <figcaption style={{margin: '5px'}}>{comic.title}</figcaption>
          </figure>
        )}
        </section>
      </div>
    </PageLayout>
  )
}

export default Home

export async function getStaticProps(){
  const files = await fs.readdir('./comics/list_comics')
  const latestFiles = files.slice(-10, files.length)


  const promisesReadFiles = latestFiles.map(async(file)=>{
    const content = await fs.readFile(`./comics/list_comics/${file}`, 'utf-8')
    return JSON.parse(content)
  })

  const latestComics = await Promise.all(promisesReadFiles)
  
  return {
    props: {
      latestComics
    }
  }
}
