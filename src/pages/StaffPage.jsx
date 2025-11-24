import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const StarIcon = () => (
  <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Star = ({ fillPercentage }) => {
  return (
    <div className="inline-block relative w-5 h-5 text-gray-300">
      <StarIcon />
      <div
        className="absolute top-0 left-0 h-full overflow-hidden text-accent"
        style={{ width: `${fillPercentage * 100}%` }}
      >
        <StarIcon />
      </div>
    </div>
  );
};

function StaffPage() {
  const [selectedBranch, setSelectedBranch] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const staffMembers = [
    {
      name: "RAVIKIRAN",
      role: "Hair Director",
      description: "A visionary Hair Technical Head mastering advanced hair science, color technology, and precision artistry—leading the team with innovation, expertise, and unmatched technical excellence. 39+ Years of Experience",
      image: "/src/assets/images/employeeimgforartista.png",
      category: "Hair Director",
      branch: "Law College Road",
      rating: 5.0
    },
    {
      name: "OMKAR",
      role: "Hairstylist",
      description: "A hair artistry expert with mastery in advanced cuts, color, and styling. Recognized for creating signature looks that blend trend with individuality. 11+ Years of Experience",
      image: "/src/assets/images/employeeimgforartista.png",
      category: "Hairstylist",
      branch: "Law College Road",
      rating: 5.0
    },
    {
      name: "Ruchika",
      role: "Beauty Therapist",
      description: "A skincare perfectionist specializing in customised treatments that unlock natural radiance. Trusted for delivering consistent, visible results. 10+ Years of Experience",
      image: "/src/assets/images/employeeimgforartista.png",
      category: "Beauty Therapist",
      branch: "Law College Road",
      rating: 4.8
    },
    {
      name: "Chetan",
      role: "Hairstylist",
      description: "Precision-driven hair expert known for transforming every look with clean cuts, advanced styling, and trend-focused creativity. 10+ Years of Experience",
      image: "/src/assets/images/employeeimgforartista.png",
      category: "Hairstylist",
      branch: "Law College Road",
      rating: 4.8
    },
    {
      name: "Saqlain",
      role: "Hairstylist",
      description: "A master of hair artistry delivering flawless makeovers, seamless styling, and signature looks tailored to every client. 7+ Years of Experience",
      image: "/src/assets/images/employeeimgforartista.png",
      category: "Hairstylist",
      branch: "Law College Road",
      rating: 4.9
    },
    {
      name: "Naushad",
      role: "Beauty Therapist",
      description: "Detail-focused beautician delivering flawless grooming, expert skin care, and consistently polished results with professional precision. 5+ Years of Experience",
      image: "/src/assets/images/employeeimgforartista.png",
      category: "Beauty Therapist",
      branch: "Law College Road",
      rating: 4.8
    },
    {
      name: "Rajashree",
      role: "Beauty Therapist",
      description: "Skincare and beauty specialist known for gentle technique, clean finishes, and treatments that leave every client glowing with confidence. 16+ Years of Experience",
      image: "/src/assets/images/employeeimgforartista.png",
      category: "Beauty Therapist",
      branch: "Law College Road",
      rating: 4.8
    }
  ]

  const filteredStaff = staffMembers.filter(member => {
    const branchMatch = selectedBranch === 'All' || member.branch === selectedBranch
    const categoryMatch = selectedCategory === 'All' || member.category === selectedCategory
    return branchMatch && categoryMatch
  })

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 pt-16 sm:pt-20 md:pt-24">
        <div className="px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16 xl:py-20 flex justify-center">
          <div className="flex flex-col items-center text-center max-w-7xl flex-1 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tighter px-4">Meet Our Artistas</h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-text-color/80 px-4">
              Our talented team of stylists, colorists, and specialists are dedicated to bringing your vision to life with skill, passion, and artistry.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="px-4 sm:px-6 lg:px-10 pb-8 sm:pb-12 flex flex-col items-center gap-6 sm:gap-8">
          <div className="flex flex-col items-center gap-4 w-full max-w-7xl">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['All', 'Vishal Nagar', 'Law College Road'].map(branch => (
                <button
                  key={branch}
                  onClick={() => setSelectedBranch(branch)}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    selectedBranch === branch
                      ? 'bg-primary text-background-light shadow-md'
                      : 'text-text-color/70 bg-white/50 hover:bg-primary/10 hover:text-text-color'
                  }`}
                >
                  {branch}
                </button>
              ))}
            </div>
            <div className="w-full border-b border-solid border-text-color/10"></div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['All', 'Hair Director', 'Hairstylist', 'Beauty Therapist'].map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-background-light shadow-md'
                      : 'text-text-color/70 bg-white/50 hover:bg-primary/10 hover:text-text-color'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Staff Grid */}
        <div className="px-4 lg:px-10 py-5 flex flex-1 justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-7xl">
            {filteredStaff.map((member, index) => (
              <div key={index} className="flex flex-col text-center bg-white/50 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 items-center">
                <div className="w-40 h-40">
                  <div className="w-full h-full bg-center bg-no-repeat aspect-square bg-cover rounded-full border-2 border-accent" style={{backgroundImage: `url("${member.image}")`}}></div>
                </div>
                <div className="mt-6 flex flex-col flex-1">
                  <p className="text-xl font-bold text-text-color">{member.name}</p>
                  <p className="text-sm font-medium text-primary mt-1">{member.role}</p>
                  <div className="flex items-center justify-center mt-1">
                    {[...Array(5)].map((_, i) => {
                      const rating = member.rating;
                      const fullStars = Math.floor(rating);
                      const partialFill = rating - fullStars;

                      let fillPercentage = 0;
                      if (i < fullStars) {
                        fillPercentage = 1;
                      } else if (i === fullStars) {
                        fillPercentage = partialFill;
                      }

                      return <Star key={i} fillPercentage={fillPercentage} />;
                    })}
                    <span className="ml-2 text-sm text-text-color/70">({member.rating})</span>
                  </div>
                  <p className="text-text-color/70 text-sm font-normal leading-relaxed mt-4 flex-1">
                    {member.description}
                  </p>
                </div>
                <Link to={`/booking?expert=${member.name}&branch=${member.branch}`} className="mt-6 flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20">
                  <span className="truncate">Book with {member.name.split(' ')[0]}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default StaffPage

