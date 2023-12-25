import React from 'react';
import '../../SnowEffect.css'; // 미리 컴파일된 CSS 파일

const SnowEffect = () => {
  const snowflakes = Array.from({ length: 100 }, (_, index) => (
    <div key={index} className="snow"></div>
  ));

  return <>{snowflakes}</>;
};

export default SnowEffect;
