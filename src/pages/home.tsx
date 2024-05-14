import About from "../componennts/about-section";
import Hero from "../componennts/hero-section";


function HomePage() {


  return (
    <div className=" text-white p-8 md:h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center  overflow-hidden">
        <Hero />
      </div>
      <About/>
      
    </div>
  );
}

export default HomePage