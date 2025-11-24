import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AcademicsPage() {
  const handleEnroll = (program) => {
    const phoneNumber = '9579158374'; // Remove '+' for URL
    const message = `*ENROLLMENT INQUIRY*\n\n` +
                   `*Course:* ${program.title}\n\n` +
                   `*Description:* ${program.description}\n\n` +
                   `Hello! I am interested in enrolling for the "${program.title}" program. \n\n` +
                   `Please provide me with more details about:\n` +
                   `• Course duration\n` +
                   `• Fees and payment options\n` +
                   `• Batch timings\n` +
                   `• Admission requirements\n\n` +
                   `Thank you! 🙏`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const programs = [
    {
      id: 'beauty-cosmetology',
      title: "Beauty - Cosmetology",
      description: "Explore the world of beauty and cosmetology, from skincare to makeup application.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjvpw9kbbYCOktsoQfMVA0PfY0PsOIy-HWBfIbzJnSdx-_5l4lMmdBY3pzhTOIwbRVsEE2eWwZ4iKH1D45sbJ0rszsObm0nHfN2z_w5E-_L66j_bj-4TUWcqUX14Mj25brkt2u4hafK-Q00FoqFP4y9J03UCyKkcxZJ8sV2TzReNJ8IWQqrfdU3ntyY8OH_-5ywpaUqHy-X2HBvZY_dqFsCsE9n-8xrJQs3hI7IkXR_QuJ2s67CKd95_LM0fThpevA4Cy1Hl9NzG4"
    },
    {
      id: 'hair-trichology',
      title: "Hair - Trichology",
      description: "Dive deep into the science of hair and scalp health with our trichology program.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4PSttZnjThsURKdwWUDF1C5h0SB-yG_S2aP6gw-_-xdNBrMPQBney-GMqKAzheBaJit7yH8KTxLflxugD_jafBtKQQpSL6b4OoHjAW07Jaz7g9ulmj_rG9RZDFgbqSr4tboj7WaGnJvhqyttpZhDxxdsSVRd-uC2CDaOFzfYgtV_iYgvZ4yULevfIL8cXSetseIBDtjlmwRxgaLsYDT2AYtX3wGosykbAfZP5-UyaJB1Leds4wZn8v9qE3HmkrNzjIAgLF2pjSIs"
    },
    {
      id: 'tattoos-piercing',
      title: "Tattoos - Piercing",
      description: "Master the art of body modification, from intricate tattoo designs to safe piercing techniques.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzykPdG1p8DRVaajkKvb3yQum783iJtJeh_MvMKGtZ497h1anihb7_DA1hobrjg7_mRVnDgHLXIZVwxVRM4crbpwcexprC2lDj6xmyc_goT2FJqedURjwDdS8KZd54TfmXUdakW6CgPf4qIjjQoHujyoszhgg8gCL6XX4NBBfUDj_CBBPRZt066xP-VaOdUnoCoq-9fqvy7KRfMejPc1Xc8MLj13qd07uwnjxLhNs9IQ6zgIMvxbTGgz0X6otSY9etdGz-n83mihM"
    },
    {
      id: 'nail-art-diploma',
      title: "Nail Art Diploma",
      description: "Unleash your creativity with professional training in nail art, manicures, and pedicures.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzykPdG1p8DRVaajkKvb3yQum783iJtJeh_MvMKGtZ497h1anihb7_DA1hobrjg7_mRVnDgHLXIZVwxVRM4crbpwcexprC2lDj6xmyc_goT2FJqedURjwDdS8KZd54TfmXUdakW6CgPf4qIjjQoHujyoszhgg8gCL6XX4NBBfUDj_CBBPRZt066xP-VaOdUnoCoq-9fqvy7KRfMejPc1Xc8MLj13qd07uwnjxLhNs9IQ6zgIMvxbTGgz0X6otSY9etdGz-n83mihM"
    },
    {
      id: 'painting-crafting',
      title: "Painting & Crafting",
      description: "Develop your artistic voice and technical skills in various painting mediums and crafting techniques.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjvpw9kbbYCOktsoQfMVA0PfY0PsOIy-HWBfIbzJnSdx-_5l4lMmdBY3pzhTOIwbRVsEE2eWwZ4iKH1D45sbJ0rszsObm0nHfN2z_w5E-_L66j_bj-4TUWcqUX14Mj25brkt2u4hafK-Q00FoqFP4y9J03UCyKkcxZJ8sV2TzReNJ8IWQqrfdU3ntyY8OH_-5ywpaUqHy-X2HBvZY_dqFsCsE9n-8xrJQs3hI7IkXR_QuJ2s67CKd95_LM0fThpevA4Cy1Hl9NzG4"
    }
  ]



  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-10">
            <div className="flex min-h-[480px] flex-col items-center justify-center gap-8 rounded-xl bg-cover bg-center bg-no-repeat p-4 shadow-xl" style={{backgroundImage: "linear-gradient(rgba(40, 50, 20, 0.5) 0%, rgba(20, 20, 0, 0.7) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB--H3MZK7tqHsSDxO1HVU5Sa6CHWKXSRxDSu9hT7OHTrQoLXW_USb9PHWNsDrItkHvS4ze2F6xzUTK2EIFF9Ot8yUHAc5ht-ojTucgTs4GF0Pu4DwkrMZvfLDPeoX3qdaP7Y1ofZ0XbhpJ3D0VgBl7jR6Shq8-uhDmYunLAWWyYrzmbK4lZb4PVkYFCaNc4WmaUD2c2C-zG6jlRgOo2gWnPkXVx_5P3Q3-gBXtXZrEWh1FqcTzaS7H0nlWJZlHTeReSicgVVTL_pg')"}}>
              <div className="flex flex-col gap-2 text-center text-white">
                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">Nurturing Future Artistas</h1>
                <p className="mx-auto max-w-2xl text-base font-normal leading-normal md:text-lg">
                  Discover your passion and craft your future with our world-class training programs designed for the next generation of beauty professionals.
                </p>
              </div>
              <button 
                onClick={() => document.getElementById('programs-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-accent text-text-color text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors"
              >
                <span className="truncate">Explore Programs</span>
              </button>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs-section" className="w-full py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-primary">Our Programs</h2>
              <p className="mt-2 text-lg text-text-color/80">Embark on a journey to mastery with our specialized diploma programs.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program) => (
                <div key={program.id} className="flex flex-col overflow-hidden rounded-xl bg-white shadow-xl transition-shadow hover:shadow-2xl">
                  <div className="w-full aspect-[4/3] bg-cover bg-center" style={{backgroundImage: `url("${program.image}")`}}></div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-primary">{program.title}</h3>
                      <p className="mt-2 text-sm text-text-color/80">{program.description}</p>
                    </div>
                    <Link to={`/academics/${program.id}`}>
                      <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-md hover:bg-opacity-90 transition-all hover:shadow-lg">
                        Explore
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>





      </main>
      <Footer />
    </div>
  )
}

export default AcademicsPage

