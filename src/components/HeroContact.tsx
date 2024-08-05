import React, { useState } from 'react';

const HeroContact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log('Form submitted:', form);
  };

  return (
    <div className="flex flex-col items-center p-8" style={{ fontFamily: 'Poppins, sans-serif'}}>
      <h1 className="text-3xl font-bold mb-4">Get In Touch With Us</h1>
      <p className="text-center w-[644px] text-gray-400">
        For more information about our product & services, please feel free to drop us an email. Our staff is always there to help you out. Do not hesitate!
      </p>
      
      <div className='flex mt-10'>
        <div className='flex flex-col w-[393px] gap-5'>
            <div>
                <h1 className='text-2xl font-semibold'>Address</h1>
                <p>236 5th SE Avenue,<br /> New York NY10000, <br /> United States</p>
            </div>
            <div>
            <h1 className='text-2xl font-semibold'>Phone</h1>
            <p>Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789</p>
            </div>
            <div>
            <h1 className='text-2xl font-semibold'>Address</h1>
            <p>Monday-Friday: 9:00 - <br /> 22:00 <br />Saturday-Sunday: 9:00 - <br /> 21:00</p>
            </div>
        </div>
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-[528px] h-[75px] border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-[528px] h-[75px] border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="mt-1 block w-[528px] h-[75px] border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-[528px] h-[75px] border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-[237px] h-[55px] bg-amareloQueimado text-white font-bold py-2 px-4 rounded-sm shadow-sm"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default HeroContact;

