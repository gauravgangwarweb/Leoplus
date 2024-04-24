import { useState } from "react";

const BuySell = () => {
    const [buySell, setBuySell] = useState("buy");

    const handleClick = (buySell) => {
        setBuySell(buySell);
    }

    return (
        <div className="w-full py-8 px-2 md:px-4 bg-[#efeff7]">
            <div className="w-full grid grid-cols-2 gap-2">
                <button onClick={() => handleClick("buy")} className={`flex items-center justify-center text-xl py-1 font-semibold rounded-md ${buySell === "buy" ? "text-white bg-[#103047]" : "text-[#103047] bg-[#ffffff]"}`}>BUY</button>
                <button onClick={() => handleClick("sell")} className={`flex items-center justify-center text-xl py-1 font-semibold rounded-md ${buySell === "sell" ? "text-white bg-[#103047]" : "text-[#103047] bg-[#ffffff]"}`}>SELL</button>
            </div>
            {
                buySell === "buy" ? 
                <div className="mt-8">
                    <div className="bg-[#ffffff] flex justify-between px-2 py-2 rounded-md">
                        <p className="text-[#242b3e] text-xl font-bold">{"0.00000"}</p>
                        <p className="text-[#242b3e] text-xl font-bold uppercase">Usdt Amount</p>
                    </div>
                    <div className="flex justify-between">
                        <span></span>
                        <img className="mt-2 w-7 h-7 mr-1" src="exchange.png" alt="exchange" />
                    </div>
                    <div className="bg-[#ffffff] flex justify-between px-2 py-2 rounded-md mt-2">
                        <p className="text-[#242b3e] text-xl font-bold">{"0.00000"}</p>
                        <p className="text-[#242b3e] text-xl font-bold uppercase">Leoplus Recieved</p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <button className="mt-6 bg-[#079807] text-white text-xl font-bold px-14 py-1 rounded-md">BUY</button>
                        <p className="mt-2 text-[#103047] text-base font-semibold">MIN 10 To 500K USDT</p>
                    </div>
                </div> : 
                <div className="mt-8">
                    <div className="bg-[#ffffff] flex justify-between px-2 py-2 rounded-md">
                        <p className="text-[#242b3e] text-xl font-bold">{"0.00000"}</p>
                        <p className="text-[#242b3e] text-xl font-bold uppercase">Leoplus</p>
                    </div>
                    <div className="flex justify-between">
                        <span></span>
                        <img className="mt-2 w-7 h-7 mr-1" src="exchange.png" alt="exchange" />
                    </div>
                    <div className="bg-[#ffffff] flex justify-between px-2 py-2 rounded-md mt-2">
                        <p className="text-[#242b3e] text-xl font-bold">{"0.00000"}</p>
                        <p className="text-[#242b3e] text-xl font-bold uppercase">Usdt Amount</p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <button className="mt-6 bg-[#f00] text-white text-xl font-bold px-14 py-1 rounded-md">SELL</button>
                        <p className="mt-2 text-[#103047] text-base font-semibold">Min. sell To 2000 Leoplus</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default BuySell;
