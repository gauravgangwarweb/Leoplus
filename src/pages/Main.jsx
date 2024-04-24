import BuySell from "../components/BuySell";
import FollowUs from "../components/FollowUs";
import Hero from "../components/Hero";
import PersonalStats from "../components/PersonalStats";
import Timer from "../components/Timer";

const Main = () => {
    return (
        <div className="w-full ">
            <Hero />
            <BuySell />
            <PersonalStats />
            <Timer />
            <FollowUs />
        </div>
    );
};

export default Main;
