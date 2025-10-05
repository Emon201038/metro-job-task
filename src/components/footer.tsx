import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Footer = () => {
  return (
    <footer className="lg:px-24 md:px-12 px-6 mt-12">
      <div className="bg-[#FFFFFF0A] w-full rounded-2xl py-4">
        <div className=" w-full flex flex-col justify-center items-center">
          <div className="h-20 w-full flex justify-center items-center">
            <Image src="/logo.png" alt="Logo" width={100} height={60} />
            <div className="h-full flex flex-col justify-center items-center text-white ml-2">
              <h1 className="font-bold tracking-wider">Metro Solver</h1>
              <p className="text-xs">your IT partner</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 px-4 gap-2">
          <div className="h-full flex flex-col justify-center items-center text-white ml-2">
            <h1 className="font-bold tracking-wider">
              Subscribe to Our Newsletter
            </h1>
            <p className="text-xs">Join the 25000+ client, in our company</p>
          </div>
          <div className="h-12 bg-white rounded-full w-full relative px-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-full w-full bg-transparent outline-none px-4"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-t from-[#9F63FF] via[#6D43E4] to-[#6331F1] py-2 px-4 rounded-full text-white flex gap-1 justify-center items-center hover:scale-105 transition-all duration-200">
              <Image src="/star.png" width={24} height={24} alt="explore" />
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12 text-white/95">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-xl font-semibold">
              Got Questions?
              <br />
              Call us !
            </h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">
                    Head office: Metro Solver Limited
                  </p>
                  <p>Grantham Road, London E-2</p>
                  <p>SLK, United Kingdom</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <p>+447956 455446</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <p>official@metrosolver.com</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">Country Currency</p>
              <Select defaultValue="gbp">
                <SelectTrigger className="w-full border-gray-600 bg-transparent text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gbp">🇬🇧 GBP - British Pound</SelectItem>
                  <SelectItem value="usd">🇺🇸 USD - US Dollar</SelectItem>
                  <SelectItem value="eur">🇪🇺 EUR - Euro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">Company</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  User Profile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  White Labelling
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">About Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Send Message
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">Support</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Start Earning
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Creative Writing Solution
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Web & Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  E-Commerce Solution
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Multimedia & Video Editing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Merchandise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Payment Website
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Premium Domains
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Special Combo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-12 border-t border-gray-600 pt-8">
          <p className="mb-6 text-sm text-gray-400">Our Future Partners</p>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-600" />
              <div>
                <p className="text-xs font-semibold">Meta</p>
                <p className="text-[10px] text-gray-400">Business Partner</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white" />
              <div>
                <p className="text-xs font-semibold">
                  Google Marketing Platform
                </p>
                <p className="text-[10px] text-gray-400">Certified Partner</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 grid-cols-2 gap-0.5">
                <div className="bg-red-500" />
                <div className="bg-green-500" />
                <div className="bg-blue-500" />
                <div className="bg-yellow-500" />
              </div>
              <div>
                <p className="text-xs font-semibold">Microsoft</p>
                <p className="text-[10px] text-gray-400">Partner</p>
              </div>
            </div>
            <div className="rounded border-2 border-orange-500 px-3 py-1.5">
              <p className="text-xs font-semibold text-orange-500">AWS</p>
              <p className="text-[10px] text-orange-500">Partner</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-red-600" />
              <div>
                <p className="text-xs font-semibold">Zoho</p>
                <p className="text-[10px] text-gray-400">Partner</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold">amazon</p>
              <p className="text-[10px] text-gray-400">SDN</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 via-pink-500 to-purple-600" />
              <div>
                <p className="text-xs font-semibold">TikTok</p>
                <p className="text-[10px] text-gray-400">Marketing Partners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-600 pt-6 text-xs text-gray-400 md:flex-row">
          <p>© Metro Solver. All Rights Reserved 2024</p>
          <p>
            Metro Solver Ltd incorporated in England & Wales Registration No
            15791389
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
