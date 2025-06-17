import React, { useState } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaCalendarTimes } from 'react-icons/fa';
import { TbReportSearch } from 'react-icons/tb';
import { IoMdVideocam } from "react-icons/io";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { providerImages } from '../assets/images';
import exampleImg from '../assets/provider-example.avif';
import '../Providers.css';
import allTherapists from '../data/Providers'; // Assuming you have a JSON file with therapist data

// Utility to create slugs like 'ryne-evans'
function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

// Dropdown options
const specialtyOptions = [...new Set(allTherapists.flatMap(t => t.specialties))]
  .map(s => ({ label: s, value: s }))
  .sort((a, b) => a.label.localeCompare(b.label));
const insuranceOptions = [...new Set(allTherapists.flatMap(t => t.insurance))].map(i => ({ label: i, value: i }));
const locationOptions = [...new Set(allTherapists.flatMap(t => t.location))].map(l => ({ label: l, value: l }));
const serviceOptions = [...new Set(allTherapists.flatMap(t => t.services))].map(s => ({ label: s, value: s }));
const genderOptions = [...new Set(allTherapists.map(t => t.gender?.trim()))]
  .filter(Boolean)
  .map(g => ({ label: g, value: g }));

// Main Component
const Providers = () => {
  const query = '';
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedGender, setSelectedGender] = useState(null);
  const [availability, setAvailability] = useState({ value: 'all', label: 'All' });

  const filteredTherapists = allTherapists.filter(t => {
    const matchesQuery = t.name.toLowerCase().includes(query.toLowerCase()) || t.bio?.toLowerCase().includes(query.toLowerCase());
    const matchesSpecialties = selectedSpecialties.length === 0 || selectedSpecialties.every(sel => t.specialties.includes(sel.value));
    const matchesInsurance = !selectedInsurance || t.insurance.includes(selectedInsurance.value);
    const matchesLocation = selectedLocation.length === 0 || selectedLocation.every(loc => t.location.includes(loc.value));
    const matchesServices = selectedServices.length === 0 || selectedServices.every(serv => t.services.includes(serv.value));
    const matchesGender = !selectedGender || t.gender === selectedGender.value;
    const matchesAvailability = availability.value === 'all' ||
      (availability.value === 'true' && ['yes', 'assessments only'].includes(t.acceptingClients.toLowerCase())) ||
      (availability.value === 'false' && ['no', 'assessments only'].includes(t.acceptingClients.toLowerCase()));

    return matchesQuery && matchesSpecialties && matchesInsurance && matchesLocation && matchesServices && matchesGender && matchesAvailability;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Meet Our Providers</h1>
      <h3 className="text-lg text-center text-gray-600 mb-6">Use the search functions below to find a provider</h3>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div><label className="block font-medium text-sm text-gray-700 mb-1">Specialties</label><Select isMulti options={specialtyOptions} value={selectedSpecialties} onChange={setSelectedSpecialties} /></div>
        <div><label className="block font-medium text-sm text-gray-700 mb-1">Insurance</label><Select options={insuranceOptions} value={selectedInsurance} onChange={setSelectedInsurance} isClearable /></div>
        <div><label className="block font-medium text-sm text-gray-700 mb-1">Location</label><Select isMulti options={locationOptions} value={selectedLocation} onChange={setSelectedLocation} /></div>
        <div><label className="block font-medium text-sm text-gray-700 mb-1">Services</label><Select isMulti options={serviceOptions} value={selectedServices} onChange={setSelectedServices} /></div>
        <div><label className="block font-medium text-sm text-gray-700 mb-1">Gender</label><Select options={genderOptions} value={selectedGender} onChange={setSelectedGender} isClearable /></div>
        <div><label className="block font-medium text-sm text-gray-700 mb-1">Availability</label><Select options={[{ value: 'all', label: 'All' }, { value: 'true', label: 'Accepting New Clients' }, { value: 'false', label: 'Not Accepting New Clients' }]} value={availability} onChange={setAvailability} isClearable={false} /></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTherapists.map((t, i) => (
          <Link
            to={`/providers/${slugify(t.name)}`}
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="w-full aspect-[3/4] max-w-[300px] mx-auto mb-4 overflow-hidden rounded-lg">
              <img
                src={providerImages[t.name] || t.image || exampleImg}
                alt={t.name}
                className="w-full h-full object-cover rounded-lg shadow-sm"
                />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-lg font-semibold text-sky-700">
                {t.name} {t.license && (<span className="text-sm text-gray-800">({t.license})</span>)} {t.pronouns && (<span className="text-sm text-gray-600 ml-1">({t.pronouns})</span>)}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
                {t.location.includes('Telehealth') && (<span className="flex items-center gap-1"><IoMdVideocam /> Telehealth</span>)}
                {t.location.includes('U-District') && (<span className="flex items-center gap-1"><HiBuildingOffice2 /> U-District</span>)}
              </div>
              <div className="text-sm font-medium text-gray-700">
                {t.acceptingClients?.toLowerCase() === 'yes' && (<span className="flex items-center justify-center text-green-600 gap-1"><FaCalendarCheck /> Accepting New Clients</span>)}
                {t.acceptingClients?.toLowerCase() === 'assessments only' && (<span className="flex items-center justify-center text-orange-400 gap-1"><TbReportSearch /> Assessments Only</span>)}
                {t.acceptingClients?.toLowerCase() === 'no' && (<span className="flex items-center justify-center text-red-600 gap-1"><FaCalendarTimes /> Waitlist</span>)}
              </div>
              <ul className="flex flex-wrap justify-center gap-2">
                {(t.topSpecialties || []).map((spec, j) => (
                  <li key={j} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">{spec}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-gray-800">Insurance:</strong> {t.insurance.join(', ')}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Providers;
