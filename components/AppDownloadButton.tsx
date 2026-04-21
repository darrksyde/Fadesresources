'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, X } from 'lucide-react';
import { Button } from './UIComponents';
import { MOBILE_APP_URL } from '../lib/appConfig';

// ---------------------------------------------------------------------------
// Standalone modal — importable separately for custom-styled download triggers
// ---------------------------------------------------------------------------
interface AppDownloadModalProps {
  onClose: () => void;
}

export const AppDownloadModal: React.FC<AppDownloadModalProps> = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center px-4"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-fades-dark/60 backdrop-blur-sm" />
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 20 }}
      transition={{ duration: 0.25 }}
      className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full p-10 text-center"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-fades-dark transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
      <div className="w-14 h-14 bg-fades-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <Smartphone className="w-7 h-7 text-fades-green" />
      </div>
      <h3 className="text-2xl font-serif font-bold text-fades-dark mb-3">App Coming Soon</h3>
      <p className="text-gray-500 leading-relaxed">
        The FADES farmer app is on its way. Your farm's digital future is almost here,<br /> we'll let you know the moment it launches.
      </p>
      <button
        onClick={onClose}
        className="mt-8 w-full h-12 bg-fades-green text-white font-semibold rounded-full hover:bg-fades-green/90 transition-colors"
      >
        Got it
      </button>
    </motion.div>
  </motion.div>
);

// ---------------------------------------------------------------------------
// Hook — for custom-styled triggers (e.g. the card buttons on the Contact page)
// Usage:
//   const { handleClick, showModal, closeModal } = useAppDownload();
//   <button onClick={handleClick}>Download</button>
//   <AnimatePresence>{showModal && <AppDownloadModal onClose={closeModal} />}</AnimatePresence>
// ---------------------------------------------------------------------------
export const useAppDownload = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (MOBILE_APP_URL) {
      window.open(MOBILE_APP_URL, '_blank', 'noopener,noreferrer');
    } else {
      setShowModal(true);
    }
  };

  return { handleClick, showModal, closeModal: () => setShowModal(false) };
};

// ---------------------------------------------------------------------------
// AppDownloadButton — drop-in replacement for any Button-style download CTA.
// Handles both the "Coming Soon" modal and, when MOBILE_APP_URL is set,
// direct navigation to the store link — automatically, with no code changes.
// ---------------------------------------------------------------------------
interface AppDownloadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const AppDownloadButton: React.FC<AppDownloadButtonProps> = ({
  children,
  className,
  variant,
  size,
  ...props
}) => {
  const { handleClick, showModal, closeModal } = useAppDownload();

  return (
    <>
      <Button
        onClick={handleClick}
        className={className}
        variant={variant}
        size={size}
        {...props}
      >
        {children}
      </Button>
      <AnimatePresence>
        {showModal && <AppDownloadModal onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default AppDownloadButton;
