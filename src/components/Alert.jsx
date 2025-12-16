import { useEffect } from "react";
import "./Alert.css";

const Alert = ({ message, type = "info", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); 
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null; 

  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
