const SectionTitle = ({ subHeading, heading }) => {
    return (
      <div className="w-full sm:w-1/3 mx-auto text-center py-10">
        <p className="text-[#D99904] text-lg font-normal italic border-b-4 p-5">
          {subHeading}
        </p>
        <h2 className="text-[#151515] text-base sm:text-xl lg:text-3xl font-normal border-b-4 p-5">
          {heading}
        </h2>
      </div>
    );
  };
  
  export default SectionTitle;
  