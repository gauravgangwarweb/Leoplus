const Timer = () => {
    return (
        <div className="flex flex-col px-5">
            <h4 className="text-[#07144c] font-medium uppercase text-center ">Time Left to trade before token lapse</h4>
            <div className="mt-3 w-full flex items-center justify-center gap-3 bg-[#efeff7] text-[#07144c] py-2 rounded-md">
                <div className="flex flex-col items-center justify-center gap-1">
                    <p className="font-semibold text-2xl">14</p>
                    <p className="font-semibold">Days</p>
                </div>
                <p className="font-semibold">:</p>
                <div className="flex flex-col items-center justify-center gap-1">
                    <p className="font-semibold text-2xl">23</p>
                    <p className="font-semibold">Hours</p>
                </div>
                <p className="font-semibold">:</p>
                <div className="flex flex-col items-center justify-center gap-1">
                    <p className="font-semibold text-2xl">38</p>
                    <p className="font-semibold">Minutes</p>
                </div>
                <p className="font-semibold">:</p>
                <div className="flex flex-col items-center justify-center gap-1">
                    <p className="font-semibold text-2xl">14</p>
                    <p className="font-semibold">Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Timer;
