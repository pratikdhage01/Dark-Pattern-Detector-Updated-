import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [website, setWebsite] = useState('');
  const [defects, setDefects] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleClassify = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/classify', {
        website: website,
        defects: defects,
      });

      setResult(response.data);
      setError('');
    } catch (err) {
      setError('Error classifying dark patterns. Please try again.');
      setResult('');
    }
  };

  return (
    <div className='text-white pt-6 bg-slate-800'>
      <div className=''>
        <h1 className='flex justify-center text-5xl font-semibold'>Classify the Dark Pattern</h1>
      </div>
      <div className='px-96'>
        <div>
          <p className='text-2xl pt-16 pb-4'>Enter the Website URL:</p>
          <input
            type='text'
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder='URL'
            className='p-2 w-1/2 rounded-xl text-black'
          />
        </div>
        <div>
          <p className='pt-4 pb-4 text-2xl'>Enter Defects/Content (in JSON Format):</p>
          <textarea
            value={defects}
            onChange={(e) => setDefects(e.target.value)}
            placeholder='Input the json code for ex: ["defect1", "defect2"]'
            className='w-1/2 h-60 rounded-xl pl-2 pt-2 text-black'
          />
        </div>
        <div className='pt-4'>
          <button
            onClick={handleClassify}
            className='border-2 border-red-600 p-4 rounded-xl shadow-md shadow-red-400'
          >
            Classify Dark Patterns
          </button>
        </div>
        <div className='border-2 border-slate-300 rounded-xl h-96 mt-6 pt-2 pl-2 bg-slate-700'>
          {error && <p className='text-red-500'>{error}</p>}
          {result && <pre className='text-white'>{JSON.stringify(result, null, 2)}</pre>}
        </div>
        <div className='text-slate-800 pb-72'>bye</div>
      </div>
    </div>
  );
};

export default Dashboard;
