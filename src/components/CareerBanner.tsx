const CareerBanner = () => {
  return (
    <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                New Opportunities Await
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-4xl font-semibold text-gray-900 sm:text-5xl">
              Join Mohanta Construction and unlock limitless growth and
              success jumps over{" "}
            </h2>

            <p className="text-base text-gray-700 md:text-lg">
              At Mohanta Construction, we believe in empowering our employees
              with exciting career opportunities, continuous learning, and a
              culture of innovation. Join us to grow, innovate, and make an
              impact in the tech world!
            </p>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
    </div>
  );
};

export default CareerBanner;
