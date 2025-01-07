'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { fadeIn } from '@/utils/motion';

export default function Contact() {
  return (
    <motion.div variants={fadeIn('right', 'tween', 0.4, 1)} className="space-y-8">
      <h1 className="mb-4 text-4xl font-bold text-violet-500">Contact Me</h1>
      <p className="text-gray-300">Get in touch with me for any questions or opportunities.</p>
      <div className="flex items-center space-x-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-600">
          <FaEnvelope className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-violet-500">Email</h3>
          <p className="text-gray-300">shaik.m.iliyas@gmail.com</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-600">
          <FaPhone className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-violet-500">Phone</h3>
          <p className="text-gray-300">9182189384</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-600">
          <FaMapMarkerAlt className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-violet-500">Location</h3>
          <p className="text-gray-300">NTR Nagar, Kurnool, 518003</p>
        </div>
      </div>
    </motion.div>
  );
}
