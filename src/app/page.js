'use client';
import { useEffect } from 'react';
import styles from './page.module.css';
import Intro from '../components/Intro';
import Description from '../components/Description';

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const handleButtonClick1 = () => {
    // Add your button 1 click logic here
    console.log('Button 1 clicked!');
  };

  const handleButtonClick2 = () => {
    // Add your button 2 click logic here
    console.log('Button 2 clicked!');
  };

  return (
    <main className={styles.main}>
      <Intro />
      <Description />

      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <button
          style={{
            display: 'inline-block',
            marginRight: '5px', 
            marginTop:'10px',
            marginLeft:'200px',
            padding: '10px',
            background: '#AD00FF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleButtonClick1}
        >
          <p>
            <a href="/">
            <span className='text-black'>Signup</span>
            </a>
          </p>
        </button>

        <button
          style={{
            display: 'inline-block',
            padding: '10px',
            
            background: '#AD00FF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleButtonClick2}
        >
          <p>
            <a href="/">
            <span className='text-black text-bold'>Login</span>
            </a>
          </p>
        </button>
      </div>
      
    </main>
  );
}
