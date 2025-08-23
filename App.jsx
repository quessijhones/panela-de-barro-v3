import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const immersiveImages = [
  "/immersive/amazonia.jpg",
  "/immersive/cerrado.jpg",
  "/immersive/lencois.jpg",
  "/immersive/litoral.jpg",
  "/immersive/serra.jpg"
];

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        // Splash inicial com logo animado
        <motion.div
          className="splash-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.img
            src="/logo.png"
            alt="Panela de Barro"
            className="splash-logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      ) : (
        <div className="immersive-container">
          {/* Música ambiente brasileira */}
          <audio autoPlay loop>
            <source src="/immersive/bossa.mp3" type="audio/mp3" />
          </audio>

          {/* Parallax imersivo */}
          {immersiveImages.map((img, index) => (
            <motion.div
              key={index}
              className="immersive-section"
              style={{
                backgroundImage: `url(${img})`
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <div className="overlay">
                <h1>Explore o Brasil</h1>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
}