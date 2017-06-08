import React from 'react';

const Wrapper = function ({ children }) {
  return (
    <div className="flex justify-center items-center ph3 w-100">
      {children}
    </div>
  );
};

export default Wrapper;
