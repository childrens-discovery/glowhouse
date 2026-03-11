const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-blue px-4 py-3 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#" className="font-display text-xl text-white tracking-wide">
          🧪 Children's Discovery
        </a>
        <a
          href="#register"
          className="font-display rounded-pill bg-coral px-6 py-2.5 text-sm uppercase tracking-wider text-white transition-transform hover:scale-105"
        >
          Register Interest
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
