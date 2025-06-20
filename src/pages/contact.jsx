import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-3xl  text-sky-700 mb-4">New Client Inquiry</h1>

    {/* Intro Text */}
    <p className="mb-6 text-gray-700">
        Welcome to Mindful Way Therapy. We are thrilled to welcome you to our practice. To get started, please fill out our new client
        inquiry form below so we can ensure that we find the right fit for you.
    </p>
    <p className="mb-6 text-gray-700">
        Please review our provider directory page to view our current provider availability. Please note that most of our providers are currently full
        and maintain an active waitlist. By submitting a form, you are place in a central database and when a provider has availability that meets your needs
        you will be contacted. We understand that this can be difficult, especially when you are reaching out for help, and we appreciate your patience.
    </p>

    {/* Location or Details */}
      <div className="mb-8">
        <h2 className="text-lg  text-sky-700">Our Location</h2>
        <p className="text-gray-700">
          We provide services across Washington via telehealth. Our in-person office is located in the U-District of Seattle.
        </p>
      </div>

      {/* JotForm Embed */}
      <div className="w-full">
        <iframe
          id="JotFormIFrame-250715900822048"
          title="Mindful Way Therapy"
          src="https://form.jotform.com/250715900822048"
          allow="geolocation; microphone; camera; fullscreen; payment"
          allowtransparency="true"
          frameBorder="0"
          scrolling="yes"
          className="w-full rounded-lg shadow-md"
          style={{ minWidth: '100%', maxWidth: '100%', height: '1200px', border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}
