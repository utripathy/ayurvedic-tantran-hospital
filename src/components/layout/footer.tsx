export default function Footer() {
  return (
    <footer className="mt-20 bg-[#1e1e1e] text-white">
      <div className="container-custom py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">
              Ayurveda Tantran
            </h2>

            <p className="mt-4 text-gray-300">
              Holistic Ayurvedic wellness and healthcare.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2 text-gray-300">
              <li>About</li>
              <li>Services</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-4 space-y-2 text-gray-300">
              <p>Bhubaneswar, Odisha</p>
              <p>+91 9876543210</p>
              <p>info@ayurvedatantran.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}