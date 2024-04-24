const PersonalStats = () => {
  return (
    <div className="w-full py-8 px-2 md:px-4">
      <h3 className="text-[#103047] text-center text-2xl font-extrabold tracking-wide uppercase">
        Personal statistics
      </h3>
      <div className="mt-8 w-full flex justify-between text-[#103047] border-b-2 border-black py-2">
        <div className="border border-black p-2 rounded-full">
          <img
            className="w-9 h-9"
            src="leoplus.png"
            alt="leoplus"
          />
        </div>
        <p className="text-xl font-bold uppercase">Leoplus Balance</p>
        <p className="text-xl font-bold uppercase self-end">{"0.0000"}</p>
      </div>
      <div className="mt-8 w-full flex justify-between text-[#103047] border-b-2 border-black py-2">
        <div className="border border-black p-2 rounded-full flex items-center justify-center">
          <img
            className="w-9 h-9"
            src="portfolio.png"
            alt="portfolio"
          />
        </div>
        <p className="text-xl font-bold uppercase">Portfolio (Usdt)</p>
        <p className="text-xl font-bold uppercase self-end">{"0.0000"}</p>
      </div>
      <div className="mt-8 w-full flex justify-between text-[#103047] border-b-2 border-black py-2">
        <div className="border border-black p-2 rounded-full flex items-center justify-center">
          <img
            className="w-9 h-9"
            src="deposited.png"
            alt="deposited"
          />
        </div>
        <p className="text-xl font-bold uppercase">Total Deposited</p>
        <p className="text-xl font-bold uppercase self-end">{"0.0000"}</p>
      </div>
      <div className="mt-8 w-full flex justify-between text-[#103047] border-b-2 border-black py-2">
        <div className="border border-black p-2 rounded-full flex items-center justify-center">
          <img
            className="w-9 h-9"
            src="withdrawn.png"
            alt="withdrawn"
          />
        </div>
        <p className="text-xl font-bold uppercase">Total Withdrawn</p>
        <p className="text-xl font-bold uppercase self-end">{"0.0000"}</p>
      </div>
      <div className="mt-8 w-full flex justify-between text-[#103047] border-b-2 border-black py-2">
        <div className="border border-black p-2 rounded-full flex items-center justify-center">
          <img
            className="w-9 h-9"
            src="withdrawn-limit.png"
            alt="withdrawn-limit"
          />
        </div>
        <p className="text-xl font-bold uppercase">Withdrawal Limit</p>
        <p className="text-xl font-bold uppercase self-end">{"0.0000"}</p>
      </div>
      <div className="mt-8 w-full flex justify-between text-[#103047] border-b-2 border-black py-2">
        <div className="border border-black p-2 rounded-full flex items-center justify-center">
          <img
            className="w-9 h-9"
            src="referred-users.png"
            alt="referred-users"
          />
        </div>
        <p className="text-xl font-bold uppercase">Reffered Users</p>
        <p className="text-xl font-bold uppercase self-end">{"0.0000"}</p>
      </div>
      <div className="mt-8 w-full flex justify-between text-[#103047] border-b-2 border-black py-2">
        <div className="border border-black p-2 rounded-full flex items-center justify-center">
          <img
            className="w-9 h-9"
            src="referred-reward.png"
            alt="referred-users"
          />
        </div>
        <p className="text-xl font-bold uppercase">Reffered Deposit</p>
        <p className="text-xl font-bold uppercase self-end">{"0.0000"}</p>
      </div>
      <div className="mt-8 w-full flex justify-between text-[#103047] border-b-2 border-black py-2">
        <div className="border border-black p-2 rounded-full flex items-center justify-center">
          <img
            className="w-9 h-9"
            src="lapsed-tokens.png"
            alt="lapsed-tokens"
          />
        </div>
        <p className="text-xl font-bold uppercase">Lapsed Tokens</p>
        <p className="text-xl font-bold uppercase self-end">{"0.0000"}</p>
      </div>
    </div>
  );
};

export default PersonalStats;
