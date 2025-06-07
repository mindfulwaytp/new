import React from 'react';
import therapyScene from './assets/therapy-scene.avif';
import therapyOffice from './assets/therapy-office.avif';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12 py-16 bg-sky-50">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to Mindful Way Therapy
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">Your Compassionate Space for Mental</p>
          <p className="text-xl text-gray-700 leading-relaxed">Health and Wellness.</p>
        </div>

        <div className="md:w-1/2">
          <img
            src={therapyScene}
            alt="Therapy Scene"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-start gap-10 px-6 md:px-12 py-20 bg-white">
        <div className="md:w-1/2">
          <img
            src={therapyOffice}
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">About Us</h2>

          <h3 className="text-xl font-semibold text-sky-700">Our Approach</h3>
          <p className="text-gray-700 leading-relaxed">
            We specialize in working with neurodivergent individuals, including those with autism, ADHD, and other neurodiverse conditions. Our therapists are trained to understand the unique challenges and strengths of neurodivergent clients.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Mindful Way Therapy, we're dedicated to providing compassionate and effective therapy services to individuals in the Seattle area and beyond...
          </p>

          <h3 className="text-xl font-semibold text-sky-700">Why Choose Us?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Personalized and affirming therapy tailored to your unique needs</li>
            <li>Experienced therapists who understand the challenges you're facing</li>
            <li>Safe and supportive environment where you can explore your thoughts and feelings</li>
            <li>Commitment to inclusivity and understanding of neurodiversity</li>
            <li>Flexible scheduling options to accommodate your lifestyle</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href="/providers"
              className="px-5 py-3 border border-gray-400 rounded-lg text-gray-800 hover:border-sky-500 hover:text-sky-700 transition inline-flex items-center gap-2"
            >
              <span>👥</span> Our Providers
            </a>
            <a
              href="/rates"
              className="px-5 py-3 border border-gray-400 rounded-lg text-gray-800 hover:border-sky-500 hover:text-sky-700 transition inline-flex items-center gap-2"
            >
              <span>💰</span> Rates & Insurance
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
