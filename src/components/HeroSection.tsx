import advisorHero from '@/assets/advisor-hero.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50 mt-16">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <h1 className="mb-6">
              Expert Financial Advisory Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Trusted advisor managing $50M+ in client assets with proven investment strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('consultation')}
                className="btn-primary"
              >
                Book Consultation
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="btn-outline"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="animate-fade-in-right">
            <div className="relative">
              <img
                src={advisorHero}
                alt="Professional Financial Advisor"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;