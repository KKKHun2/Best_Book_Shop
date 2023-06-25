import Seo from "../components/Seo";

export default function Potato() {
  return (
    <div>
      <Seo title="About" />
      <div className="about">
        <h1>
          Welcome to the official explorer for The New York Times Best Seller
          List Explorer. <br /> We Hope You Enjoy Your Stay!
        </h1>
      </div>
      <style jsx>{`
        .about h1 {
          display: flex;
          color: black;
          margin: 20px 0px 0px 100px;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
