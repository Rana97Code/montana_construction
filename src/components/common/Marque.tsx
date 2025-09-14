const Marque = () => {
  const content = `Construction for Every Industry: We offer cutting-edge solutions tailored to industries like finance, healthcare, education, retail, and more. Our team specializes in building scalable, secure, and innovative Buildingthat powers businesses to thrive in the digital age. Explore our diverse expertise and let us help you elevate your business!`;

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative overflow-hidden py-2 bg-[#ffffff] marquee-container">
        <div className="absolute whitespace-nowrap marquee-text text-black">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Marque;
