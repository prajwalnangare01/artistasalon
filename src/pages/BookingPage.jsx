import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function BookingPage() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: '',
    service: '',
    subService: '',
    expert: '',
    date: ''
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const service = searchParams.get('service');
    const expert = searchParams.get('expert');
    const branch = searchParams.get('branch');

    const formatServiceName = (serviceName) => {
        if (!serviceName) return '';
        const mapping = {
            'haircare': 'Haircare',
            'skincare & wellness': 'Skincare & Wellness',
            'makeup studio & tattoo art': 'Makeup & Tattoos',
            'manicure & pedicure': 'Manicure & Pedicure',
            'nail art': 'Nail Art'
        };
        const formatted = mapping[serviceName.toLowerCase()] || serviceName;
        return formatted;
    };

    const newFormData = {};
    if (service) {
        newFormData.service = formatServiceName(service);
    }
    if (expert) {
        newFormData.expert = expert;
    }
    if (branch) {
        newFormData.branch = branch;
    }

    if (Object.keys(newFormData).length > 0) {
      setFormData(prev => ({
        ...prev,
        ...newFormData
      }));
    }
  }, [location.search]);

  const expertsByBranch = {
    'Law College Road': [
      { value: 'RAVIKIRAN', label: 'RAVIKIRAN (Hair Director)' },
      { value: 'OMKAR', label: 'OMKAR (Hairstylist)' },
      { value: 'Ruchika', label: 'Ruchika (Beauty Therapist)' },
      { value: 'Chetan', label: 'Chetan (Hairstylist)' },
      { value: 'Saqlain', label: 'Saqlain (Hairstylist)' },
      { value: 'Naushad', label: 'Naushad (Beauty Therapist)' },
      { value: 'Rajashree', label: 'Rajashree (Beauty Therapist)' }
    ],
    'Vishal Nagar': []
  };

  const services = {
    'Haircare': [
      "Hairwash",
      "Hairwash + Conditioning",
      "Hairwash for Dandruff Cleaning",
      "Hairwash + Deep Conditioning",
      "Haircut (M)",
      "Beard Styling (M)",
      "Haircut (F)",
      "Blow-dry",
      "Ironing",
      "Tong",
      "Crimping",
      "Beach Waves",
      "Head Massage (Normal)",
      "Deep Relaxing Head Massage",
      "Hair Smoothening SPA",
      "Deep Smoothening SPA",
      "Anti - Dandruff SPA Treatment",
      "Anti - Hair fall SPA Treatment",
      "Split - Ends Removal (per setting)",
      "Keratin Treatment SPA",
      "Colour Core SPA Treatment",
      "Hair Smoothning Treatment",
      "Keratine Treatment",
      "Botox Treatment",
      "Rebounding Smoothning Treatment",
      "Aqua Treatment",
      "Nanoplastia Treatment",
      "Basic Touchup (M/F)",
      "Global Colouring",
      "Highlights",
      "Ombre",
      "Baby - lights",
      "Chunky Highlights",
      "Balayage",
      "Face - Framing Highlights",
      "Crazy Funky Colours"
    ],
    'Skincare & Wellness': [
      "Classic Sweadish Massage",
      "Deep Tissue Massage",
      "Relaxing Pre-Natal Massage",
      "Traditional Thai Massage",
      "Full Hand Waxing (Honey)",
      "Full Hand Waxing (Rica)",
      "Full Leg Waxing (Honey)",
      "Full Leg Waxing (Rica)",
      "Half Hand Waxing (Honey)",
      "Half Hand Waxing (Rica)",
      "Half Leg Waxing (Honey)",
      "Half Leg Waxing (Rica)",
      "Under Arm Waxing",
      "Full Back Waxing (Honey)",
      "Full Back Waxing (Rica)",
      "Butt Waxing (Honey)",
      "Butt Waxing (Rica)",
      "Full Face Waxing (Honey)",
      "Full Face Waxing (Rica)",
      "Full Body Waxing (Honey)",
      "Full Body Waxing (Rica)",
      "Chest Wax (M) (Honey)",
      "Chest Wax (M) (Rica)",
      "Basic Cleanup",
      "Deep Skin Cleanup",
      "Basic Facial",
      "Spa Facial",
      "Hydra Moist Facial",
      "Illumina Whitening Facial",
      "Purifying Facial",
      "Anti Oxidant Facial",
      "O3+ Brightening Facial",
      "Aroma Therapy Facial",
      "Anti - Aging Facial",
      "Hydra Machine Treatment",
      "Lip Whitening Treatment (per Setting)",
      "Under Eye Treatment (per Setting)",
      "Abhyangam Massage",
      "Herbal Hot-Potli Massage",
      "Rose & Almond Body Scrub",
      "Sandal Wood Body Polishing",
      "Body Whitening With D-Tan",
      "Bridal Body Polishing",
      "Body Polishing With Banana Wrap",
      "Seaweed Mud Body Wrap"
    ],
    'Makeup & Tattoos': [
      "HD Makeup",
      "Airbrush Makeup",
      "Prosthetic Makeup",
      "Mineral Makeup",
      "Natural Makeup",
      "Matt Makeup",
      "Smokey Makeup",
      "Editorial Makeup",
      "Old Hollywood - Bollywood Glam Makeup",
      "Shimmery Makeup",
      "Hair Accessories",
      "Original Flower Jewellery",
      "Rental Metal Jewellery",
      "Permanent Tattoo Art"
    ],
    'Manicure & Pedicure': [
      "Basic Manicure",
      "Basic Pedicure",
      "Spa Manicure With D-Tan",
      "Spa Pedicure With D-Tan",
      "Luxury Manicure",
      "Luxury Pedicure",
      "Foot Cleaning Only",
      "Dry Manicure + Pedicure",
      "Foot Reflexology"
    ],
    'Nail Art': [
      "Nail Polish (Hand)",
      "Nail Polish (Feet)",
      "Gel Polish (Hand)",
      "Gel Polish (Feet)",
      "Gel Extension (Hand)",
      "Gel Extension (Feet)",
      "Acrylic Extension (Hand)",
      "Acrylic Extension (Feet)",
      "Polygel Extension (Hand)",
      "Polygel Extension (Feet)",
      "Deep Powder Polish (Hand)",
      "Deep Powder Polish (Feet)",
      "Removal of Extension (Hand)",
      "Removal of Extension (Feet)",
      "Bridal Photo Art (Hand)"
    ]
  };

  const availableExperts = formData.branch ? expertsByBranch[formData.branch] || [] : [];
  const availableSubServices = formData.service ? services[formData.service] || [] : [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.branch || !formData.service || !formData.date) {
      alert('Please fill in all required fields.');
      return;
    }

    // Format the message for WhatsApp with clean characters
    const formatMessage = () => {
      // Clean and format the date
      const dateObj = new Date(formData.date);
      const day = dateObj.getDate();
      const month = dateObj.toLocaleString('en-US', { month: 'short' });
      const year = dateObj.getFullYear();
      const formattedDate = `${day} ${month} ${year}`;

      // Build the message with simple, clean characters
      let message = '';
      message += 'APPOINTMENT REQUEST\n';
      message += '\n';
      message += 'Name: ' + formData.name + '\n';
      message += 'Phone: ' + formData.phone + '\n';
      message += 'Branch: ' + formData.branch + '\n';
      message += 'Service: ' + formData.service + '\n';
      
      if (formData.subService) {
        message += 'Sub Service: ' + formData.subService + '\n';
      }
      
      if (formData.expert) {
        message += 'Expert: ' + formData.expert + '\n';
      }
      
      message += 'Date: ' + formattedDate + '\n';
      message += '\n';
      message += 'Please confirm!';
      
      return message;
    };

    const message = formatMessage();
    
    // Branch-specific WhatsApp numbers
    const branchPhoneNumbers = {
      'Law College Road': '7066110033',
      'Vishal Nagar': '7038873333'
    };
    
    const phoneNumber = branchPhoneNumbers[formData.branch] || '9579158374'; // Fallback to default if branch not found
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    console.log('WhatsApp URL:', whatsappUrl); // Debug logging
    console.log('Original message:', message); // Debug logging
    console.log('Branch:', formData.branch, 'Phone:', phoneNumber); // Debug logging

    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      branch: '',
      service: '',
      subService: '',
      expert: '',
      date: ''
    });

    alert('Appointment request submitted successfully! WhatsApp will open with the appointment details. Please click the "Send" button in WhatsApp to complete the booking request.');
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <div className="relative w-full">
      <Header />
      <main className="pt-[80px]">
        {/* Booking Section */}
        <section className="py-12 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-xl bg-white p-6 md:p-12 shadow-xl">
              <h2 className="text-center text-3xl md:text-4xl font-bold text-text-color">Book Appointment</h2>
              <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <label className="flex flex-col">
                  <p className="pb-2 text-base font-medium text-text-color">Full Name *</p>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-text-color/20 bg-background-light p-4 text-base text-text-color focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your full name"
                    required
                  />
                </label>
                <label className="flex flex-col">
                  <p className="pb-2 text-base font-medium text-text-color">Phone Number *</p>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-text-color/20 bg-background-light p-4 text-base text-text-color focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your phone number"
                    required
                  />
                </label>
                <label className="flex flex-col">
                  <p className="pb-2 text-base font-medium text-text-color">Preferred Branch *</p>
                  <div className="relative">
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      className="w-full appearance-none rounded-xl border border-text-color/20 bg-background-light p-4 text-base text-text-color focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    >
                      <option value="">Select a Location</option>
                      <option value="Law College Road">Law College Road</option>
                      <option value="Vishal Nagar">Vishal Nagar</option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-color">expand_more</span>
                  </div>
                </label>
                <label className="flex flex-col">
                  <p className="pb-2 text-base font-medium text-text-color">Service Category *</p>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full appearance-none rounded-xl border border-text-color/20 bg-background-light p-4 text-base text-text-color focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    >
                      <option value="">Select a Service</option>
                      {Object.keys(services).map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-color">expand_more</span>
                  </div>
                </label>
                <label className="flex flex-col">
                  <p className="pb-2 text-base font-medium text-text-color">Sub Service (Optional)</p>
                  <div className="relative">
                    <select
                      name="subService"
                      value={formData.subService}
                      onChange={handleInputChange}
                      disabled={!formData.service}
                      className="w-full appearance-none rounded-xl border border-text-color/20 bg-background-light p-4 text-base text-text-color focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select a Sub Service</option>
                      {availableSubServices.map(subService => (
                        <option key={subService} value={subService}>{subService}</option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-color">expand_more</span>
                  </div>
                </label>
                <label className="flex flex-col">
                  <p className="pb-2 text-base font-medium text-text-color">Preferred Expert (Optional)</p>
                  <div className="relative">
                    <select
                      name="expert"
                      value={formData.expert}
                      onChange={handleInputChange}
                      disabled={!formData.branch}
                      className="w-full appearance-none rounded-xl border border-text-color/20 bg-background-light p-4 text-base text-text-color focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Any Available Expert</option>
                      {availableExperts.map(expert => (
                        <option key={expert.value} value={expert.value}>{expert.label}</option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-color">expand_more</span>
                  </div>
                </label>
                <div className="flex flex-col md:col-span-2 lg:col-span-1">
                  <p className="pb-2 text-base font-medium text-text-color">Choose a Date *</p>
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-text-color/20 bg-background-light p-4 text-base text-text-color focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      min={getTodayDate()}
                      required
                    />
                  </div>
                </div>
              </form>
              <div className="mt-10 flex justify-center">
                <button 
                  type="submit" 
                  onClick={handleSubmit} 
                  className="flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-6 md:px-10 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 w-full md:w-auto"
                >
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default BookingPage
