import Navbar from "./Navbar";

const Hero = () => {
    return (
        <div className="w-full linear-gradient-bg">
            <Navbar />
            <div className="w-full flex flex-col items-center justify-center mt-4 px-11 md:px-[497px]">
                <h2 className="text-xl md:text-3xl font-bold">LEOPLUS / USDT</h2>
                <h4 className="text-lg md:text-2xl font-medium uppercase mt-2">Live Price</h4>
                <h4 className="text-2xl md:text-4xl font-medium tracking-wide mt-1">{"0.00000000000000000"}</h4>
                <p className="text-xl md:text-3xl font-medium self-start mt-1">$ {120.25586}</p>
                <img src="upwordLine.png" alt="upwordLine" />
            </div>
        </div>
    );
};

export default Hero;
