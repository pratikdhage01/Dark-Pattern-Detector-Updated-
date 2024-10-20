import React from 'react';

const Example = () => {
  return (
    <div className='flex justify-between pb-8'>
      <div className="w-1/2">
        <img src="/src/assets/warning.jpeg" alt="Visual representation of dark patterns" className="w-full h-auto pt-16" />
      </div>
      <div className="w-1/2 pl-40">
        <h1 className="text-5xl font-semibold pb-4 pt-8">Examples of Dark Patterns</h1> {/* Increased size */}

        <div className="flex gap-4 pl-4 pt-2 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"/>
          </svg>
          <div>
            <p className="text-3xl font-semibold">False Urgency</p> {/* Increased size */}
            <p className="text-lg">Creating a fake sense of urgency to rush users into making a purchase.</p>
          </div>
        </div>

        <div className="flex gap-4 pl-4 pt-2 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"/>
          </svg>
          <div>
            <p className="text-3xl font-semibold">Basket Sneaking</p> {/* Increased size */}
            <p className="text-lg">Adding items to the cart without user consent.</p>
          </div>
        </div>

        <div className="flex gap-4 pl-4 pt-2 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"/>
          </svg>
          <div>
            <p className="text-3xl font-semibold">Confirm Shaming</p> {/* Increased size */}
            <p className="text-lg">Guilt-tripping users into taking an action.</p>
          </div>
        </div>

        <div className="flex gap-4 pl-4 pt-2 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"/>
          </svg>
          <div>
            <p className="text-3xl font-semibold">Subscription Trap</p> {/* Increased size */}
            <p className="text-lg">Making it hard to cancel subscriptions.</p>
          </div>
        </div>

        <div className="flex gap-4 pl-4 pt-2 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"/>
          </svg>
          <div>
            <p className="text-3xl font-semibold">Bait and Switch</p> {/* Increased size */}
            <p className="text-lg">Promoting one outcome but delivering a different one.</p>
          </div>
        </div>

        <div className="flex gap-4 pl-4 pt-2 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"/>
          </svg>
          <div>
            <p className="text-3xl font-semibold">Drip Pricing</p> {/* Increased size */}
            <p className="text-lg">Revealing hidden costs only at the last step.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;
