import React, { useState } from 'react';
import './UpdateForm.css';

const UpdateForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just log the email, but you can handle form submission here
    alert(`Thank you! We will update you at ${email}`);
    setEmail('');
  };

  return (
    <div className="update-form">
      <h2>📧 Get Updates from Us</h2>
      <p>Subscribe to get the latest updates about DevOps and our new projects!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateForm;
