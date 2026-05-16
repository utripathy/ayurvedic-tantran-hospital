'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import Button from '@/src/components/ui/button';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href='/' className='flex items-center gap-3'>
          <Image src='/branding/logo.png' alt='Ayurveda Tantran Hospital' width={80} height={80} className='object-contain' priority />
          <div>
            <h2 className='text-xl font-bold tracking-tight text-green-900'>Ayurveda Tantran</h2>

            <p className='text-xs text-gray-500'>Holistic Wellness Hospital</p>
          </div>
        </Link>

        <nav className='hidden items-center gap-8 md:flex'>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className='text-sm font-medium text-gray-700 transition hover:text-green-700'>
              {link.label}
            </Link>
          ))}

          <Link href='/appointments'>
            <Button>Appointment</Button>
          </Link>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className='border-t bg-white md:hidden'>
          <div className='container-custom flex flex-col gap-5 py-6'>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className='font-medium text-gray-700' onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}

            <Link href='/appointments'>
              <Button>Appointment</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
