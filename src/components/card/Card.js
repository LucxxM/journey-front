import React from "react";
import "./card.css";
import { motion } from "framer-motion";


const card = () => {
    const anim = () => {
        let divToMove = document.querySelectorAll('.dragMe div');
    
        divToMove.forEach(div => {
          div.addEventListener('click', (e) => {
            let attrX = e.offsetX;
            let attrY = e.offsetY;
            div.style.top = `${attrY}px)`;
            div.style.left = `${attrX}px)`;
            
          });
        });
      }
    
    return (
    <div className="card-container">
        <motion.div drag dragConstraints={{ left: -1250, right: 1250, top: -1250, bottom: 1250 }} className="dragMe card" id="card" onClick={anim} >
            
        </motion.div>
    </div>
    );
}
export default card;