import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ServicesPage() {
  const [activeSection, setActiveSection] = useState('haircare')

  const serviceCategoryMapping = {
    "HAIRCARE": "Haircare",
    "SKINCARE & WELLNESS": "Skincare & Wellness",
    "MAKEUP STUDIO & TATTOO ART": "Makeup & Tattoos",
    "MANICURE & PEDICURE": "Manicure & Pedicure",
    "NAIL ART": "Nail Art"
  };

  const getFormattedServiceName = (serviceTitle) => {
    return serviceCategoryMapping[serviceTitle] || serviceTitle;
  };

  const services = {
    haircare: {
      title: "HAIRCARE",
      description: "Experience the ultimate in hair luxury, from stunning style to deep repair and vibrant color.",
      items: [
        { name: "Hairwash", desc: "Basic hair washing service.", price: "₹150" },
        { name: "Hairwash + Conditioning", desc: "Hair wash with conditioning treatment.", price: "₹300" },
        { name: "Hairwash for Dandruff Cleaning", desc: "Specialized dandruff cleaning wash.", price: "₹400" },
        { name: "Hairwash + Deep Conditioning", desc: "Deep conditioning treatment with wash.", price: "₹500" },
        { name: "Haircut (M)", desc: "Men's haircut service.", price: "₹350" },
        { name: "Beard Styling (M)", desc: "Beard styling for men.", price: "₹150" },
        { name: "Haircut (F)", desc: "Women's haircut service.", price: "₹700" },
        { name: "Blow-dry", desc: "Professional blow-dry styling.", price: "₹300" },
        { name: "Ironing", desc: "Hair ironing/straightening.", price: "₹500+" },
        { name: "Tong", desc: "Hair tonging/curling.", price: "₹500+" },
        { name: "Crimping", desc: "Hair crimping service.", price: "₹500+" },
        { name: "Beach Waves", desc: "Beach wave styling.", price: "₹500+" },
        { name: "Head Massage (Normal)", desc: "Relaxing head massage.", price: "₹450" },
        { name: "Deep Relaxing Head Massage", desc: "Intensive head massage therapy.", price: "₹800" },
        { name: "Hair Smoothening SPA", desc: "SPA treatment for hair smoothening (rates vary by hair thickness).", price: "Varies" },
        { name: "Deep Smoothening SPA", desc: "Deep hair smoothening SPA treatment.", price: "Varies" },
        { name: "Anti - Dandruff SPA Treatment", desc: "SPA treatment for dandruff control.", price: "Varies" },
        { name: "Anti - Hair fall SPA Treatment", desc: "SPA treatment to prevent hair fall.", price: "Varies" },
        { name: "Split - Ends Removal (per setting)", desc: "Removal of split ends.", price: "Varies" },
        { name: "Keratin Treatment SPA", desc: "Keratin treatment for hair repair.", price: "Varies" },
        { name: "Colour Core SPA Treatment", desc: "Color core SPA treatment.", price: "Varies" },
        { name: "Hair Smoothning Treatment", desc: "Chemical hair smoothening (rates depend on length, thickness & product).", price: "Varies" },
        { name: "Keratine Treatment", desc: "Keratin treatment service.", price: "Varies" },
        { name: "Botox Treatment", desc: "Botox hair treatment.", price: "Varies" },
        { name: "Rebounding Smoothning Treatment", desc: "Rebounding smoothening treatment.", price: "Varies" },
        { name: "Aqua Treatment", desc: "Aqua hair treatment.", price: "Varies" },
        { name: "Nanoplastia Treatment", desc: "Nanoplastia hair treatment.", price: "Varies" },
        { name: "Basic Touchup (M/F)", desc: "Basic color touchup (rates depend on strikes + hair thickness).", price: "Varies" },
        { name: "Global Colouring", desc: "Full hair coloring.", price: "Varies" },
        { name: "Highlights", desc: "Hair highlighting service.", price: "Varies" },
        { name: "Ombre", desc: "Ombre hair coloring.", price: "Varies" },
        { name: "Baby - lights", desc: "Baby lights highlighting.", price: "Varies" },
        { name: "Chunky Highlights", desc: "Chunky highlights.", price: "Varies" },
        { name: "Balayage", desc: "Balayage coloring technique.", price: "Varies" },
        { name: "Face - Framing Highlights", desc: "Face-framing highlights.", price: "Varies" },
        { name: "Crazy Funky Colours", desc: "Creative and funky color services.", price: "Varies" }
      ]
    },
    skincare_wellness: {
      title: "SKINCARE & WELLNESS",
      description: "Indulge in treatments designed to revitalize your skin, soothe your body, and promote holistic well-being.",
      items: [
        { name: "Classic Sweadish Massage", desc: "Classic Swedish massage therapy.", price: "₹3000" },
        { name: "Deep Tissue Massage", desc: "Deep tissue massage for muscle relief.", price: "₹3000" },
        { name: "Relaxing Pre-Natal Massage", desc: "Relaxing massage for pregnant women.", price: "₹3500" },
        { name: "Traditional Thai Massage", desc: "Traditional Thai massage.", price: "₹3500" },
        { name: "Full Hand Waxing (Honey)", desc: "Full hand waxing with honey wax.", price: "₹300" },
        { name: "Full Hand Waxing (Rica)", desc: "Full hand waxing with Rica wax.", price: "₹500" },
        { name: "Full Leg Waxing (Honey)", desc: "Full leg waxing with honey wax.", price: "₹600" },
        { name: "Full Leg Waxing (Rica)", desc: "Full leg waxing with Rica wax.", price: "₹1000" },
        { name: "Half Hand Waxing (Honey)", desc: "Half hand waxing with honey wax.", price: "₹150" },
        { name: "Half Hand Waxing (Rica)", desc: "Half hand waxing with Rica wax.", price: "₹300" },
        { name: "Half Leg Waxing (Honey)", desc: "Half leg waxing with honey wax.", price: "₹300" },
        { name: "Half Leg Waxing (Rica)", desc: "Half leg waxing with Rica wax.", price: "₹500" },
        { name: "Under Arm Waxing", desc: "Under arm waxing.", price: "₹100" },
        { name: "Full Back Waxing (Honey)", desc: "Full back waxing with honey wax.", price: "₹400" },
        { name: "Full Back Waxing (Rica)", desc: "Full back waxing with Rica wax.", price: "₹700" },
        { name: "Butt Waxing (Honey)", desc: "Butt waxing with honey wax.", price: "₹300" },
        { name: "Butt Waxing (Rica)", desc: "Butt waxing with Rica wax.", price: "₹600" },
        { name: "Full Face Waxing (Honey)", desc: "Full face waxing with honey wax.", price: "₹200" },
        { name: "Full Face Waxing (Rica)", desc: "Full face waxing with Rica wax.", price: "₹300" },
        { name: "Full Body Waxing (Honey)", desc: "Full body waxing with honey wax.", price: "₹2000" },
        { name: "Full Body Waxing (Rica)", desc: "Full body waxing with Rica wax.", price: "₹3500" },
        { name: "Chest Wax (M) (Honey)", desc: "Chest waxing for men with honey wax.", price: "₹250" },
        { name: "Chest Wax (M) (Rica)", desc: "Chest waxing for men with Rica wax.", price: "₹400" },
        { name: "Basic Cleanup", desc: "Basic skin cleanup.", price: "₹450" },
        { name: "Deep Skin Cleanup", desc: "Deep skin cleanup treatment.", price: "₹750" },
        { name: "Basic Facial", desc: "Basic facial treatment.", price: "₹950" },
        { name: "Spa Facial", desc: "Spa facial treatment.", price: "₹1500" },
        { name: "Hydra Moist Facial", desc: "Hydra moist facial.", price: "₹1500" },
        { name: "Illumina Whitening Facial", desc: "Illumina whitening facial.", price: "₹1500" },
        { name: "Purifying Facial", desc: "Purifying facial treatment.", price: "₹1800" },
        { name: "Anti Oxidant Facial", desc: "Anti-oxidant facial.", price: "₹1800" },
        { name: "O3+ Brightening Facial", desc: "O3+ brightening facial.", price: "₹1800" },
        { name: "Aroma Therapy Facial", desc: "Aroma therapy facial.", price: "₹2200" },
        { name: "Anti - Aging Facial", desc: "Anti-aging facial treatment.", price: "₹2500" },
        { name: "Hydra Machine Treatment", desc: "Hydra machine facial treatment.", price: "₹3500" },
        { name: "Lip Whitening Treatment (per Setting)", desc: "Lip whitening treatment.", price: "₹1000" },
        { name: "Under Eye Treatment (per Setting)", desc: "Under eye treatment.", price: "₹1200" },
        { name: "Abhyangam Massage", desc: "Abhyangam massage therapy.", price: "₹5500" },
        { name: "Herbal Hot-Potli Massage", desc: "Herbal hot-potli massage.", price: "₹6000" },
        { name: "Rose & Almond Body Scrub", desc: "Rose and almond body scrub.", price: "₹3500" },
        { name: "Sandal Wood Body Polishing", desc: "Sandal wood body polishing.", price: "₹4500" },
        { name: "Body Whitening With D-Tan", desc: "Body whitening with tan removal.", price: "₹5000" },
        { name: "Bridal Body Polishing", desc: "Bridal body polishing.", price: "₹6000" },
        { name: "Body Polishing With Banana Wrap", desc: "Body polishing with banana wrap.", price: "₹6500" },
        { name: "Seaweed Mud Body Wrap", desc: "Seaweed mud body wrap.", price: "₹5500" }
      ]
    },
    makeup_studio: {
      title: "MAKEUP STUDIO & TATTOO ART",
      description: "Get ready for your moment with professional makeup or make a permanent statement.",
      items: [
        { name: "HD Makeup", desc: "This type of makeup uses products that contain pigments with light-diffusing coverage to blur flaws when light reflects on them. This is to ensure that your look is TV-ready or telegenic.", price: "By Consultation" },
        { name: "Airbrush Makeup", desc: "This type of makeup is literally painting on makeup with an airbrush rather than makeup tools like brushes. For a smooth finish and flawless look, this makeup style creates a layer of skin.", price: "By Consultation" },
        { name: "Prosthetic Makeup", desc: "Specialized makeup for creating realistic prosthetics and effects.", price: "By Consultation" },
        { name: "Mineral Makeup", desc: "Mineral makeup is skin-friendly and uses chemical-free cosmetics that do not damage the skin.", price: "By Consultation" },
        { name: "Natural Makeup", desc: "With the light base, it gives you an even tone. It is the perfect choice of makeup look when you want to look great and flawless.", price: "By Consultation" },
        { name: "Matt Makeup", desc: "Matte makeup describes any type of makeup that sets on the face with no shine, sparkle, gloss or glow (it's the opposite of a dewy finish).", price: "By Consultation" },
        { name: "Smokey Makeup", desc: "This is perfect for creating a powerful look with dark eyes and bold lips. This is done depending on the occasion.", price: "By Consultation" },
        { name: "Editorial Makeup", desc: "Editorial makeup is makeup that is usually not worn everyday and used for magazine spreads and runway.", price: "By Consultation" },
        { name: "Old Hollywood - Bollywood Glam Makeup", desc: "Old Hollywood and Bollywood makeup is full of bright red lips, dramatic eyes, and defined brows. It's about going over the top and claiming the attention of the room.", price: "By Consultation" },
        { name: "Shimmery Makeup", desc: "Shimmer makeup has the power to transform one's look completely from simple to stunning which is extremely great for special occasions.", price: "By Consultation" },
        { name: "Hair Accessories", desc: "All makeup services include hair accessories to complete your look.", price: "Included" },
        { name: "Original Flower Jewellery", desc: "Original flower jewellery according to your choices.", price: "Starting from 5000/-" },
        { name: "Rental Metal Jewellery", desc: "Rental metal jewellery available as per choice.", price: "By Consultation" },
        { name: "Permanent Tattoo Art", desc: "Expertly designed and safely applied permanent tattoos by our professional artist. Bring your vision to life with unique, lasting body art.", price: "By Consultation" }
      ]
    },
    manicure_pedicure: {
      title: "MANICURE & PEDICURE",
      description: "Pamper your hands and feet with our rejuvenating services.",
      items: [
        { name: "Basic Manicure", desc: "Basic manicure service.", price: "₹700" },
        { name: "Basic Pedicure", desc: "Basic pedicure service.", price: "₹900" },
        { name: "Spa Manicure With D-Tan", desc: "Spa manicure with tan removal.", price: "₹1500" },
        { name: "Spa Pedicure With D-Tan", desc: "Spa pedicure with tan removal.", price: "₹1800" },
        { name: "Luxury Manicure", desc: "Luxury manicure treatment.", price: "₹2000" },
        { name: "Luxury Pedicure", desc: "Luxury pedicure treatment.", price: "₹2300" },
        { name: "Foot Cleaning Only", desc: "Foot cleaning service.", price: "₹1200" },
        { name: "Dry Manicure + Pedicure", desc: "Dry manicure and pedicure.", price: "₹1500" },
        { name: "Foot Reflexology", desc: "Foot reflexology massage.", price: "₹2500" }
      ]
    },
    nail_art: {
      title: "NAIL ART",
      description: "Express your creativity with custom designs on your nails.",
      items: [
        { name: "Nail Polish (Hand)", desc: "Nail polish application on hands.", price: "₹250" },
        { name: "Nail Polish (Feet)", desc: "Nail polish application on feet.", price: "₹200" },
        { name: "Gel Polish (Hand)", desc: "Gel polish application on hands.", price: "₹700" },
        { name: "Gel Polish (Feet)", desc: "Gel polish application on feet.", price: "₹700" },
        { name: "Gel Extension (Hand)", desc: "Gel nail extensions on hands.", price: "₹1700" },
        { name: "Gel Extension (Feet)", desc: "Gel nail extensions on feet.", price: "₹1500" },
        { name: "Acrylic Extension (Hand)", desc: "Acrylic nail extensions on hands.", price: "₹1800" },
        { name: "Acrylic Extension (Feet)", desc: "Acrylic nail extensions on feet.", price: "₹2000" },
        { name: "Polygel Extension (Hand)", desc: "Polygel nail extensions on hands.", price: "₹1500" },
        { name: "Polygel Extension (Feet)", desc: "Polygel nail extensions on feet.", price: "₹1700" },
        { name: "Deep Powder Polish (Hand)", desc: "Deep powder polish on hands.", price: "₹1100" },
        { name: "Deep Powder Polish (Feet)", desc: "Deep powder polish on feet.", price: "₹1000" },
        { name: "Removal of Extension (Hand)", desc: "Removal of nail extensions on hands.", price: "₹1000" },
        { name: "Removal of Extension (Feet)", desc: "Removal of nail extensions on feet.", price: "₹700" },
        { name: "Bridal Photo Art (Hand)", desc: "Bridal photo art on hands.", price: "₹500" }
      ]
    }
  }

  const handleScroll = () => {
    const sections = ['haircare', 'skincare_wellness', 'makeup_studio', 'manicure_pedicure', 'nail_art']
    const scrollPosition = window.scrollY + 150

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24">
        {/* Page Heading */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-text-color text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter">The Menu of Mastery</h1>
            <p className="mt-4 text-lg text-text-color/80 max-w-2xl mx-auto">
              Discover our comprehensive suite of services, meticulously crafted to elevate your natural beauty and well-being with an artistic touch.
            </p>
          </div>
        </section>

        {/* Sticky Category Navigation */}
        <nav className="sticky top-16 sm:top-20 md:top-24 z-40 bg-background-light/80 backdrop-blur-sm border-b border-t border-text-color/10 overflow-x-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-start sm:justify-center md:justify-between min-w-max sm:min-w-0 px-2 sm:px-4">
              {Object.keys(services).map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setActiveSection(key)}
                  className={`flex flex-col items-center justify-center py-3 sm:py-4 px-3 sm:px-4 md:px-6 flex-shrink-0 sm:flex-1 transition-colors whitespace-nowrap ${
                    activeSection === key
                      ? 'text-primary font-bold'
                      : 'text-text-color hover:text-primary'
                  }`}
                >
                  <p className="text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] text-center">
                    {services[key].title.split(' & ')[0]}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="space-y-16 sm:space-y-24 py-16 sm:py-24 px-4">
          {Object.entries(services).map(([key, service]) => (
            <section key={key} className="max-w-5xl mx-auto scroll-mt-24" id={key}>
              {console.log('Service Title from ServicesPage:', service.title, 'Formatted for BookingPage:', getFormattedServiceName(service.title))}
              <div className="bg-white p-8 sm:p-12 rounded-xl shadow-xl shadow-heading/10">
                <h2 className="text-heading text-3xl sm:text-4xl font-bold tracking-tight">{service.title}</h2>
                <p className="text-text-color mt-4 max-w-3xl">{service.description}</p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {service.items.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <h3 className="font-bold text-text-color">{item.name}</h3>
                        <p className="text-sm text-text-color/80">{item.desc}</p>
                        <p className="text-sm font-bold text-primary mt-1">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Link to={`/booking?service=${encodeURIComponent(getFormattedServiceName(service.title))}`} className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 hover:bg-opacity-90 transition-all">
                    <span className="truncate">Book {service.title.split(' & ')[0]} Services</span>
                  </Link>
                </div>
                {key === 'specialized' && (
                  <div className="mt-10 bg-primary/10 p-6 rounded-xl border border-primary/30">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary text-2xl mt-1">info</span>
                      <div>
                        <h4 className="font-bold text-heading">Consultation Required</h4>
                        <p className="text-sm text-text-color mt-1">
                          For your safety and to ensure optimal results, many of our Specialized Artistry services require a mandatory consultation prior to booking. Please contact us to schedule your complimentary assessment.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>


      </main>
      <Footer />
    </div>
  )
}

export default ServicesPage
