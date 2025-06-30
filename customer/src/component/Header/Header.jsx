
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./header.css"
import { useSelector } from "react-redux";
import axios from "axios";


const menu = [
  {
    id: 1,
    menu: "home",
    menupath: "/",
    ddmenu: [
      {
        id: 101,
        ddname: "our speciality",
        ddpath: "/speciality",
      },
      {
        id: 102,
        ddname: "about page",
        ddpath: "/homeabout",
      },
      {
        id: 103,
        ddname: "today offer",
        ddpath: "/offer",
      },
      {
        id: 104,
        ddname: "our information",
        ddpath: "/our info",
      },
      {
        id: 105,
        ddname: "tips",
        ddpath: "/tips",
      },
    ]
  },
  {
    id: 2,
    menu: "menu",
    menupath: "./products"
  },

  {
    id: 3,
    menu: "gallery",
    menupath: "./gallery"
  },
  {
    id: 4,
    menu: "about",
    menupath: "./about"
  },
  {
    id: 5,
    menu: "contact",
    menupath: "./contact"
  }
]
const Header = () => {


  const quantity = useSelector((state) => state.cart.totleQuantity);
  const [isActive, setIsActive] = useState(false);
  const [isLogin, setIsLogin] = useState(false)
  const [isUserMenuActive, setIsUserMenuActive] = useState(false); // New state for user menu
  const checkisLogin = () => {
    const data = localStorage.getItem("restaurantLogin");
    if (data) {
      setIsLogin(true);
    }

  }
  const logoutHandle = async () => {
    const token = localStorage.getItem("restaurantLogin");
    await axios.post('http://localhost:8000/api/user/logout', { token })
    .catch(err=> console.log(err));
    localStorage.removeItem("restaurantLogin");
    window.location.reload();
  }

  const showMenu = () => {
    setIsActive(!isActive);
  };
  const toggleUserMenu = () => {
    setIsUserMenuActive(!isUserMenuActive); // Toggle user menu state
  };
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    checkisLogin();
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={scrollHeader ? "scrolled" : ""}>
      <div className="container">
        <div className="row">
          <div className="border">
          </div>
          <div className="content flex">
            <div className="logo flex">
              <div className="image">
                <NavLink to="/"><img src="/Image/logo.png" alt="" /></NavLink>

              </div>
            </div>
            <div className="menu">
              <div className={`btn flex ${isActive ? 'active' : ''}`} onClick={showMenu}>
                <span><i className="fa-solid fa-globe"></i></span>
              </div>
              <ul className={isActive ? 'active' : ''} id="menu">
                {menu.map((val) => {
                  const { id, menu, menupath, ddmenu } = val;

                  return (
                    <li key={id}><NavLink to={menupath}>{menu}</NavLink>
                      {
                        ddmenu &&
                        <div className="drop-down">
                          <ul>
                            {
                              ddmenu.map((e) => {
                                const { id, ddname, ddpath, sddmenu, arrow } = e;
                                return (<li key={id} className="flex"><NavLink to={ddpath}>{ddname}</NavLink>{arrow}
                                  {
                                    sddmenu &&
                                    <div className="subdrop-down">
                                      <ul>
                                        {sddmenu.map((sddval) => {
                                          const { id, sddname, sddpath } = sddval;
                                          return (<li key={id}><NavLink to={sddpath}>{sddname}</NavLink></li>)
                                        })}

                                      </ul>
                                    </div>
                                  }
                                </li>)
                              })
                            }
                          </ul>
                        </div>
                      }
                    </li>
                  );

                })}
              </ul>
            </div>
            {
              isLogin ? (
                <div className="login-done flex">
                  <div className="user-btn" onClick={toggleUserMenu}>
                  <i class="fa-solid fa-user-tie"></i>
                  </div>
                  <ul className={isUserMenuActive ? 'active' : ''}>
                  <li><Link to="/myorders">orders</Link></li>
                  <li><Link to="/" onClick={logoutHandle}><i class="fa-solid fa-arrow-right-from-bracket"></i>Logout</Link></li>                   
                  </ul>
                  <div className="cart-btn">
                  <Link to="/cartlist"><i className="fa-solid fa-cart-shopping"></i>{quantity}</Link>
                  </div>
                </div>
              ) : (

                <div className="buy flex">
                  <NavLink to="/login"><button>Login</button></NavLink>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;