export default function Footer() {
    return (
      <footer className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 w-full">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-between items-start">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">wincatcher</h3>
              <p className="text-sm text-gray-300">
                Independent developer creating innovative solutions
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="text-sm">
                <li>
                  <a
                    href="#telegram"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Telegram Channel
                  </a>
                </li>
                <li>
                  <a
                    href="#social"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Social Media
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 text-right">
              <p className="text-sm">
                &copy; 2024 Wincatcher. All rights reserved.
              </p>
              <div className="mt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors mr-4"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }