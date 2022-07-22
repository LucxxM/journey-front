import React from "react";
import "./Navbar.css";
import { useEffect } from "react";
import Map from "./../map/Map";
import Card from "../card/Card";



  
  const Navbar = () => {
    
    useEffect(() => {
      const sectionClickable = document.querySelector('#sectionTest');
      const linkClickables = document.querySelectorAll('a');
      const liRelatives = document.querySelectorAll('ul');
      
      sectionClickable.addEventListener('click', function(e) {
          if (e.target.classList.contains('clickable')) {
          }else {
              for (let i=0 ; i<liRelatives.length ; i++) {    
                  if (liRelatives[i].id !== ""){
                      liRelatives[i].classList.add('display-none');
                  }
              }
          }
      });
      
      linkClickables.forEach(link => {
          link.addEventListener('click', function(e) {
              e.preventDefault();

              for (let i=0 ; i<liRelatives.length ; i++) {    
                  if (liRelatives[i].id !== ""){
                      liRelatives[i].classList.add('display-none');
                      link.parentElement.parentElement.classList.remove('display-none');
                  }
              }
              link.nextElementSibling.classList.remove('display-none');
          });   
      });
    } 
    , []);
    return (
    <section id="sectionTest">
      <Card />
      <nav id="navbar">
       <div className="link dropup_link">
         <ul>
           <li className="liRelative">
            <a href="/" title="img"><img className="clickable" src="./icons/logo12.png" alt="" /></a>
            <ul className="dropup_menu first display-none" id="ulToDisplay">
                <li className="liRelative">
                  <a href="/" title="img"><img className="clickable" src="./icons/avionDcol.png" alt="" /></a>
                  <ul className="dropup_menu__second color-one display-none" id="ulToDisplay6">
                      <li className="hidden"><img className="clickable" src="./icones/Sans titre.png" alt="" />
                      </li>
                      <Map />
                     
                      <li className="hidden"><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                      <li className="hidden"><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                  </ul>
                </li>
                <li className="liRelative">
                  <a href="/" title="img"><img className="clickable" src="./icons/avionATri.png" alt="" /></a>
                  <ul className="dropup_menu__second color-one display-none" id="ulToDisplay7">
                  <li className="hidden"><img className="clickable" src="./icones/Sans titre.png" alt="" />
                      </li>
                      <Map />
                      
                      <li className="hidden"><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                      <li className="hidden"><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                  </ul>
                </li>
                <li className="liRelative">
                  <a href="/" title="img"><img className="clickable" src="./icones/Sans titre.png" alt="" /></a>
                  <ul className="dropup_menu__second color-one display-none" id="ulToDisplay8">
                      <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                      <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                      <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                  </ul>
                </li>
            </ul>
           </li>
           <li className="liRelative">
            <a href="/" title="img"><img className="clickable" src="./icons/calendar.png" alt="" /></a>
            <ul className="dropup_menu second display-none" id="ulToDisplay2">
              <li className="liRelative">
                <a href="/" title="img"><img className="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul className="dropup_menu__second color-two display-none" id="ulToDisplay9">
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li className="liRelative">
                <a href="/" title="img"><img className="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul className="dropup_menu__second color-two display-none" id="ulToDisplay10">
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li className="liRelative">
                <a href="/" title="img"><img className="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul className="dropup_menu__second color-two display-none" id="ulToDisplay11">
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
            </ul>
           </li>
           <li className="liRelative">
            <a href="/" title="img"><img className="clickable" src="./icons/hebergement.png" alt="" /></a>
            <ul className="dropup_menu third display-none" id="ulToDisplay3">
              <li className="liRelative">
                <a href="/" title="img"><img className="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul className="dropup_menu__second color-three display-none" id="ulToDisplay12">
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li className="liRelative">
                <a href="/" title="img"><img className="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul className="dropup_menu__second color-three display-none" id="ulToDisplay13">
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li className="liRelative">
                <a href="/" title="img"><img className="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul className="dropup_menu__second color-three display-none" id="ulToDisplay14">
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
            </ul>
           </li>
           <li className="liRelative">
            <a href="/" title="img"><img className="clickable" src="./icons/euro.png" alt="" /></a>
            <ul className="dropup_menu fourth display-none" id="ulToDisplay4">
              <li className="liRelative">
                <a href="/" title="img"><img className="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul className="dropup_menu__second color-four display-none" id="ulToDisplay15">
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li className="liRelative">
                <a href="/" title="img"><img className="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul className="dropup_menu__second color-four display-none" id="ulToDisplay16">
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li className="liRelative">
                <a href="/" title="img"><img className="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul className="dropup_menu__second color-four display-none" id="ulToDisplay17">
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
            </ul>
           </li>
           <li className="liRelative">
            <a href="/" title="img"><img className="clickable" src="./icons/people.png" alt="" /></a>
            <ul className="dropup_menu five display-none" id="ulToDisplay5">
              <li className="liRelative">
                <a href="/" title="img"><img class="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul className="dropup_menu__second color-five display-none" id="ulToDisplay18">
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li className="liRelative">
                <a href="/" title="img"><img className="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul className="dropup_menu__second color-five display-none" id="ulToDisplay19">
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li className="liRelative">
                <a href="/" title="img"><img className="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul className="dropup_menu__second color-five display-none" id="ulToDisplay20">
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img className="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
            </ul>
           </li>
         </ul>
       </div>
      </nav>
    </section>
    );
    }



    export default Navbar;