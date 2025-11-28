import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import expertiseData from '../expertiseData.json'
import supriyaBanner from '../assets/images/supriya_banner1.jpg'
import janhaviBanner from '../assets/images/janhavi_banner2.jpg'
import vedantBanner from '../assets/images/vedant_banner3.jpg'
import sunitaBanner from '../assets/images/sunita_banner4.jpg'

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  
  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])
  
  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4) // Assuming 4 hero images
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4) // Assuming 4 hero images
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4) // Assuming 4 hero images
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Helper function to truncate description for mobile
  const getMobileDescription = (description) => {
    if (!isMobile) return description
    // Limit to first 8 words for mobile
    const words = description.split(' ')
    if (words.length > 8) {
      return words.slice(0, 8).join(' ') + '...'
    }
    return description
  }

  const desktopImages = [
    { image: supriyaBanner },
    { image: janhaviBanner },
    { image: vedantBanner },
    { image: sunitaBanner }
  ];

  const mobileImages = [
    { image: supriyaBanner },
    { image: janhaviBanner },
    { image: vedantBanner },
    { image: sunitaBanner }
  ];

  return (
    <div className="relative w-full">
      <Header />
      <main className="bg-background-light">
        {/* Desktop Hero Section */}
        {!isMobile && (
          <section className="relative w-full mt-16 md:mt-24 lg:mt-28">
            <section 
              className="relative w-full bg-contain bg-center bg-no-repeat" 
              style={{ 
                backgroundImage: `url(${desktopImages[currentSlide].image})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'scroll',
                minHeight: '60vh',
                maxHeight: '80vh',
                paddingTop: '10vh'
              }}
            >
              <button 
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); }}
                className="absolute left-6 md:left-8 top-[60%] z-50 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white transition-colors hover:bg-white/40 backdrop-blur-sm"
              >
                <span className="material-symbols-outlined text-3xl md:text-4xl">chevron_left</span>
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); }}
                className="absolute right-6 md:right-8 top-[60%] z-50 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white transition-colors hover:bg-white/40 backdrop-blur-sm"
              >
                <span className="material-symbols-outlined text-3xl md:text-4xl">chevron_right</span>
              </button>
              <div className="absolute bottom-7 left-1/2 z-50 -translate-x-1/2">
                <div className="flex items-center gap-3 bg-black/20 rounded-full px-4 py-3 backdrop-blur-sm">
                  {desktopImages.map((_, index) => (
                    <button 
                      key={index}
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); goToSlide(index); }}
                      className={`h-3 w-3 rounded-full transition-colors cursor-pointer ${
                        index === currentSlide ? 'bg-accent' : 'bg-white/60 hover:bg-white/80'
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </section>
          </section>
        )}

        {/* Mobile Hero Section */}
        {isMobile && (
          <section className="relative w-full mt-16">
            <div className="relative w-full">
              <img 
                src={mobileImages[currentSlide].image} 
                alt="Hero Banner" 
                className="w-full h-auto"
              />
            </div>
            <div className="flex justify-center items-center mt-1">
              <div className="flex items-center gap-1.5 bg-black/30 rounded-full px-2 py-1 backdrop-blur-sm">
                {mobileImages.map((_, index) => (
                  <button 
                    key={index}
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); goToSlide(index); }}
                    className={`h-1.5 w-1.5 rounded-full transition-colors cursor-pointer ${
                      index === currentSlide ? 'bg-accent' : 'bg-white/70 hover:bg-white/90'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Expertise Section */}
        <section className="bg-background-light py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-bold text-text-color text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Our Expertise</h2>
            <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-items-center">
              {expertiseData.map((item, index) => (
                <Link key={index} to="/services" className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-none">
                  <div className="group overflow-hidden rounded-xl bg-white shadow-lg sm:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full w-full">
                    <div className="w-full bg-cover bg-center h-32 sm:h-36 md:h-44 lg:h-56 xl:h-64" style={{backgroundImage: `url(${item.image})`}}></div>
                    <div className="text-center flex-1 p-2.5 sm:p-3 md:p-4 lg:p-5 xl:p-6">
                      <h3 className="font-bold text-text-color text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">{item.title}</h3>
                      <p className="text-text-color/80 mt-1 sm:mt-1.5 md:mt-2 text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-relaxed">{getMobileDescription(item.description)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={isMobile ? 'py-12' : 'py-16 lg:py-24'}>
          <div className={`container mx-auto max-w-7xl ${isMobile ? 'px-4' : 'px-6 lg:px-8'}`}>
            <h2 className={`text-center font-bold text-text-color ${isMobile ? 'text-2xl' : 'text-3xl lg:text-5xl'}`}>Meet Our Artists</h2>
            <div className={`relative ${isMobile ? 'mt-8' : 'mt-12 lg:mt-16'}`}>
              <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-1 lg:grid-cols-3 gap-8'}`}>
                {[
                  { name: "RAVIKIRAN", role: "Hair Director", quote: isMobile ? "Visionary Hair Technical Head with 39+ Years of Experience" : "A visionary Hair Technical Head mastering advanced hair science, color technology, and precision artistry—leading the team with innovation, expertise, and unmatched technical excellence. 39+ Years of Experience", image: "https://picsum.photos/200/200?random=1" },
                  { name: "OMKAR", role: "Hairstylist", quote: isMobile ? "Hair artistry expert with 11+ Years of Experience" : "A hair artistry expert with mastery in advanced cuts, color, and styling. Recognized for creating signature looks that blend trend with individuality. 11+ Years of Experience", image: "https://picsum.photos/200/200?random=2" },
                  { name: "Ruchika", role: "Beauty Therapist", quote: isMobile ? "Skincare specialist with 10+ Years of Experience" : "A skincare perfectionist specializing in customised treatments that unlock natural radiance. Trusted for delivering consistent, visible results. 10+ Years of Experience", image: "https://picsum.photos/200/200?random=3" }
                ].map((member, index) => (
                  <div key={index} className={`flex flex-col items-center rounded-xl bg-white text-center shadow-lg ${isMobile ? 'p-6' : 'p-8'}`}>
                    <img className={`rounded-full object-cover ring-2 ring-accent ring-offset-white ${isMobile ? 'h-24 w-24 ring-offset-2' : 'h-40 w-40 ring-offset-4'}`} src={member.image} alt={member.name} />
                    <h3 className={`font-bold text-primary ${isMobile ? 'mt-4 text-lg' : 'mt-6 text-2xl'}`}>{member.name}</h3>
                    <p className={`text-primary/80 ${isMobile ? 'text-sm' : 'text-lg'}`}>{member.role}</p>
                    <p className={`italic text-text-color/70 ${isMobile ? 'mt-2 text-xs' : 'mt-4 text-base'}`}>{member.quote}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`flex justify-center ${isMobile ? 'mt-8' : 'mt-16'}`}>
              <Link to="/staff">
                <button className={`flex cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary font-bold text-white shadow-lg transition-transform hover:scale-105 ${isMobile ? 'h-10 px-8 text-sm' : 'h-14 px-12 text-lg'}`}>
                  <span>View All Artists</span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Academics Section */}
        <section className={`text-white ${isMobile ? 'bg-primary py-12' : 'bg-primary py-16 lg:py-24'}`}>
          <div className={`container mx-auto max-w-7xl ${isMobile ? 'px-4' : 'px-6 lg:px-8'}`}>
            <div className={`flex items-center ${isMobile ? 'flex-col gap-8 text-center' : 'flex-col lg:flex-row justify-between gap-12 lg:gap-16'}`}>
              <div className={`${isMobile ? 'flex-shrink-0' : 'hidden lg:block flex-shrink-0'}`}>
                <span className={`material-symbols-outlined text-accent opacity-50 ${isMobile ? 'text-6xl' : 'text-7xl xl:text-9xl'}`} style={{fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 48"}}>school</span>
              </div>
              <div className={`flex-1 w-full ${isMobile ? '' : 'text-center lg:text-left'}`}>
                <h2 className={`font-bold ${isMobile ? 'text-2xl' : 'text-4xl lg:text-5xl'}`}>Launch Your Career in Beauty</h2>
                <p className={`opacity-90 ${isMobile ? 'mt-3 max-w-full text-sm' : 'mt-4 max-w-full lg:max-w-2xl text-lg lg:text-xl mx-auto lg:mx-0'}`}>Join the Salon Artista Academy and elevate your skills with our industry-leading educational programs, designed to turn passion into a profession.</p>
              </div>
              <Link to="/academics" className={`w-full flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-accent px-6 text-sm font-bold text-primary shadow-lg transition-transform hover:scale-105 ${isMobile ? 'lg:w-auto' : 'lg:w-auto'}`}>
                <span className="text-center">Explore Academics & Careers</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-background-light py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-color">What Our Clients Say</h2>
            <div className="relative mt-8 sm:mt-12 md:mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: "Maheshwari khade", quote: "I am delighted with the results. The service and staff are sweetest! Worth it! Ruchika has been doing my rica waxing and I don't think so I will stop getting it done from her!", stars: 5 },
                  { name: "Kiara Agarwal", quote: "I have been going to Artista for 10 years and I have never had a single complaint. Their service is so good & just look at that glow tysm Ruchika For keeping my skin so refreshed & hydrated in winter lots of love keep it up 🫶🏻", stars: 5 },
                  { name: "kruttika zala", quote: "I have been getting bridal facials here once a month. It is wonderful! The whole experience is so relaxing… Thanks to all staff. Special thanks to Supriya ma'am, Dhanashree ma'am for taking care of every small things and Anjali ma'am for the best nail art. Love coming here!", stars: 4 }
                ].map((review, index) => (
                  <div key={index} className="flex flex-col rounded-xl bg-white p-8 shadow-lg">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-2xl ${i < review.stars ? 'text-accent' : 'text-accent'}`}>{i < review.stars ? '★' : '☆'}</span>
                      ))}
                    </div>
                    <p className="mt-4 flex-grow text-base text-text-color/80 italic">{review.quote}</p>
                    <p className="mt-6 text-lg font-bold text-primary">- {review.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
