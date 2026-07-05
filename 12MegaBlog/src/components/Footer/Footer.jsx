import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 bg-white border-t border-gray-200">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        
        <div className="-m-6 flex flex-wrap">
          
        
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              
              <div className="mb-5 inline-flex items-center">
                <Logo width="290px" />
              </div>

              <p className="text-sm text-gray-500 text-left">
                &copy; {new Date().getFullYear()} MegaBlog. All Rights Reserved.
              </p>
            </div>
          </div>

          
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link className="text-gray-700 hover:text-green-700 transition" to="/">Features</Link></li>
              <li><Link className="text-gray-700 hover:text-green-700 transition" to="/">Pricing</Link></li>
              <li><Link className="text-gray-700 hover:text-green-700 transition" to="/">Affiliate Program</Link></li>
              <li><Link className="text-gray-700 hover:text-green-700 transition" to="/">Press Kit</Link></li>
            </ul>
          </div>

          
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Support
            </h3>
            <ul className="space-y-3">
              <li><Link className="text-gray-700 hover:text-green-700 transition" to="/">Account</Link></li>
              <li><Link className="text-gray-700 hover:text-green-700 transition" to="/">Help</Link></li>
              <li><Link className="text-gray-700 hover:text-green-700 transition" to="/">Contact Us</Link></li>
              <li><Link className="text-gray-700 hover:text-green-700 transition" to="/">Customer Support</Link></li>
            </ul>
          </div>

         
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Legals
            </h3>
            <ul className="space-y-3">
              <li><Link className="text-gray-700 hover:text-green-700 transition" to="/">Terms & Conditions</Link></li>
              <li><Link className="text-gray-700 hover:text-green-700 transition" to="/">Privacy Policy</Link></li>
              <li><Link className="text-gray-700 hover:text-green-700 transition" to="/">Licensing</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer