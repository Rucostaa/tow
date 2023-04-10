import styled from "styled-components";
import bach from "../assets/imgs/bach.jpeg";

const Wrapper = styled.main`
  html {
    font-size: 10px;
    font-family: "Montserrat", sans-serif;
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dashboard {
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;
    width: 74vh;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  p {
    color: black;
    font-size: 1.4rem;
    margin-top: 5px;
    line-height: 2.5rem;
    font-weight: 300;
    letter-spacing: 0.05rem;
  }
  .gridinputcontainer {
    display: grid;
    font-size: 2rem;
    width: 40vw;
    margin-top: 30vh;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #9c9c9c;
    background-color: #eaeaea;
    box-shadow: 0px 0px 5px 0 #0000002c;
    padding: 30px;
  }
  .gridtemplate {
    display: grid;
    width: 100%;
  }
  .inputcontainer {
    margin-top: 15vh;
    display: flex;
    width: 85vw;
    margin-left: auto;
    margin-right: auto;
  }
  .hdr {
    width: 100%;
    display: grid;
    justify-content: space-between;
  }
  .mapContainer {
    margin-left: auto;
    margin-right: auto;
    width: 60vw;
    height: 50vh;
  }
  #map {
    float: left;
    width: 55vw;
    height: 100%;
  }
  .rightSidebar {
    min-width: 35vw;
    background-color: white;
    height: 100%;
  }
  .sideBarLinks {
    text-align: center;
    font-size: 1.5rem;
    display: grid;
    box-shadow: #485563;
  }
  #grad1 {
    background-color: transparent;
  }
  .second .third .fourth .fiveth {
    display: none;
  }
  .first {
    display: grid;
  }
  .section-title {
    font-size: 4rem;
    font-weight: 300;
    color: black;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;
  }
  .section-title span {
    color: crimson;
  }

  .cta {
    display: inline-block;
    padding: 10px 30px;
    color: white;
    background-color: transparent;
    border: 2px solid crimson;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-top: 30px;
    transition: 0.3s ease;
    transition-property: background-color, color;
  }
  .cta:hover {
    color: white;
    background-color: crimson;
  }

  /* Header section */
  #header {
    position: fixed;
    z-index: 1000;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 90%);
    height: 10vh;
    left: 0;
    top: 0;
    width: 100vw;
  }
  #header .header {
    width: 100vw;
  }
  #header .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 15vh;
    max-width: 1300px;
    padding: 0 10px;
  }
  #header .nav-list ul {
    list-style: none;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    overflow-x: hidden;
    transition: 0.5s ease left;
  }
  #header .nav-list ul.active {
    left: 0%;
  }
  #header .nav-list ul a {
    font-size: 2.5rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    display: block;
    text-align: center;
    margin-right: 6px;
  }
  #header .nav-list ul a::after {
    content: attr(data-after);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    color: rgba(240, 248, 255, 0.021);
    font-size: 13rem;
    letter-spacing: 50px;
    z-index: -1;
    transition: 0.3s ease letter-spacing;
  }
  #header .nav-list ul li:hover a::after {
    transform: translate(-50%, -50%) scale(1);
    letter-spacing: initial;
  }
  #header .nav-list ul li:hover a {
    color: crimson;
  }
  #header .hamburger {
    height: 60px;
    width: 60px;
    display: inline-block;
    border: 3px solid white;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    cursor: pointer;
    transform: scale(0.8);
    margin-right: 20px;
  }
  #header .hamburger:after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 3px solid white;
    animation: hamburger_puls 1s ease infinite;
  }
  #header .hamburger .bar {
    height: 2px;
    width: 30px;
    position: relative;
    background-color: white;
    z-index: -1;
  }
  #header .hamburger .bar::after,
  #header .hamburger .bar::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    background-color: white;
    transition: 0.3s ease;
    transition-property: top, bottom;
  }
  #header .hamburger .bar::after {
    top: 8px;
  }
  #header .hamburger .bar::before {
    bottom: 8px;
  }
  #header .hamburger.active .bar::before {
    bottom: 0;
  }
  #header .hamburger.active .bar::after {
    top: 0;
  }
  /* End Header section */

  /* Hero Section */
  #hero {
    padding: 0;
    height: 100vh;
    background-image: url(${bach});
    background-size: cover;
    background-position: top center;
    position: relative;
    z-index: 1;
  }
  .inline {
    display: flex;
  }
  .leftSidebar {
    left: 0;
    width: 25vw;
    height: 100vh;
    border: #333;
    box-shadow: #485563;
  }

  #hero::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.7;
    z-index: -1;
  }
  #hero .hero {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 50px;
    justify-content: flex-start;
  }
  #hero h1 {
    display: block;
    width: fit-content;
    font-size: 4rem;
    position: relative;
    color: transparent;
    animation: text_reveal 0.5s ease forwards;
    animation-delay: 1s;
  }
  .mt {
    margin-top: 10vh;
  }
  #hero h1:nth-child(1) {
    animation-delay: 1s;
  }
  #hero h1:nth-child(2) {
    animation-delay: 2s;
  }
  #hero h1:nth-child(3) {
    animation: text_reveal_name 0.5s ease forwards;
    animation-delay: 3s;
  }
  #hero h1 span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: crimson;
    animation: text_reveal_box 1s ease;
    animation-delay: 0.5s;
  }
  #hero h1:nth-child(1) span {
    animation-delay: 0.5s;
  }
  #hero h1:nth-child(2) span {
    animation-delay: 1.5s;
  }
  #hero h1:nth-child(3) span {
    animation-delay: 2.5s;
  }

  /* End Hero Section */

  /* Services Section */
  #services .services {
    flex-direction: column;
    text-align: center;
    max-width: 90vw;
    margin: 0 auto;
    padding: 100px 0;
  }
  #services .service-top {
    max-width: 500px;
    margin: 0 auto;
  }
  #services .service-bottom {
    display: grid;
    grid-template-columns: 240px 240px 240px;

    margin-top: 50px;
  }
  #services .service-item {
    display: block;
    flex-direction: column;
    text-align: center;
    padding: 30px;
    border-radius: 10px;
    background-image: url("../imgs/bach.jpeg");
    background-size: cover;
    margin: 10px 5%;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  #services .service-item::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    opacity: 0.9;
    z-index: -1;
  }
  #services .service-bottom .icon {
    height: 80px;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
  #services .service-item h2 {
    font-size: 2rem;
    color: white;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  #services .service-item p {
    color: white;
    text-align: center;
  }
  /* End Services Section */

  /* contact Section */
  #contact .contact {
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
  #contact .contact-items {
    /* max-width: 400px; */
    width: 100%;
  }
  #contact .contact-item {
    width: 80%;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 18px 0 #0000002c;
    transition: 0.3s ease box-shadow;
  }
  #contact .contact-item:hover {
    box-shadow: 0px 0px 5px 0 #0000002c;
  }
  #contact .icon {
    width: 70px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  #contact .contact-info h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 5px;
  }
  #contact .contact-info h2 {
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 500;
  }
`;
export default Wrapper;
