"use client";
import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
// import { MdDriveFileRenameOutline } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import Link from "next/link";
function NavBar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <nav>
      <div className="navbar">
        <Link href="/">
          <RiUserStarFill size={35} color="#404040" />
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/app">Docs</Link>
          </li>
          <li>
            <Link href="/app">Playground</Link>
          </li>
          <li>
            <Link href="mailto:snillochemingson@gmail.com">Feedback</Link>
          </li>
          <li>
            <Link href="https://www.buymeacoffee.com/collinsabrusu">
              Sponsor
            </Link>
          </li>
        </ul>
        <div className="bar">
          {navOpen ? (
            <TfiClose
              color="#404040"
              size={30}
              onClick={(e) => {
                setNavOpen(!navOpen);
              }}
            />
          ) : (
            <HiBars3
              size={35}
              onClick={(e) => {
                setNavOpen(!navOpen);
              }}
            />
          )}
        </div>
      </div>
      <ul className={navOpen ? "mobile-nav" : ""}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/app">Docs</Link>
        </li>
        <li>
          <Link href="/app">Playground</Link>
        </li>
        <li>
          <Link href="mailto:snillochemingson@gmail.com">Feedback</Link>
        </li>
        <li>
          <Link href="https://www.buymeacoffee.com/collinsabrusu">Sponsor</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
