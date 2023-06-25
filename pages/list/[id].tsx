import Seo from "../../components/Seo";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";
import React from "react";

interface Detail {
  list_name: string;
  books: Book[];
}

interface Book {
  title: string;
  author: string;
  book_image: string;
  amazon_product_url: string;
}

export const getServerSideProps: GetServerSideProps<{
  books: Detail;
}> = async ({ params }: GetServerSidePropsContext) => {
  const response = await fetch(`http://localhost:3000/api/books/${params?.id}`);
  const json = await response.json();
  return { props: { books: json.results } };
};

export default function Detail({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Seo title={books.list_name} />
      <div className="wrapper">
        <span className="title">{books.list_name}</span>
      </div>
      <div className="container">
        {books.books.map((book) => (
          <div className="bookList">
            <img
              className="img"
              src={book.book_image}
              width={200}
              height={260}
            />
            <h3>
              {book.title.length < 19
                ? book.title
                : book.title.slice(0, 18) + "..."}
            </h3>
            <p>{book.author}</p>
            <a href={book.amazon_product_url}>Buy now &rarr;</a>
          </div>
        ))}
      </div>
      <style jsx>{`
        .wrapper {
          font-size: 30px;
          padding: 25px;
          gap: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
        }
        .container {
          display: grid;
          width:95vw;
          grid-template-columns: repeat(4, 1fr);
          padding: 25px;
          gap: 10px;
          justify-items: center;
        }
        .title {
          margin: 30px;
          box-sizing: border-box;
          border: solid rgba(47, 54, 64, 1) 2px;
          background-color:rgba(113, 128, 147,1.0);
          border-radius: 10px;
        }
        .bookList {
          border: solid rgba(47, 54, 64, 1) 7px;
          box-sizing: border-box;
          padding: 20px;
          box-shadow: 12px 12px 2px 1px rgba(47, 54, 64, 1);
          margin: 20px;
          background: #f8f8f8;
          cursor: pointer;
        }
        .bookList:hover {
          transform: scale(1.05) translateY(-10px);
        }
        .bookList img {
          border-radius: 10px;
        }
        .bookList h3 {
          margin-top: 15px;
          font-size: 15px;
        }
        .bookList p {
          margin-top: -13px;
          font-size: 13px;
        }
        .bookList a {
          margin-top: 25px;
          font-size: 20px;
          color: black;
        }
      `}</style>
   </>
  );
}
