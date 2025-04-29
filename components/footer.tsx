import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t py-12 bg-card w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <div className="font-bold text-xl mb-4">
            <Image 
              src="/images_assets/logos/as1_logotype.png"
              alt="AS1 Logo"
              width={100}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 AS1. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Site</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-sm hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-sm hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/how-it-works" className="text-sm hover:underline">
                How It Works
              </a>
            </li>
            <li>
              <a href="/values" className="text-sm hover:underline">
                Values & Guidelines
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="/terms" className="text-sm hover:underline">
                User Agreement
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-sm hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/cookies" className="text-sm hover:underline">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="hover:text-primary">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}