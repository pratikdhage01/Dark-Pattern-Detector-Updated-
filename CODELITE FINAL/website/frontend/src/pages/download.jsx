import React from 'react'

const Download = () => {
  return (
    <div className='px-96 text-white pt-10'>
        <h1 className='text-4xl font-semibold flex justify-center'>You can download our extension from the below link</h1>
        <div className="pt-10 flex justify-center">
            <a href="https://drive.google.com/drive/folders/1H11f-d8lyTUUjRard1UedMRpFUvO5eBq?usp=sharing" className='bg-slate-700 text-xl font-bold p-4 rounded-lg border-2 border-red-600'>Download Extension</a>
        </div>
        <div className='pt-10'>
            <h1 className='text-3xl font-semibold'>How to USE out extension:</h1>
            <div className='pt-4 text-2xl'>
                <p>1. Download the zip file from above given link</p>
            </div>
            <div className='pt-4 text-2xl'>
                <p>2. Extract the downloaded zip file</p>
            </div>
            <div className='pt-4 text-2xl'>
                <p>3. chrome://extensions/ = Paste this in you Chrome browser and turn on developer mode</p>
            </div>
            <div className='pt-4 text-2xl'>
                <p>4. Click on load unpacked and select the app folder from the extracted zip file</p>
            </div>
            <div className='pt-4 text-2xl'>
                <p>5. Install the required packages from requirments.txt</p>
            </div>
            <div className='pt-4 text-2xl'>
                <p>6. Run app.py in you IDE</p>
            </div>
            <div className='pt-4 text-2xl'>
                <p>7. Now run the extensions</p>
            </div>
        </div>

    </div>
  )
}

export default Download