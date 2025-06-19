import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import logo from "./assets/logo.png";
import PinkIce from "./assets/PinkIce.png";
import BlueIce from "./assets/BlueIce.png";
import BrownIce from "./assets/BrownIce.png";
import GreenIce from "./assets/GreenIce.png";

const iceCreams = [
  { name: "Pink", img: PinkIce, color: "#ffd1e3" },
  { name: "Blue", img: BlueIce, color: "#b3e0ff" },
  { name: "Brown", img: BrownIce, color: "#e0c3a3" },
  { name: "Green", img: GreenIce, color: "#b6e5c3" },
];

const gradients = [
  "radial-gradient(ellipse 120% 100% at 100% 100%, #FF6CEE 0%, #BE128D 100%)", // Pink
  "radial-gradient(ellipse 120% 100% at 100% 100%, #47C4F6 0%, #236CDA 100%)", // Blue
  "radial-gradient(ellipse 120% 100% at 100% 100%, #E0BDB0 0%, #9C5C3F 100%)", // Brown
  "radial-gradient(ellipse 120% 100% at 100% 100%, #47F66E 0%, #2A9949 100%)", // Green
];

function App() {
  const [selected, setSelected] = useState(0);
  const [prev, setPrev] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [coneAnim, setConeAnim] = useState(false);
  const [coneKey, setConeKey] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (selected !== prev) {
      setIsTransitioning(true);
      const timeout = setTimeout(() => {
        setPrev(selected);
        setIsTransitioning(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [selected, prev]);

  useEffect(() => {
    if (coneAnim) return;
    setConeAnim(true);
    const timeout = setTimeout(() => {
      setConeKey(selected); // change cone image after move back
      setConeAnim(false); // bring cone back in
    }, 1000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [selected]);

  const flavorNames = [
    "Strawberry cone",
    "Blueberry cone",
    "Chocolate cone",
    "Evergreen cone",
  ];

  return (
    <div className="main-bg-wrapper">
      {/* Crossfade backgrounds only during transition */}
      {isTransitioning ? (
        <>
          <motion.div
            className="main-bg-bg"
            style={{
              background: gradients[prev],
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 0,
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.div
            className="main-bg-bg"
            style={{
              background: gradients[selected],
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 0,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </>
      ) : (
        <motion.div
          className="main-bg-bg"
          style={{
            background: gradients[selected],
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
          }}
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }}
        />
      )}
      <div
        className="main-bg-content"
        style={{ zIndex: 1, position: "relative" }}
      >
        <header className="header">
          <img src={logo} alt="logo" className="logo" />
          <div className="hamburger" onClick={() => setNavOpen((o) => !o)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav
            className={`navbar${navOpen ? " open" : ""}`}
            onClick={() => setNavOpen(false)}
          >
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#delivery">Delivery</a>
            <a href="#contact">Contact</a>
            <div className="order-btn">Order your Ice-cream</div>
          </nav>
          {navOpen && (
            <div
              className="mobile-backdrop"
              onClick={() => setNavOpen(false)}
            ></div>
          )}
        </header>
        <div className="content">
          <div className="icecream-texts">
            <div className="icecream-title">icecream</div>
            <div className="icecream-flavor">
              <b>{flavorNames[selected]}</b>
            </div>
            <div className="icecream-desc">
              Embark on a culinary journey of delight as you immerse yourself in
              our artisan-crafted ice cream collection—each flavor a story, each
              scoop an unforgettable chapter in your sweet odyssey!
              <br />
              <br />
              Indulge in a world of imagination, where every scoop unveils{" "}
              <br />a new taste adventure! Choose your favorite.
            </div>
          </div>
          <div className="icecream-options">
            {iceCreams.map((ice, idx) => (
              <div
                key={ice.name}
                className={`icecream-box${selected === idx ? " selected" : ""}`}
                onClick={() => setSelected(idx)}
              >
                <div className="ice-img-wrap">
                  <img src={ice.img} alt={ice.name} className="ice-img" />
                </div>
              </div>
            ))}
          </div>
          <motion.div
            className="big-cone-wrap"
            initial={false}
            animate={
              coneAnim
                ? { top: "30%", left: "70%", opacity: 0 }
                : { top: "10%", left: "60%", opacity: 1 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ position: "absolute" }}
          >
            <img
              key={coneKey}
              src={iceCreams[coneKey].img}
              alt="Big Cone"
              className="big-cone"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
