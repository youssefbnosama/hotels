import { useEffect } from "react";
import Navbar from "./homeComponents/Navbar";
import Content from "./homeComponents/Content";
import Countries from "./homeComponents/Countries";
import Inspiration from "./homeComponents/Inspiration";
import Hotels from "./homeComponents/Hotels";
import Download from "./homeComponents/Download";
import Explore from "./homeComponents/Explore";
export default function Home(){
    return(
        <div className="home w-full min-h-screen">
            <Navbar />
            <Content />
            <Countries />
            <Inspiration />
            <Hotels />
            <Download />
            <Explore />
        </div>
    )
}