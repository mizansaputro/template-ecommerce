import React, {Fragment, useEffect} from "react";
import "./Home.css"
import Banner from "./Banner/Banner";
import Content from "./Content/Content";




const Home = ({items, getAnItem}) =>{
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [items]);
    
    return (
            <Fragment>
                <Banner/>
                {<Content items={items}/>}
            </Fragment>
    );
}
export default Home;