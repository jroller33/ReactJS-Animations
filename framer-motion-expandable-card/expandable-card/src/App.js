// https://www.youtube.com/watch?v=rZ6iu5FQr2c
// https://www.youtube.com/@developedbyed


import { motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div 
        transition={{ layout: { duration: 1, type: "spring" } }} 
        layout 
        onClick={() => setIsOpen(!isOpen)} 
        className='card'
        style={{borderRadius: "2rem", boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
        >

        <motion.h2 layout="position">Motion ✨</motion.h2>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='expandingDiv'
            >
            <p>aasdfasjd;ofinbasoifbawoibfw2o043rg2q0o89i3gr8029oqg3f09o8gq4e</p>
            <p>as;ldkfhaoibg0o2wq3ght21093ytr02=9 htoiWQHEGNFOIWARBVOIRWEBG</p>
          </motion.div>
        )}
      </motion.div>

    </div>
  );
}

export default App;

