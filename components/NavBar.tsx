import Link from "next/link";
import { useRouter } from "next/router";



export default function NavBar(){
    const router = useRouter();

    return (
        <nav>
            <div className="nav_a">
                 <div className="left-link">
                 <Link href="/" className={`${router.pathname === "/" ? "active" : ""}`}>Home</Link>
                 </div>
            <div className="right-link">
            <Link href="/about" className={router.pathname === "/about" ? "active" : ""}>About</Link>
            </div>
            </div>
            <style jsx>{`
                .nav {
                    background-color:rgba(113, 128, 147,1.0);
                }
                .nav_a {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    background-color:rgba(113, 128, 147,1.0);
                    padding-top: 40px;
                    padding-bottom: 40px;
                    font-size:35px;
                }
                .active {
                    color: tomato;
                }
                .left-link {
                margin-right:130px;
                justify-content: flex-start;
                    }

            `}</style>
        </nav>
    );
}