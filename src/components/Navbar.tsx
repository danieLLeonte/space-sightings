const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full">
      <h1 className="text-2xl font-bold tracking-wider">
        <a
          href="/"
          className="text-primaryBlue"
          aria-label="Home"
          title="Home"
          onClick={(e) => {
            window.location.href = "/";
            e.preventDefault();
          }}
        >
          Space Sightings 🛸
        </a>
      </h1>
      <a
        href="/about"
        className="bg-primaryBlue hover:bg-primaryBlue/90 px-3 py-1.5 rounded-3xl"
      >
        About
      </a>
    </nav>
  );
};

export default Navbar;
