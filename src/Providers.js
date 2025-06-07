import React, { useState } from 'react';
import Select from 'react-select';
import exampleImg from './assets/provider-example.avif'; // Replace with actual image paths
import { FaCalendarCheck, FaCalendarTimes} from 'react-icons/fa';
import { TbReportSearch } from 'react-icons/tb';
import { IoMdVideocam } from "react-icons/io";
import { HiBuildingOffice2 } from "react-icons/hi2";
import './Providers.css';


// Moved ABOVE the component
const allTherapists = [
  {
    name: 'Ryne Evans',
    license: 'LMFT',
    pronouns: 'he/him',
    specialties: ['ADHD', 'Anxiety', 'Autism', 'Childhood Trauma', 'Depression', 'LGBTQ+ Identities', 'Polyamory', 'Relaionships', 'Sexuality', 'Trauma'],
    topSpecialties:['ADHD', 'Autism', 'LGBTQ+ Identities', 'Polyamory', 'Assessments'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Molina-Commercial', 'Premera', 'Private Pay', 'Regence', 'UHC-Medicaid', 'UHC-Commercial'],
    location: ['Telehealth', 'U-District'],
    services: ['Assessments', 'Individual', 'Couples', 'Family'],
    gender: ['Male'],
    acceptingClients: 'assessments Only',
    image: exampleImg,
  },
{
    name: 'McCall Evans',
    license: 'LMHCA',
    pronouns: 'he/him',
    specialties: ['ADHD', 'Anxiety', 'Autism', 'Depression', 'LGBTQ+ Identities', 'Parenting Support', 'PTSD', 'School Avoidance', 'Teens'],
    topSpecialties:['ADHD', 'Autism', 'LGBTQ+ Identities', 'Teens'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Molina-Commercial', 'Premera', 'Private Pay', 'Regence'],
    location: ['Telehealth', 'U-District'],
    services: ['Individual'],
    gender: ['Male'],
    acceptingClients: 'yes',
    image: exampleImg,
  },
{
    name: 'Chandra Lindeman',
    license: 'LMHC',
    pronouns: 'she/her',
    specialties: ['ADHD', 'Anxiety,', 'Autism', 'Chronic Illness', 'Depression', 'LGBTQ+ Identities', 'Life Transitions', 'PTSD', 'Parenting', 'Relationships'],
    topSpecialties:['ADHD', 'Chronic Illness', 'LGBTQ+ Identities', 'Parenting'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Molina-Commercial', 'Premera', 'Private Pay', 'Regence'],
    location: ['Telehealth'],
    services: ['Individual'],
    gender: ['Female'],
    acceptingClients: 'no',
    image: exampleImg,
  },
{
    name: 'Cheryl Snider',
    license: 'LSWAIC',
    pronouns: 'she/her',
    specialties: ['ADHD', 'Anxiety,', 'Autism', 'Chronic Illness', 'Depression', 'LGBTQ+ Identities', 'Life Transitions', 'PTSD', 'Parenting', 'Relationships'],
    topSpecialties:['ADHD', 'Autism', 'LGBTQ+ Identities', 'Polyamory', 'Couples'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Premera', 'Private Pay', 'Regence'],
    location: ['Telehealth'],
    services: ['Individual', 'Couples'],
    gender: ['Female'],
    acceptingClients: 'yes',
    image: exampleImg,
  },
{
    name: 'Paige Butkey',
    license: 'LMFTA',
    pronouns: 'she/her',
    specialties: ['ADHD', 'Anxiety,', 'Autism', 'Depression', 'LGBTQ+ Identities', 'Life Transitions', 'PTSD', 'Parenting', 'Relationships', 'Teens'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Premera', 'Private Pay', 'Regence'],
    topSpecialties:['ADHD', 'Autism', 'LGBTQ+ Identities', 'Couples'],
    location: ['Telehealth'],
    services: ['Individual', 'Couples', 'Family'],
    gender: ['Female'],
    acceptingClients: 'yes',
    image: exampleImg,
  },

];

// -------------------- DROPDOWN OPTIONS --------------------
const specialtyOptions = [...new Set(allTherapists.flatMap(t => t.specialties))].map(s => ({ label: s, value: s }));
const insuranceOptions = [...new Set(allTherapists.flatMap(t => t.insurance))].map(i => ({ label: i, value: i }));
const locationOptions = [...new Set(allTherapists.flatMap(t => t.location))].map(l => ({ label: l, value: l }));
const serviceOptions = [...new Set(allTherapists.flatMap(t => t.services))].map(s => ({ label: s, value: s }));
const genderOptions = [...new Set(allTherapists.map(t => t.gender))].map(g => ({ label: g, value: g }));

const Providers = () => {
  const [query, setQuery] = useState('');
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
    const matchesServices = selectedServices.length === 0 || selectedServices.every(serv => {
      if (t.name === 'Ryne Evans' && serv.value === 'Individual') {
        return availability.value === 'false' || (availability.value === 'true' && selectedServices.some(s => s.value === 'Assessments'));
      }
      return t.services.includes(serv.value);
    });
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

      <input
        type="text"
        className="w-full max-w-md mx-auto block px-4 py-2 border border-gray-300 rounded-md shadow-sm mb-6 text-gray-800 focus:ring-sky-500 focus:border-sky-500"
        placeholder="Search by name or keyword..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div><label className="block font-medium text-sm text-gray-700 mb-1">Specialties</label><Select isMulti options={specialtyOptions} value={selectedSpecialties} onChange={setSelectedSpecialties} /></div>
        <div><label className="block font-medium text-sm text-gray-700 mb-1">Insurance</label><Select options={insuranceOptions} value={selectedInsurance} onChange={setSelectedInsurance} isClearable /></div>
        <div><label className="block font-medium text-sm text-gray-700 mb-1">Location</label><Select isMulti options={locationOptions} value={selectedLocation} onChange={setSelectedLocation} /></div>
        <div><label className="block font-medium text-sm text-gray-700 mb-1">Services</label><Select isMulti options={serviceOptions} value={selectedServices} onChange={setSelectedServices} /></div>
        <div><label className="block font-medium text-sm text-gray-700 mb-1">Gender</label><Select options={genderOptions} value={selectedGender} onChange={setSelectedGender} isClearable /></div>
        <div><label className="block font-medium text-sm text-gray-700 mb-1">Availability</label><Select options={[{ value: 'all', label: 'All' }, { value: 'true', label: 'Accepting New Clients' }, { value: 'false', label: 'Not Accepting New Clients' }]} value={availability} onChange={setAvailability} isClearable={false} /></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 py-8">
        {filteredTherapists.map((t, i) => {
          const displayedSpecialties = t.specialties.length > 0 ? t.specialties.filter(spec => selectedSpecialties.some(sel => sel.value === spec)) : t.topSpecialties;

          return (
            <div key={i} className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <img src={t.image} alt={`Therapist ${t.name}`} className="w-full h-auto rounded-lg object-cover mb-4" />
              <div className="flex flex-col items-center space-y-4">
                <div><h2 className="text-lg font-semibold text-sky-700">{t.name}{t.pronouns && (<span className="ml-1 text-sm font-normal text-gray-600">({t.pronouns})</span>)}</h2></div>
                <p className="text-sm text-gray-800 font-medium">{t.license || 'LMFT'}</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
                  {t.location.includes('Telehealth') && (<span className="flex items-center gap-1"><IoMdVideocam /> Telehealth</span>)}
                  {t.location.includes('U-District') && (<span className="flex items-center gap-1"><HiBuildingOffice2 /> U-District</span>)}
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {t.acceptingClients?.toLowerCase() === 'yes' && (<span className="flex items-center justify-center text-green-600 gap-1"><FaCalendarCheck /> Accepting New Clients</span>)}
                  {t.acceptingClients?.toLowerCase() === 'assessments only' && (<span className="flex items-center justify-center text-orange-400 gap-1"><TbReportSearch /> Assessments Only</span>)}
                  {t.acceptingClients?.toLowerCase() === 'no' && (<span className="flex items-center justify-center text-red-600 gap-1"><FaCalendarTimes /> Not Accepting</span>)}
                </div>
                <ul className="flex flex-wrap justify-center gap-2">
                  {displayedSpecialties.map((spec, j) => (
                    <li key={j} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">{spec}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="text-gray-800">Insurance:</strong> {t.insurance.join(', ')}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Providers;
