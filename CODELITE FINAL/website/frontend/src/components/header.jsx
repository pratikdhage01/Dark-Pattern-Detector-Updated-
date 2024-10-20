import React from 'react';
import { Link } from 'react-router-dom';

const stendpoint = "http://localhost:8501/"

const Header = () => {
  return (
    <div className='flex justify-between px-40 items-center py-6 bg-slate-900 text-white'>
      <div className='flex items-center gap-4'>
        <img className='h-24 w-24' src="/src/assets/machine-learning.png" alt="Logo" />
        <Link to={"/"} className='text-3xl font-bold'>The Neural Network</Link>
      </div>
      <div>
        <h1 className='text-4xl font-extrabold'>Dark Pattern Detector</h1>
      </div>
      <div className='mr-40 flex gap-4'>
        <Link
          className='text-2xl font-semibold border border-slate-300 bg-slate-600 p-4 rounded-2xl shadow-[0_4px_10px_rgba(226,232,240,0.5)] hover:bg-slate-400 hover:shadow-none'
          to={stendpoint}
        >
          Dashboard
        </Link>
        <Link
          className='text-2xl font-semibold border border-slate-300 bg-slate-600 p-4 rounded-2xl shadow-[0_4px_10px_rgba(226,232,240,0.5)] hover:bg-slate-400 hover:shadow-none'
          to={"/download"}
        >
          Download
        </Link>
      </div>
    </div>
  );
};

export default Header;
