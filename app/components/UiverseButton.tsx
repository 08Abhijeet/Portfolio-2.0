'use client';

import React from 'react';
import './UiverseButton.css'; // Import the new styles

interface PickupButtonProps {
  text: string;
}

const PickupButton: React.FC<PickupButtonProps> = ({ text }) => {
  return (
    <button className="pickup-button">
      {text}
    </button>
  );
};

export default PickupButton;
