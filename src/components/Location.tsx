import { FaLocationCrosshairs, FaEnvelope, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div className="px-4 py-16 bg-gray-50 sm:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-semibold text-gray-800 uppercase">
            Visit <span className="text-[#3689ce]">Mohanta Construction</span>
          </h1>
          <p className="text-lg text-gray-600">
            We're excited to welcome you to our headquarters. Use the map below
            or visit us at our office.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          {/* Contact Information */}
          <div className="w-full p-8 bg-white rounded-lg shadow-lg lg:w-1/2">
            {/* WhatsApp Section */}
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-xl font-semibold text-gray-800 uppercase">
                Need Assistance?
              </h2>
              <Link
                target="_blank"
                to="https://wa.me/8801722080196"
                className="inline-block px-6 py-3 text-white bg-[#458FCD] rounded-lg hover:bg-[#60a7e2] transition-colors duration-300"
              >
                Reach Out on WhatsApp{" "}
              </Link>
              <p className="mt-3 text-sm text-gray-500">
                We’re here to assist you with any questions or inquiries you may
                have.
              </p>
            </div>

            {/* Corporate Address */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Corporate Office Location
              </h3>
              <p className="mb-4 text-gray-600">
                Feel free to reach out to us using any of the following methods.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <FaLocationCrosshairs className="text-xl text-[#3689ce]" />
                  <span>350 5th Ave, New York, NY 10118, United States</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaEnvelope className="text-xl text-[#3689ce]" />
                  <span>
                    support@Mohanta Construction.com [Technical & Operations Support]
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaPhone className="text-xl text-[#3689ce]" />
                  <span>+88017xxxxxxx</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-center gap-4 mt-6">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="text-2xl fab fa-facebook"></i>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="text-2xl fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.35196272633!2d-73.97950600000001!3d40.697141499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2skh!4v1750685132102!5m2!1sen!2skh"
              className="w-full h-[550px] border-0 rounded-lg shadow-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
