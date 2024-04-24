const Navbar = () => {
  const handleConnect = (e) => {
    e.preventDefault();
  };
  return (
    <nav className="w-full flex justify-between items-center py-4 px-2 md:px-4">
      <span></span>
      <button
        className="bg-[#111e54] text-white font-medium md:font-bold px-2 py-1 rounded-md uppercase"
        onClick={handleConnect}
      >
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
