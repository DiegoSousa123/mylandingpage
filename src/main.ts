import './style.css'
import {createIcons, MessageCircle, Info,Cpu,Phone,Instagram} from 'lucide';


createIcons({
  icons: {
    MessageCircle,Info,Cpu,Phone,Instagram
  },
})

const contactW = document.getElementById("contact-w");
const contactI = document.getElementById("contact-i");

contactW?.setAttribute("href", import.meta.env.VITE_NUMBER);
contactI?.setAttribute("href", import.meta.env.VITE_INSTAGRAM);