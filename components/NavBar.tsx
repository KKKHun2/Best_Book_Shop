import Link from "next/link";
import { useRouter } from "next/router";



export default function NavBar(){
    const router = useRouter();
    return (
        <nav>
            <div className="nav_a">
                 <div className="left-link">
                 <Link href="/"> 
                 <div className={`${router.pathname === "/" ? "active" : ""}`}>Home</div>
                 </Link>
                 </div>
            <div className="right-link">
            <Link href="/about">
                <div className={`${router.pathname ===  "/about" ? "active" : ""}`}>About</div>
                </Link>
            </div>
            </div>
            <style jsx>{`
                .nav {
                    background-color:rgba(113, 128, 147,1.0);
                    color:black;
                }
                .nav_a {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    background-color:rgba(113, 128, 147,1.0);
                    padding-top: 40px;
                    padding-bottom: 40px;
                    font-size:35px;
                    color:black;
                }
                .active {
                    color: tomato;
                    scale:1.7;
                }
                .left-link {
                margin-right:130px;
                justify-content: flex-start;
                    }

            `}</style>
        </nav>
    );
}