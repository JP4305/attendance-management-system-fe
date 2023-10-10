
  "use client";
  import styles from "./nav.module.css";
  
  import Link from "next/link";
  import { useEffect, useRef, useState } from "react";
import DropDown from "../dropdown";
  
  
  const links = [
	{ title: "Home", link: "/" },
	{ title: "Products", link: "/products" },
  ];
  
  const Nav = () => {
	const [navbar, setNavbar] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	// const [shakeLogo, setShakeLogo] = useState(false);
  
	const sections = useRef([]);
	const [activeSection, setActiveSection] = useState("home");
  
	const handleScroll = () => {
	  const currentScrollPos = window.scrollY;
	  const scrollingUp = currentScrollPos < prevScrollPos;
  
	  setPrevScrollPos(currentScrollPos);
	  setVisible(scrollingUp || currentScrollPos === 0);
  
	  let newActiveSection = null;
  
	  sections.current.forEach((section) => {
		const sectionOffsetTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
  
		if (
		  currentScrollPos >= sectionOffsetTop &&
		  currentScrollPos < sectionOffsetTop + sectionHeight
		) {
		  newActiveSection = section.getAttribute("data-section");
		}
	  });
  
	  console.log("Active Section:", newActiveSection);
	  setActiveSection(newActiveSection);
	};
  
	const scrollToSection = (sectionId) => {
	  const section = document.getElementById(sectionId);
	  if (section) {
		window.scrollTo({
		  top: section.offsetTop,
		  behavior: "smooth",
		});
	  }
	  setNavbar(false);
	};
  
	useEffect(() => {
	  window.addEventListener("scroll", handleScroll);
	  sections.current = document.querySelectorAll("[data-section]");
  
	  return () => {
		window.removeEventListener("scroll", handleScroll);
	  };
	}, [prevScrollPos]);
  
	
  
	return (
	  <nav
		className={`${styles.nav} shadow ${
		  visible ? styles.visible : styles.hidden
		}`}
	  >
		<div className={styles.main}>
		  <div className={styles.hamburger}>
			<Link href="/" className="text-blue-600 text-xl font-bold">
			TSC
			</Link>
			<div className={styles.hamburgericon}>
			  <button
				className={styles.button}
				title="hamburger menu toggler"
				onClick={() => setNavbar(!navbar)}
			  >
				{navbar ? (
				  <svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6 text-black"
					viewBox="0 0 20 20"
					fill="currentColor"
				  >
					<path
					  fillRule="evenodd"
					  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					  clipRule="evenodd"
					/>
				  </svg>
				) : (
				  <svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6 text-black"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				  >
					<path
					  strokeLinecap="round"
					  strokeLinejoin="round"
					  d="M4 6h16M4 12h16M4 18h16"
					/>
				  </svg>
				)}
			  </button>
			</div>
		  </div>
		  <div>
			<div className={`${styles.top} ${navbar ? "flex" : "hidden"}`}>
			  <ul className={styles.ul}>
				{links.map((item, index) => {
				  return (
					<Link href={item.link} key={index}>
					  <button className={`${styles.li} `}>{item?.title}</button>
					</Link>
				  );
				})}
				<li className=" gap-3 text-xl invisible md:visible list-non ">
				  <DropDown />
				</li>
			  </ul>
			</div>
		  </div>
		</div>
	  </nav>
	);
  };
  
  export default Nav;
  