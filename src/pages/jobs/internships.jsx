import { useNavigate } from 'react-router-dom';

export default function Internships() {
  const navigate = useNavigate();
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="inline-block mb-6 bg-sky-700 text-white px-4 py-2 rounded-md hover:bg-sky-800 transition"
        aria-label="Go back"
      >
        ← Back to Job Listings
      </button>
      <h1 className="text-3xl font-bold text-sky-800 mb-4">
        Master's Level Student Internship
      </h1>

        <h2 className="text-2xl text-center font-bold text-sky-800 mb-4">About our Internships</h2>    
            <p className="text-gray-700 mb-6">
                Mindful Way Therapy is excted to invite Master's-level students in Clinical Mental Health Counseling (CMHC), Marriage (Couples) and Family Therapy (MFT/CFT) programs to apply
                for an internship with us and become part of a team that strives to meet the needs of our community in working with diverse and marginalized communities. We are a practice that 
                is committed to dismantling the systems of oppression within mental health care and fostering a learning environment for students to gain hands-on clinical experience in providing
                psychotherapy while working alongside experienced professsionals in a safe and supportive enviroment.
            </p>

      <h3 className="text-xl font-bold text-sky-700 mt-8 mb-2">We Value Candidates Who:</h3>
        <ul className="list-disc list-outside pl-4 text-gray-700 mb-6 space-y-1">
            <li>A passion for learning and professional development</li>
            <li>Interest in working with diverse and underserved communities</li>
            <li>A collaborative mindset and willingess to contrinute to a dynamic team enviroment.</li>
            <li>A willingness to challenge themselves.</li>
        </ul>

      <h3 className="text-xl font-semibold text-sky-700 mt-8 mb-2">As a Student-Intern, You Will:</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 mb-6 space-y-1">
        <li>Provide direct counseling services, including group and/or couples and family therapy</li>
        <li>Participate in weekly individual and/or dyadic supervision with our owner, Ryne Evans, MA, LMFT or our Clinical Supervisor, Troy Weber, MA, LMFT</li>              
        <li>Complete documentation including: intakes, treatment plans and weekly progress notes.</li>
        </ul>

      <h3 className="text-xl font-semibold text-sky-700 mt-8 mb-2">Benefits</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 mb-6 space-y-1">
        <li>Training opportunities, including ADHD assessments (open to students during their last 6 months of placement)</li>
        <li>All marketing to ensure a steady stream of referrals, and front-office support!</li>
        <li>Weekly supervision (individual and/or dyadic)</li>
        <li>Ability to idenitfy and work with your preferred clientele (based on business needs)</li>
        <li>Marketing to help gain clients.</li>
      </ul>

      <h3 className="text-xl font-semibold text-sky-700 mt-8 mb-2">Expectations:</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 mb-6 space-y-1">
        <li>Part-time: minimum 12 clients per week (scheduling 15)</li>
        <li>Full-time: minimum 22 clients per week (scheduling 25)</li>
        <li className="italic ml-4">Note: providing assessments counts towards these minimum hours; exact ratio will be discussed during interview</li>
      </ul>

      <h3 className="text-xl font-semibold text-sky-700 mt-8 mb-2">Location</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 mb-6 space-y-1">
        <li className="italic">Remote/Hybrid to start with the possibility of in-person in the future</li>
      </ul>

      <h3 className="text-xl font-semibold text-sky-700 mt-8 mb-2">Salary Range</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 mb-6 space-y-1">
        <li>Starting at $42.75 for associates (increase after 6 months)</li>
        <li>Starting at $52.75 for fully-licensed (increase after 6 months)</li>
        <li>Admin rate: $30/hour (1 hour per 5 hours worked; max of 15 hours per month)</li>
        <li>Sliding scale and pro-bono is a reduced rate</li>
        <li className="italic ml-4">Assessments are paid at your hourly rate + a set rate per written evaluation</li>
      </ul>

      <h3 className="text-xl font-semibold text-sky-700 mt-8 mb-2">Responsibilities</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 mb-6 space-y-1">
        <li>Provide individual and couples therapy sessions to clients, with a focus on LGBTQ+ affirming care</li>
        <li>Conduct comprehensive patient assessments utilizing intake forms and assessment questionnaires</li>
        <li>Maintain accurate medical documentation and adhere to HIPAA regulations</li>
        <li>Educate clients and families about mental health resources and coping strategies</li>
        <li>Stay up-to-date on best practices and research in LGBTQ+ affirmative therapy</li>
        <li>Coordinate care and collaborate with community agencies or external providers when necessary</li>
      </ul>

      <h3 className="text-xl font-semibold text-sky-700 mt-8 mb-2">Minimum Requirements</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 mb-6 space-y-1">
        <li>Master's degree in Marriage and Family Therapy, Clinical Mental Health Counseling, or Social Work</li>
        <li>Must have completed an internship that meets state requirements</li>
        <li>Associate license (LMFTA, LMHCA, LSWAIC) in the state of Washington</li>
        <li>Experience working with LGBTQ+ clients and strong understanding of affirmative therapy</li>
        <li>Excellent communication and interpersonal skills</li>
        <li>Ability to work independently and as part of a team</li>
      </ul>

      <h3 className="text-xl font-semibold text-sky-700 mt-8 mb-2">Preferred</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 mb-6 space-y-1">
        <li>Fully licensed therapist in Washington</li>
        <li>Physically located in Washington State</li>
        <li>Personal/lived experience with the LGBTQ+ community</li>
      </ul>

      <p className="text-gray-600 mt-4 italic">
        Note: In compliance with Seattle's Fair Chance Employment Ordinance, we do not inquire about criminal backgrounds in the hiring process.
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href="https://form.jotform.com/251684509750059"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sky-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 transition"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
