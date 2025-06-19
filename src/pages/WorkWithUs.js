import { Link } from 'react-router-dom';
import jobs from '../data/jobs';

export default function WorkWithUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-center text-sky-800">Join Our Team</h1>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white rounded-xl shadow p-6 border border-gray-200 space-y-3"
        >
          <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
          <p className="text-gray-600">{job.description}</p>
          <p className="text-sm text-gray-500 italic">{job.location}</p>
        </div>
      ))}
    </div>
  );
}
