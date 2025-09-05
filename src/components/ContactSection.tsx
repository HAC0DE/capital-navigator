import { Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey towards financial success? Contact us today to schedule your consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center animate-fade-in-up">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: 'hsl(var(--blue-accent) / 0.1)' }}
            >
              <Phone size={24} style={{ color: 'hsl(var(--blue-accent))' }} />
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'hsl(var(--navy-primary))' }}>
              Phone
            </h3>
            <a 
              href="tel:+1-555-FINANCE" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              +1 (555) FINANCE
            </a>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: 'hsl(var(--blue-accent) / 0.1)' }}
            >
              <Mail size={24} style={{ color: 'hsl(var(--blue-accent))' }} />
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'hsl(var(--navy-primary))' }}>
              Email
            </h3>
            <a 
              href="mailto:advisor@capitalnavigator.com" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              advisor@capitalnavigator.com
            </a>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: 'hsl(var(--blue-accent) / 0.1)' }}
            >
              <MapPin size={24} style={{ color: 'hsl(var(--blue-accent))' }} />
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'hsl(var(--navy-primary))' }}>
              Office
            </h3>
            <p className="text-gray-600">
              123 Financial District<br />
              New York, NY 10005
            </p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: 'hsl(var(--blue-accent) / 0.1)' }}
            >
              <Clock size={24} style={{ color: 'hsl(var(--blue-accent))' }} />
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'hsl(var(--navy-primary))' }}>
              Hours
            </h3>
            <p className="text-gray-600">
              Mon - Fri: 8AM - 6PM<br />
              Sat: 9AM - 2PM
            </p>
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="border-t border-gray-200 pt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: 'hsl(var(--navy-primary))' }}>
              Professional Certifications & Memberships
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: 'hsl(var(--gold-accent) / 0.1)' }}
              >
                <Award size={24} style={{ color: 'hsl(var(--gold-accent))' }} />
              </div>
              <span className="text-sm font-medium">FINRA Member</span>
            </div>
            
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: 'hsl(var(--gold-accent) / 0.1)' }}
              >
                <Shield size={24} style={{ color: 'hsl(var(--gold-accent))' }} />
              </div>
              <span className="text-sm font-medium">SIPC Protected</span>
            </div>
            
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: 'hsl(var(--gold-accent) / 0.1)' }}
              >
                <Award size={24} style={{ color: 'hsl(var(--gold-accent))' }} />
              </div>
              <span className="text-sm font-medium">CFP® Certified</span>
            </div>
            
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: 'hsl(var(--gold-accent) / 0.1)' }}
              >
                <Award size={24} style={{ color: 'hsl(var(--gold-accent))' }} />
              </div>
              <span className="text-sm font-medium">CFA Institute</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;