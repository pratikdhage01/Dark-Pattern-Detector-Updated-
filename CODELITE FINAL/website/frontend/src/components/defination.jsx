import React from 'react';

const Defination = () => {
  return (
    <div className='flex justify-between pb-8'>
      <div className="w-1/2 pr-8">
        <h1 className="text-5xl font-semibold pb-4 pt-8">What are Dark Patterns?</h1> {/* Increased size */}
        <p className="text-2xl pl-2 pb-4">
          Dark patterns (also known as “deceptive patterns”) are tricks used in websites and apps that make you do things that you didn't intend to do, like buying or signing up for something. These tactics manipulate users by exploiting their cognitive biases or emotional responses to influence their decisions. Common types of dark patterns include:
        </p>

        <div className="flex gap-4 pl-4 pt-2 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 pt-2">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"/>
          </svg>
          <div>
            <p className="text-3xl font-semibold">Trick Wording</p> {/* Increased size */}
            <p className="text-lg">
              Using confusing or misleading language to trick users into taking an action they didn't intend.
            </p>
          </div>
        </div>

        <div className="flex gap-4 pl-4 pt-4 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"/>
          </svg>
          <div>
            <p className="text-3xl font-semibold">Sneaking</p> {/* Increased size */}
            <p className="text-lg">
              Adding products or subscriptions to your cart without your explicit consent. This tactic can lead to users purchasing things they didn't want or expect.
            </p>
          </div>
        </div>

        <div className="flex gap-4 pl-4 pt-4 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"/>
          </svg>
          <div>
            <p className="text-3xl font-semibold">Obstruction</p> {/* Increased size */}
            <p className="text-lg">
              Making a process unnecessarily difficult in order to dissuade users from taking certain actions, such as cancelling a subscription or deleting an account.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src="/src/assets/detect.jpeg" alt="Visual representation of dark patterns" className="w-full h-auto pt-16 " />
      </div>
    </div>
  );
}

export default Defination;
