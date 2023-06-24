import Seo from "../components/Seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

interface IMovieProps {
    list_name: string,
    display_name: string,
    list_name_encoded: string,
    rank:number,
}

function Home({ results }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
    
    return (
    <div className="container"
       >
      <Seo title="Home" />
      {results?.map((results: IMovieProps) => (
       <div
       className="book">
        <Link href={`/list/${results.list_name}`}>
        <h4>{results.list_name} &rarr; </h4></Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: flex;
          padding: 20px;
          gap: 20px;
          max-width: 100%;
          justify-content: center;
          flex-wrap: wrap;
          color:black;
          padding:10px;
        }
        .book {
          cursor: pointer;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          margin: 20px;
          box-sizing:border-box;
          padding: 40px;
          border: solid rgba(47, 54, 64,1.0) 7px;
          box-sizing:border-box;;
          border-radius:15px;
        }
        .book:hover {
          transform: scale(1.05) translateY(-10px);
        }
        .book h4 {
          font-size: 17px;
          text-align: center;
          color:black;
          padding:8px;
        }
      `}</style>
    </div>
  );
  ``;
}



export async function getServerSideProps({}: GetServerSideProps) {
  const { results } = await (
    await fetch(`http://localhost:3000/api/books`)).json();
    console.log(results)
  return {
    props: {
      results,
    },
  };
}

export default Home;