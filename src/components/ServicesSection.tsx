import { 
  TrendingUp, 
  PiggyBank, 
  BarChart3, 
  Calculator, 
  Shield, 
  Target 
} from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      icon: TrendingUp,
      title: 'Wealth Management',
      description: 'Comprehensive portfolio management and investment strategies tailored to your financial goals and risk tolerance.'
    },
    {
      icon: PiggyBank,
      title: 'Retirement Planning',
      description: 'Strategic retirement planning to ensure financial security and lifestyle maintenance throughout your golden years.'
    },
    {
      icon: BarChart3,
      title: 'Investment Advisory',
      description: 'Expert investment guidance across asset classes with focus on long-term growth and risk management.'
    },
    {
      icon: Calculator,
      title: 'Tax Planning',
      description: 'Tax-efficient strategies to minimize liability while maximizing your wealth accumulation opportunities.'
    },
    {
      icon: Shield,
      title: 'Estate Planning',
      description: 'Comprehensive estate planning solutions to protect and transfer wealth to future generations efficiently.'
    },
    {
      icon: Target,
      title: 'Risk Management',
      description: 'Insurance and risk assessment strategies to protect your wealth from unforeseen circumstances.'
    }
  ];

  return (
    <section id="services" className="section-padding" style={{ backgroundColor: 'hsl(var(--light-gray))' }}>
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Comprehensive Financial Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From wealth management to retirement planning, I provide a full suite of financial services 
            designed to help you achieve your financial objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ backgroundColor: 'hsl(var(--blue-accent) / 0.1)' }}
                >
                  <service.icon 
                    size={32} 
                    style={{ color: 'hsl(var(--blue-accent))' }}
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                {service.description}
              </p>
              
              <div className="text-center">
                <button 
                  className="text-blue-600 font-semibold hover:underline transition-colors duration-300"
                  style={{ color: 'hsl(var(--blue-accent))' }}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;