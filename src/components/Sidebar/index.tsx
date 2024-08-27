import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";

import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/avatar.jpg";

import { menu } from "../../assets/data/menu";

import "./Sidebar.css";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (e: any) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<string>("");

  return (
    <div className="sidebar" style={{ width: isOpen ? "300px" : "80px" }}>
      <BsArrowLeftShort
        className="sidebar-arrow"
        onClick={() => setIsOpen((prev: boolean) => !prev)}
        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
      />
      <img src={logo} alt="logo" className={!isOpen ? "logo" : ""} />
      <ul className="menu-links">
        {menu.map((item) => {
          const Icon = item?.icon;

          return (
            <>
              <li key={item.id} className="menu-links-item">
                {item?.icon ? <Icon /> : null}
                <p style={{ display: isOpen ? "block" : "none" }}>
                  {item.label}
                </p>
                {item?.subMenu ? (
                  <BsChevronDown
                    className="menu-down-arrow"
                    onClick={() =>
                      isSubmenuOpen === item?.label
                        ? setIsSubmenuOpen("")
                        : setIsSubmenuOpen(item?.label)
                    }
                    style={{
                      transform: isSubmenuOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                ) : null}
              </li>
              {item?.subMenu && isSubmenuOpen === item.label ? (
                <ul
                  className="submenu-links"
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  {item?.subMenuItems?.map((subItem) => (
                    <li key={subItem.id} className="submenu-links-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu-link menu-active-link" : "menu-link"
                        }
                        to={subItem.path}
                      >
                        {subItem.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </>
          );
        })}
      </ul>
      <div className="sidebar-footer">
        <Link to="/logout">
          <MdOutlineLogout />
        </Link>
        <div className="profile-container">
          <div className="profile-info">
            <img src={avatar} alt="avatar" />
            <div style={{ display: isOpen ? "block" : "none" }}>
              <h2>Dave Adame</h2>
              <small>Founder</small>
            </div>
            <div className="profile-circle" />
          </div>
        </div>
      </div>
    </div>
  );
};
