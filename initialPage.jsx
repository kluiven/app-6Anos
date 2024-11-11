import React from 'react';
import Carousel from './src/carrossel/carrossel';
import Timer from './src/timer/timer';
import TextBox from './src/textBox/textBox';

function InitialPage() {
  return (
    <div className="flex flex-col items-center "> 
      {/* Carrossel com espaço superior */}
      <div className="mb-4">
        <Carousel />
      </div>

      {/* TextBox com espaçamento */}
      <div className="mb-4">
        <TextBox />
      </div>

      {/* Timer com espaçamento */}
      <div>
        <Timer />
      </div>
    </div>
  );
}

export default InitialPage;
