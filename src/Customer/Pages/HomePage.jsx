import React from "react";
import MainCarousel from "../Components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../Components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_tshirts } from "../Data/mens_tshirts";

const HomePage = () => {
    return (
        <div>
            <MainCarousel classname/>

            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel data={mens_tshirts} sectionName={"Men's Tshirts"}/>
                <HomeSectionCarousel data={mens_tshirts} sectionName={"Men's shirts"}/>
                <HomeSectionCarousel data={mens_tshirts} sectionName={"Men's Kurta"}/>
                <HomeSectionCarousel data={mens_tshirts} sectionName={"Women's Saree"}/>
                <HomeSectionCarousel data={mens_tshirts} sectionName={"Women's Dress"}/>
            </div>
        </div>
    )
}

export default HomePage;