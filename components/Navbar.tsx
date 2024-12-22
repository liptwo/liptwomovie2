"use client";
import { Search } from "@mui/icons-material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [dropDown, setDropDown] = useState<boolean>(false);

  const [isScroll, setIsScroll] = useState<boolean>(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Hàm return được gọi khi component bị hủy hoặc khi effect được gọi lại
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${isScroll && "bg-black-1"} `}>
      <Link href="/">
        <img src="/assets/logo.png" alt="logo" className="logo" />
      </Link>

      <div className="nav-links">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/my-list" className="nav-link">
          My List
        </Link>
      </div>

      <div className="nav-right">
        <div className="search">
          <input
            type="text"
            placeholder="Search Movie..."
            className="input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button disabled={search === ""}>
            <Search
              className="icon"
              onClick={() => router.push(`/search/${search}`)}
            />
          </button>
        </div>
        <img
          src="/assets/profile_icon.jpg"
          alt="profile"
          className="profile"
          onClick={() => setDropDown(!dropDown)}
        />
        {dropDown && (
          <div className="dropdown-menu">
            <Link href="/">Home</Link>
            <Link href="/my-list">My List</Link>
            <a href="Log Out">Log Out</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
