import advisorHero from '@/assets/advisor-hero.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Photo */}
          <div className="animate-fade-in-left">
            <div className="relative">
              <img
                src={advisorHero}
                alt="Professional Financial Advisor"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                   style={{ backgroundColor: 'hsl(var(--gold-accent))' }}>
                <span className="text-lg font-bold" style={{ color: 'hsl(var(--navy-primary))' }}>
                  CFP®
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-right">
            <h2 className="mb-6">
              Your Trusted Financial Partner
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                With over 15 years of experience in wealth management and financial planning, 
                I have dedicated my career to helping high-net-worth individuals and families 
                achieve their financial goals through strategic investment planning and 
                comprehensive wealth management solutions.
              </p>
              
              <p>
                My approach combines deep market knowledge with personalized service, ensuring 
                that each client receives tailored strategies that align with their unique 
                financial objectives and risk tolerance. I believe in building long-term 
                relationships based on trust, transparency, and consistent results.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'hsl(var(--navy-primary))' }}>
                Professional Credentials
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--gold-accent))' }}></div>
                  <span className="font-medium">CFP® Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--gold-accent))' }}></div>
                  <span className="font-medium">CFA Charterholder</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--gold-accent))' }}></div>
                  <span className="font-medium">Series 7 & 66</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--gold-accent))' }}></div>
                  <span className="font-medium">FINRA Member</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <blockquote className="text-xl italic font-medium" style={{ color: 'hsl(var(--navy-primary))' }}>
                "My philosophy is simple: your financial success is my primary objective. 
                Every recommendation is made with your best interests in mind."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;