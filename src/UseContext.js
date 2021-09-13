import React from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import { ThemeProvider } from './ThemeContext';

export default function UseContext() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}
