import PageLayout from "../../components/pageLayout";
import Image from "next/image";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { readFile, stat } from "fs/promises";
interface Props {
    title: string;
    num: number;
    img: string;
    height: number;
    width: number;
    alt: string;
    year: string;
    day: string;
    month: string;
}


export default function Comic({ title, num, img, height, alt, year, month, day, width }: Props)  {
    return (
        <PageLayout title="Comic">
            <h2>{title}</h2>
            <figure>
                <Image src={img} alt={alt} width={width} height={height} />
                <figcaption>date: {`${month}/${day}/${year}`}</figcaption>
            </figure>
        </PageLayout>
    );
};

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: "2540" } }],
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async (context):Promise<GetStaticPropsResult<Props>> => {
    const id = context.params.id
    const file = await readFile(`./comics/list_comics/${id}.json`, "utf-8");
    const comic = await JSON.parse(file);

    const idNumber = +id;
    const prevId = idNumber - 1;
    const nextId = idNumber + 1;

    const [resultPrev, resultNext] = await Promise.allSettled([
        stat(`./comic/list_comics/${prevId}`),
        stat(`./comic/list_comics/${nextId}`)
    ])

    return {
        props: { ...comic },
    };
}
