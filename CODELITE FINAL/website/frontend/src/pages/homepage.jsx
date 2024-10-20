import React from 'react';
import Defination from '../components/defination';
import Example from '../components/example_pattern';
import Regulations from '../components/regulations';
import Rights from '../components/rights';

const HomePage = () => {
  return (
    <div className="text-white px-44 pt-10 bg-slate-800">
      <Defination></Defination>
      <Example></Example>
      <Regulations></Regulations>
      <Rights></Rights>
    </div>
  );
};

export default HomePage;
