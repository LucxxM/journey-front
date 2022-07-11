import React from "react";
import "./Navbar.css"

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

const Navbar = () => {

    return (
    <section id="sectionTest">
      <nav id="navbar">
       <div class="link dropup_link">
         <ul>
           <li class="liRelative">
            <a title="img"><img class="clickable" src="./icons/logo12.png" alt="" /></a>
            <ul class="dropup_menu first display-none" id="ulToDisplay">
                <li class="liRelative">
                  <a title="img"><img class="clickable" src="./icons/avionDcol.png" alt="" /></a>
                  <ul class="dropup_menu__second color-one display-none" id="ulToDisplay6">
                      <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                      <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                      <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                  </ul>
                </li>
                <li class="liRelative">
                  <a title="img"><img class="clickable" src="./icons/avionATri.png" alt="" /></a>
                  <ul class="dropup_menu__second color-one display-none" id="ulToDisplay7">
                      <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                      <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                      <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                  </ul>
                </li>
                <li class="liRelative">
                  <a title="img"><img class="clickable" src="./icones/Sans titre.png" alt="" /></a>
                  <ul class="dropup_menu__second color-one display-none" id="ulToDisplay8">
                      <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                      <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                      <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                  </ul>
                </li>
            </ul>
           </li>
           <li class="liRelative">
            <a title="img"><img class="clickable" src="./icons/calendar.png" alt="" /></a>
            <ul class="dropup_menu second display-none" id="ulToDisplay2">
              <li class="liRelative">
                <a title="img"><img class="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul class="dropup_menu__second color-two display-none" id="ulToDisplay9">
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li class="liRelative">
                <a title="img"><img class="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul class="dropup_menu__second color-two display-none" id="ulToDisplay10">
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li class="liRelative">
                <a title="img"><img class="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul class="dropup_menu__second color-two display-none" id="ulToDisplay11">
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
            </ul>
           </li>
           <li class="liRelative">
            <a title="img"><img class="clickable" src="./icons/hebergement.png" alt="" /></a>
            <ul class="dropup_menu third display-none" id="ulToDisplay3">
              <li class="liRelative">
                <a title="img"><img class="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul class="dropup_menu__second color-three display-none" id="ulToDisplay12">
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li class="liRelative">
                <a title="img"><img class="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul class="dropup_menu__second color-three display-none" id="ulToDisplay13">
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li class="liRelative">
                <a title="img"><img class="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul class="dropup_menu__second color-three display-none" id="ulToDisplay14">
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
            </ul>
           </li>
           <li  class="liRelative">
            <a title="img"><img class="clickable" src="./icons/euro.png" alt="" /></a>
            <ul class="dropup_menu fourth display-none" id="ulToDisplay4">
              <li class="liRelative">
                <a title="img"><img class="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul class="dropup_menu__second color-four display-none" id="ulToDisplay15">
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li class="liRelative">
                <a title="img"><img class="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul class="dropup_menu__second color-four display-none" id="ulToDisplay16">
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li class="liRelative">
                <a title="img"><img class="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul class="dropup_menu__second color-four display-none" id="ulToDisplay17">
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
            </ul>
           </li>
           <li class="liRelative">
            <a title="img"><img class="clickable" src="./icons/people.png" alt="" /></a>
            <ul class="dropup_menu five display-none" id="ulToDisplay5">
              <li class="liRelative">
                <a title="img"><img class="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul class="dropup_menu__second color-five display-none" id="ulToDisplay18">
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li class="liRelative">
                <a title="img"><img class="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul class="dropup_menu__second color-five display-none" id="ulToDisplay19">
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                </ul>
              </li>
              <li class="liRelative">
                <a title="img"><img class="clickable" src="./icones/Sans titre.png" alt="" /></a>
                <ul class="dropup_menu__second color-five display-none" id="ulToDisplay20">
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
                    <li><img class="clickable" src="./icones/Sans titre.png" alt="" /></li>
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