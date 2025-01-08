import './App.css';
import React, { useEffect, useState } from 'react';
import { ScratchCard } from 'next-scratchcard';

function App() {

  const images = [
    'https://images.pexels.com/photos/19727180/pexels-photo-19727180/free-photo-of-a-house-in-the-snow-with-trees-and-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  // Add your image paths here
    'https://images.pexels.com/photos/29851698/pexels-photo-29851698/free-photo-of-artisan-desserts-with-strawberry-ice-cream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27382891/pexels-photo-27382891/free-photo-of-a-road-with-a-sign-that-says-the-road-to-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/29203755/pexels-photo-29203755/free-photo-of-solo-fisherman-on-moroccan-boat-under-red-umbrella.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const [randomImage, setRandomImage] = useState('');
  const [adShown, setAdShown] = useState(false);

  useEffect(() => {
    // Randomly select an image from the array when the component mounts
    const selectedImage = images[Math.floor(Math.random() * images.length)];
    setRandomImage(selectedImage);
  }, []);

  const handleScratchFinish = () => {
    setAdShown(true);  // Set the state to show the ad
  };

  return (
    <div className="App">
      <header className="App-header">
      <h2>Scratch & Win!</h2>
      {randomImage && (
        <ScratchCard
          width={400}  // Set the width of the scratch card
          height={300} // Set the height of the scratch card
          image="https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          finishPercent={40}  // You can adjust how much needs to be scratched
          onFinish={handleScratchFinish}
        >
          <div>
            <img src={randomImage} width={400} height={300} />
          </div>
        </ScratchCard>
      )}

      {adShown && (
        <div style={{ marginTop: '30px', padding: '20px', border: '2px solid #ccc' }}>
          <h3>Special Offer!</h3>
          <p>Check out this amazing product!</p>
          <a href="https://your-affiliate-link.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ad-banner.jpg" alt="Advertisement" />
          </a>
        </div>
      )}
      </header>
    </div>
  );
}

export default App;
