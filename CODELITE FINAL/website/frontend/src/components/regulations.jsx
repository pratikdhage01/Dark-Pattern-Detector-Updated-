import React from 'react';

const Regulations = () => {
  return (
    <div className='flex '>
      <div className="w-1/2 pr-8">
        <h1 className="text-4xl font-semibold pb-4 pt-14">Statistics</h1>
        <div className="flex gap-4 pl-4 pt-2 items-start">
          
        </div>
        <div className="pl-4 pt-4">
          <ul className="list-disc pl-5 space-y-2 ">
            <li className="text-2xl">The graph shows data from 2016 to 2023 on people trapped or scammed due to deceptive patterns.</li>
            <li className="text-2xl">There is a steady increase in the number of affected individuals over the years.</li>
            <li className="text-2xl">This trend highlights the growing prevalence of dark patterns on websites.</li>
            <li className="text-2xl">Deceptive patterns have become more widespread, impacting more users annually.</li>
            <li className="text-2xl">The data emphasizes the importance of addressing dark patterns to protect users online.</li>
          </ul>
        </div>
      </div>
      <div className="w-1/2">
        <img src="/src/assets/graph.jpeg" alt="Visual representation of dark patterns" className="w-full h-auto rounded-xl border-2 border-red-950 scale-95 hover:shadow-lg hover:shadow-slate-200" />
      </div>
    </div>
  );
}

export default Regulations;
