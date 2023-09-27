import React from 'react';

function About() {
  return (
    <div className="bg-gray-100">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl rounded-lg">
            <div className="p-6">
              <h2 className="text-3xl font-extrabold text-gray-900">About Us</h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit dolor vel justo auctor, ut
                lacinia arcu varius. Donec a neque nec justo laoreet efficitur. Sed nec tellus neque.
              </p>
              <p className="mt-4 text-gray-600">
                Vivamus nec justo at neque dapibus pellentesque sed ac arcu. Fusce dignissim, justo nec viverra
                elementum, nunc ex elementum nulla, eget viverra mi arcu vel neque.
              </p>
              <p className="mt-4 text-gray-600">
                Praesent varius quam ac tristique malesuada. Fusce euismod interdum mauris, ac scelerisque quam
                iaculis at. Nulla nec odio nec est feugiat lacinia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
