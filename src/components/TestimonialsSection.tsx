import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  result: string;
  image: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Working with this advisor completely transformed our financial outlook. Their strategic approach helped us increase our portfolio value by 40% while reducing risk.",
      name: "Sarah Mitchell",
      title: "CEO, Tech Innovations Inc.",
      result: "40% Portfolio Growth",
      image: testimonial1
    },
    {
      quote: "The retirement planning expertise provided by this team gave us confidence and peace of mind. We're now on track to retire comfortably 5 years earlier than planned.",
      name: "Robert Chen",
      title: "Former VP, Global Manufacturing",
      result: "Early Retirement Achieved",
      image: testimonial2
    },
    {
      quote: "Their tax optimization strategies saved us over $100,000 in the first year alone. The level of personal attention and expertise is unmatched in the industry.",
      name: "Maria Rodriguez",
      title: "Real Estate Developer",
      result: "$100K+ Tax Savings",
      image: testimonial3
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients who trusted us with their financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold" style={{ color: 'hsl(var(--navy-primary))' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              <div 
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                style={{ 
                  backgroundColor: 'hsl(var(--gold-accent) / 0.1)',
                  color: 'hsl(var(--navy-primary))'
                }}
              >
                {testimonial.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;