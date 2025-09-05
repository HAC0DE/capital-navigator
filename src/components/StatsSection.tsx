import { useState, useEffect, useRef } from 'react';

interface StatItem {
  number: string;
  suffix: string;
  label: string;
}

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { number: '50', suffix: 'M+', label: 'Assets Managed' },
    { number: '15', suffix: '+', label: 'Years Experience' },
    { number: '200', suffix: '+', label: 'Satisfied Clients' },
    { number: '98', suffix: '%', label: 'Client Retention' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: 'hsl(var(--light-gray))' }}
    >
      <div className="container-width">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="stat-number mb-2">
                ${stat.number}{stat.suffix}
              </div>
              <div className="text-lg font-medium" style={{ color: 'hsl(var(--dark-gray))' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;