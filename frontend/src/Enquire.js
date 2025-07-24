import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import "./Enquire.css";

const Enquire = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialMachinery = (query.get('machinery') || 'baler').toLowerCase();
  const initialModel = query.get('model') || '';

  const [selectedMachinery, setSelectedMachinery] = useState(initialMachinery);
  const [selectedModel, setSelectedModel] = useState(initialModel);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    website: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const models = {
    baler: ["Tyre Scrap Balers", "Plastic Balers", "Card Board Balers", "Metal Balers"],
    shredder: ["Tyre Shredder", "Metal Shredder", "Plastic Shredder", "Paper and Cardboard Shredder"],
    "secondary-shredder": ["Rasper", "Metal Shredders", "Plastic Shredder", "Paper and Cardboard Shredder"],
    "other-equipment": [
      "Tumble Back Feeder",
      "Feeding & Discharge Conveyers",
      "Vibrators",
      "Classifiers",
      "Overband Magnetic Steel Separators",
      "Beedwire Remover",
      "Strip Cutter",
      "Block Cutter",
      "Side Wall Remover",
      "Cutting Equipment",
      "Folding Equipment"
    ],
  };

  useEffect(() => {
    if (models[selectedMachinery] && !models[selectedMachinery].includes(selectedModel)) {
      setSelectedModel(models[selectedMachinery][0]);
    }
  }, [selectedMachinery, selectedModel]);

  const handleMachineryChange = (event) => {
    const machinery = event.target.value.toLowerCase();
    setSelectedMachinery(machinery);
    setSelectedModel(models[machinery] ? models[machinery][0] : '');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be valid (10–15 digits)';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        'https://www.vikahecotech.com/send-email.php',
        {
          ...formData,
          machinery: selectedMachinery,
          model: selectedModel
        },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      alert('Email sent: ' + response.data);
    } catch (error) {
      alert('Failed to send email: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className='enqheadcontainer'>
        <h3 className='enqhead'>
          Please fill in your details to know more about our products and Services. We will get back to you within 48 hours.
        </h3>
        <div className='enquiryform'> Enquiry Form</div>
      </div>

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="company">Company Name:</label>
              <input type="text" name="company" value={formData.company} onChange={handleInputChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="machinery">Machinery:</label>
              <select name="machinery" value={selectedMachinery} onChange={handleMachineryChange}>
                <option value="baler">Baler</option>
                <option value="shredder">Primary Shredder</option>
                <option value="secondary-shredder">Secondary Shredder</option>
                <option value="other-equipment">Other Equipment</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="model">Applications:</label>
              <select name="model" value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
                {models[selectedMachinery]?.map((model) => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label>Website:</label>
              <input type="text" name="website" value={formData.website} onChange={handleInputChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone:</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
              {errors.address && <p className="error">{errors.address}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City:</label>
              <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
              {errors.city && <p className="error">{errors.city}</p>}
            </div>
            <div className="form-group">
              <label>Country:</label>
              <input type="text" name="country" value={formData.country} onChange={handleInputChange} />
              {errors.country && <p className="error">{errors.country}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Message:</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange}></textarea>
            </div>
          </div>

          <div className="form-row">
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enquire;
