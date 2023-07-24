import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <div className=" bg-slate-400  font-black uppercase">
          <ul className="navbar flex flex-col sm:flex-row p-2  sm:gap-10 sm:p-3 ">
            <li className="title italic text text-2xl  font-black text-cyan-700 drop-shadow-md  whitespace-nowrap">
              Seuss Treasury
            </li>
            <NavLink to="/">
              <li className="nav-item text-2xl cursor-pointer hover:text-white">
                {" "}
                Book
              </li>
            </NavLink>
            <NavLink to="/quote">
              <li className="nav-item text-2xl cursor-pointer hover:text-white">
                {" "}
                Quote
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
