import type { NextPage } from "next";
// Components
import FirstSection from "components/MainPage/FirstSection/FirstSection";
import SecondSection from "components/MainPage/SecondSection/SecondSection";
import ThirdSection from "components/MainPage/ThirdSection/ThirdSection";

const Home: NextPage = () => {
    return (
        <>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </>
    );
};

export default Home;
