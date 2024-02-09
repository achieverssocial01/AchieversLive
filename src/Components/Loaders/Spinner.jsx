import React from 'react';
import './Spinner.css'; // Assuming your CSS file name is Spinner.css
const Spinner = () => {
  return (
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  );
};

export default Spinner;