// hero section complited
import Benner from '../assets/banner-stack.png'

function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Your Ideal <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:opacity-95 transition">
              Explore Technologies
            </button>
            <button className="text-gray-700 font-medium px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Banner Image */}
        <div className="flex-1 flex justify-center w-full max-w-lg md:max-w-none">
          <img 
            src={Benner} 
            alt="DevStack Banner" 
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;