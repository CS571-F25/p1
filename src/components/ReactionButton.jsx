import { useState } from "react";
import logo from "../assets/images/wise-logo-color.png"

export default function ReactionButton() {
  const [float, setFloat] = useState([]);
  const icons = ["🩵", "💙", "🧡", "⚙️", "🧪", "🧬", "💻", "✏️"];

  const clickButton = () => {
    const id = Date.now();
    const random = icons[Math.floor(Math.random() * icons.length)];

    const newIcon = { id, emoji: random };
    setFloat(prev => [...prev, newIcon]);

    setTimeout(() => {
      setFloat(prev => prev.filter(e => e.id !== id));
    }, 1500);
  };

  return (
    <>
      <button className = "reaction-button" onClick = {clickButton}>
        <img
            src = {logo}
            alt = "WISE Logo"
            className = "reaction-img"/>
      </button>

      {float.map(e => (
        <span key = {e.id} className = "floating">
          {e.emoji}
        </span>
      ))}
    </>
  );
}
