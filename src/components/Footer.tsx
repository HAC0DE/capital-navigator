const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              CapitalNavigator
            </div>
            <p className="text-gray-300 mb-4">
              Professional financial advisory services for high-net-worth individuals and families.
            </p>
            <div className="text-sm text-gray-400">
              Securities offered through FINRA Member Firm.<br />
              Investment Advisory Services offered through SEC Registered Investment Advisor.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Financial District</p>
              <p>New York, NY 10005</p>
              <p>Phone: +1 (555) FINANCE</p>
              <p>Email: advisor@capitalnavigator.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              © 2024 CapitalNavigator. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-gray-500 leading-relaxed">
            <p>
              Investment advisory services offered through CapitalNavigator, a SEC registered investment advisor. 
              The information provided is for educational purposes only and does not constitute investment advice. 
              Past performance does not guarantee future results. All investments involve risk, including the potential loss of principal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;