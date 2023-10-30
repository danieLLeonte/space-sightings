import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full">
      <h1 className="text-2xl font-bold tracking-wider">
        <Link to="/" className="text-primaryBlue">
          Space Sightings 🛸
        </Link>
      </h1>
      <Link
        to={"about"}
        className="bg-primaryBlue hover:bg-primaryBlue/90 px-3 py-1.5 rounded-3xl font-medium"
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;
