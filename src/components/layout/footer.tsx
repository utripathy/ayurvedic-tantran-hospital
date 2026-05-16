import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#1f2937] text-white">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Ayurveda Tantran
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-300">
              Holistic Ayurvedic wellness and healthcare
              solutions for healthier living.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-300">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Services
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-300">
              <p>Panchakarma</p>
              <p>Skin Care</p>
              <p>Stress Management</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-300">
              <p>Bhubaneswar, Odisha</p>
              <p>+91 9876543210</p>
              <p>info@ayurvedatantran.com</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2026 Ayurveda Tantran Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}