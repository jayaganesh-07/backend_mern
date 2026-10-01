
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-md">

     
      <h1 className="text-2xl font-bold text-pink-600">
        AllSports
      </h1>

      
      <div className="flex gap-8 text-gray-700 font-semibold">

        <NavLink
          to="/"
          className="hover:text-pink-600"
        >
          Allsports
        </NavLink>

        <NavLink
          to="/men"
          className="hover:text-pink-600"
        >
          Men
        </NavLink>

        <NavLink
          to="/women"
          className="hover:text-pink-600"
        >
          Women
        </NavLink>

        <NavLink
          to="/kids"
          className="hover:text-pink-600"
        >
          Kids
        </NavLink>

      </div>

      
      <div className="text-sm text-gray-600">
        <p className="font-semibold text-gray-800">
          Delivery to
        </p>

        <p>
          Bangalore Central, Bangalore, 560001
        </p>

        <p>
          Karnataka
        </p>
      </div>

    </nav>
  )
}

export default Navbar

