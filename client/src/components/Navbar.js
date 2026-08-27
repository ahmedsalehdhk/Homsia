import { Link, useLocation, NavLink } from "react-router-dom";
import "../App.css";
import { useEffect, useState } from "react";

const logo = "/assets/logo/Homsia.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const solid = !isHome || scrolled;
  const hamburgerDark = !isHome || scrolled || openMobileNav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMobileNav(false);
  }, [location.pathname]);

  return (
    <nav className={solid ? "navbar colorChange" : "navbar"} id="nav">
      <div className="container-site flex justify-between items-center py-6">
        <Link to="/" aria-label="Homsia — Home">
          <img
            className="logo h-10 w-24 min-w-[96px]"
            src={logo}
            alt="Homsia"
          />
        </Link>
        <ul className="nav-links gap-8 hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.to}
              className="text-sm font-medium uppercase tracking-[0.15em]"
            >
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : ""
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={openMobileNav}
          className="hamburger cursor-pointer md:hidden z-50 bg-transparent border-0 p-0"
          onClick={() => setOpenMobileNav((v) => !v)}
        >
          <div
            className={hamburgerDark ? "hamburger-dark" : "hamburger-light"}
          ></div>
          <div
            className={hamburgerDark ? "hamburger-dark" : "hamburger-light"}
          ></div>
        </button>
      </div>
      <div className={openMobileNav ? "mobile-nav-open" : "mobile-nav"}>
        <ul className="nav-links gap-10 flex flex-col md:hidden text-right">
          {navItems.map((item) => (
            <li
              key={item.to}
              className="text-base font-medium uppercase tracking-[0.15em]"
            >
              <NavLink
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpenMobileNav(false)}
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : ""
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
