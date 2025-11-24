import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
  
  // Mobile images (portrait oriented)
  const mobileImages = [
    {
      image: "/src/assets/images/bannerforartista-mobile.jpg",
      title: "Artistry in Every Strand",
      subtitle: "Experience the pinnacle of beauty and craftsmanship, where every detail is tailored to your unique essence."
    },
    {
      image: "/src/assets/images/bannerforartista-mobile-2.jpg",
      title: "Beauty Redefined",
      subtitle: "Where innovation meets artistry - creating stunning transformations that reflect your inner radiance."
    },
    {
      image: "/src/assets/images/bannerforartista-mobile-3.jpg",
      title: "Your Style, Our Passion",
      subtitle: "Dedicated to bringing your vision to life with professional expertise and creative excellence."
    },
    {
      image: "/src/assets/images/bannerforartista-mobile-4.jpg",
      title: "Transform Your Look",
      subtitle: "Discover the confidence that comes with exceptional beauty services and personalized care."
    }
  ]
  
  // Desktop images (landscape oriented)
  const desktopImages = [
    {
      image: "/src/assets/images/bannerforartista.jpg",
      title: "Artistry in Every Strand",
      subtitle: "Experience the pinnacle of beauty and craftsmanship, where every detail is tailored to your unique essence."
    },
    {
      image: "/src/assets/images/bannerforartista-2.jpg",
      title: "Beauty Redefined",
      subtitle: "Where innovation meets artistry - creating stunning transformations that reflect your inner radiance."
    },
    {
      image: "/src/assets/images/bannerforartista-3.jpg",
      title: "Your Style, Our Passion",
      subtitle: "Dedicated to bringing your vision to life with professional expertise and creative excellence."
    },
    {
      image: "/src/assets/images/bannerforartista-4.jpg",
      title: "Transform Your Look",
      subtitle: "Discover the confidence that comes with exceptional beauty services and personalized care."
    }
  ]
  
  // Use appropriate images based on screen size
  const heroImages = isMobile ? mobileImages : desktopImages

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full">
      <Header />
      <main className="pt-16 sm:pt-20 md:pt-24">
        {/* Hero Section */}
        <section 
          className="relative min-h-screen w-full bg-contain bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: 'url(' + heroImages[currentSlide].image + ')',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8">
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
              <h1 className="w-full text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter text-white">{heroImages[currentSlide].title}</h1>
              <p className="mt-4 w-full max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/90 mx-auto">{heroImages[currentSlide].subtitle}</p>
            </div>
          </div>
          
          <button 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); }}
            className="absolute left-4 sm:left-6 md:left-8 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl">chevron_left</span>
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); }}
            className="absolute right-4 sm:right-6 md:right-8 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl">chevron_right</span>
          </button>
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 z-20 -translate-x-1/2">
            <div className="flex items-center gap-2">
              {heroImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); goToSlide(index); }}
                  className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-colors cursor-pointer ${
                    index === currentSlide ? 'bg-accent' : 'bg-white/40 hover:bg-white/60'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="bg-background-light py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-color">Our Expertise</h2>
            <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
              {[
                {
                  title: "Haircare",
                  description: "Experience the ultimate in hair luxury, from stunning style to deep repair and vibrant color.",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1sVSrwU1rzLyBRhSNNzov-gRHpmiD9pNtRfwV2qlDS8NhPcmYjhvNxinEQq8wxALWEKVBeYN2VfYnPSjVmtUWNXqI_4cNwhiMMdwrQtGxTAMlcLJTV-48yGuCRDChBP4BRJTWK6W_ER9ImgzirXL7Llvu8-tDi8EWU5pQ__A_IMVNIwUvZXgnarn2blaKqB_QxKgXtMd-gv57Mfqw_br3pYH_nOZJ7-2WO4rMnZsVktXA1_0nmDF0JwmL2rg-Ddu6fZTO4KbNUDI"
                },
                {
                  title: "Skincare & Wellness",
                  description: "Indulge in treatments designed to revitalize your skin, soothe your body, and promote holistic well-being.",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGpHHQCIZYqpBXw_JbknXOevM4FPagFNfZ_D-Onk7lzKdApKA2aPfid6sthTU2qVzE1ssVaup4aH2FwGJrVR7vaXn4SvAyqp6ht8ZoIz8dImkTdCa58E9GQYvnCMwz_DwIuXTY8PRhoyurPN7dJdHiUgf_wxFZE8tgPxdnAJq5d8V0Uu4HMs6-ULA-TpKOfEAI8ZUM8ZcP1PilI0yhheroy5DGf8MkLPBv8kFyj833WBKAmT1v6plIGM1l1tJlHM4lX7xcvIc8UP0"
                },
                {
                  title: "Makeup Studio & Tattoo Art",
                  description: "Get ready for your moment with professional makeup or make a permanent statement.",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtcataQZ93f9trUIYBwgU1iNdHssgOesFO3qEXEifzZqRltOsUERFmJe7M4YU4Dk3ghtfclRNC1OyYoj4XfnTZhd5i5nSA674NLBB9UwBqARUgdAQhdm2F8fF9bex9IB20rSa7EMPE7HyQF9uPK2uYco7OvCCICOeBJNueIJ16JJ0svPHXnLwbH9Mc8op_050j9pRJI7Rxygh64eAUms0zuJluZxIWqAl25mw-29aNOR1kF23OGmUda4nChRPA01YHOQ2agJN8WuM"
                },
                {
                  title: "Manicure & Pedicure",
                  description: "Pamper your hands and feet with our rejuvenating services.",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSp4MMzYjmdhcbim-ofzOlaPHzsbPsk3MktNAzxQpxtJ9iLnwpJUrLqiLnTGptK3V6ldt5Up-KDbuGAhgFVBp2tq8-SDbCv42DOGbi3Sn8BZ0_fkmRXX4WlzR2J_uxFw20cKEyn31a_TVtkY1NdY--w1zJ2q8Rk_OqehpcJIur2Rj1x_nwmmaZDBvTTVaX-4aCKdGUPVzhcv1AEDnt_4ugIbXVmpCfPMmpLWe5xoaFCgzz0N3rfxytBzDFKNLbwWeLI2KU8EdoiHA"
                },
                {
                  title: "Nail Art",
                  description: "Express your creativity with custom designs on your nails.",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSp4MMzYjmdhcbim-ofzOlaPHzsbPsk3MktNAzxQpxtJ9iLnwpJUrLqiLnTGptK3V6ldt5Up-KDbuGAhgFVBp2tq8-SDbCv42DOGbi3Sn8BZ0_fkmRXX4WlzR2J_uxFw20cKEyn31a_TVtkY1NdY--w1zJ2q8Rk_OqehpcJIur2Rj1x_nwmmaZDBvTTVaX-4aCKdGUPVzhcv1AEDnt_4ugIbXVmpCfPMmpLWe5xoaFCgzz0N3rfxytBzDFKNLbwWeLI2KU8EdoiHA"
                }
              ].map((item, index) => (
                <Link key={index} to="/services" className="w-full max-w-xs sm:max-w-sm lg:max-w-none">
                  <div className="group overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full w-full">
                    <div className="h-48 sm:h-56 md:h-64 w-full bg-cover bg-center" style={{backgroundImage: `url(${item.image})`}}></div>
                    <div className="p-4 sm:p-5 md:p-6 text-center flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-color">{item.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-text-color/80">{item.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


        {/* Team Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-color">Meet Our Artists</h2>
            <div className="relative mt-8 sm:mt-12 md:mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { name: "RAVIKIRAN", role: "Hair Director", quote: "A visionary Hair Technical Head mastering advanced hair science, color technology, and precision artistry—leading the team with innovation, expertise, and unmatched technical excellence. 39+ Years of Experience", image: "https://picsum.photos/200/200?random=1" },
                  { name: "OMKAR", role: "Hairstylist", quote: "A hair artistry expert with mastery in advanced cuts, color, and styling. Recognized for creating signature looks that blend trend with individuality. 11+ Years of Experience", image: "https://picsum.photos/200/200?random=2" },
                  { name: "Ruchika", role: "Beauty Therapist", quote: "A skincare perfectionist specializing in customised treatments that unlock natural radiance. Trusted for delivering consistent, visible results. 10+ Years of Experience", image: "https://picsum.photos/200/200?random=3" }
                ].map((member, index) => (
                <div key={index} className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-lg">
                    <img className="h-32 w-32 rounded-full object-cover ring-2 ring-accent ring-offset-4 ring-offset-white" src={member.image} alt={member.name} />
                    <h3 className="mt-6 text-xl font-bold text-primary">{member.name}</h3>
                    <p className="text-md text-primary/80">{member.role}</p>
                    <p className="mt-4 text-sm italic text-text-color/70">{member.quote}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <Link to="/staff">
                <button className="flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-10 text-base font-bold text-white shadow-lg transition-transform hover:scale-105">
                  <span>View All Artists</span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Academics Section */}
        <section className="bg-primary py-12 sm:py-16 md:py-20 lg:py-24 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
              <div className="hidden lg:block flex-shrink-0">
                <span className="material-symbols-outlined text-6xl lg:text-7xl xl:text-9xl text-accent opacity-50" style={{fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 48"}}>school</span>
              </div>
              <div className="flex-1 w-full text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Launch Your Career in Beauty</h2>
                <p className="mt-3 sm:mt-4 max-w-full md:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl opacity-90 mx-auto md:mx-0">Join the Salon Artista Academy and elevate your skills with our industry-leading educational programs, designed to turn passion into a profession.</p>
              </div>
              <Link to="/academics" className="w-full sm:w-auto flex h-10 sm:h-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-accent px-6 sm:px-8 text-sm sm:text-base font-bold text-primary shadow-lg transition-transform hover:scale-105 flex-shrink-0">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { name: "Maheshwari khade", quote: "I am delighted with the results. The service and staff are sweetest! Worth it! Ruchika has been doing my rica waxing and I don’t think so I will stop getting it done from her!", stars: 5 },
                  { name: "Kiara Agarwal", quote: "I have been going to Artista for 10 years and I have never had a single complaint. Their service is so good & just look at that glow tysm Ruchika For keeping my skin so refreshed & hydrated in winter lots of love keep it up 🫶🏻", stars: 5 },
                  { name: "kruttika zala", quote: "I have been getting bridal facials here once a month. It is wonderful! The whole experience is so relaxing… Thanks to all staff. Special thanks to Supriya ma'am, Dhanashree ma'am for taking care of every small things and Anjali ma'am for the best nail art. Love coming here!", stars: 4 }
                ].map((review, index) => (
                  <div key={index} className="flex flex-col rounded-xl bg-white p-8 shadow-lg">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => {
                        const starValue = i + 1
                        const isFilled = starValue <= review.stars
                        const isOutlined = starValue > review.stars
                        
                        let starChar = '☆'
                        let starClass = 'text-2xl'
                        
                        if (isFilled) {
                          starChar = '★' // Filled star with accent color
                          starClass += ' text-accent'
                        } else if (isOutlined) {
                          starChar = '☆' // Outlined star with accent color border
                          starClass += ' text-accent'
                        }
                        
                        return (
                          <span key={i} className={starClass}>
                            {starChar}
                          </span>
                        )
                      })}
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