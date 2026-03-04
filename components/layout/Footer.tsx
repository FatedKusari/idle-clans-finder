import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#002020] py-5 border-t border-[#2a2f3e]">
            <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-400">
                <div className="flex items-center justify-center gap-4 mb-3 flex-wrap">
                    <Link href="/about" className="hover:text-emerald-400 transition-colors">
                        About
                    </Link>
                    <span className="text-gray-600">·</span>
                    <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                        Contact
                    </Link>
                    <span className="text-gray-600">·</span>
                    <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                        Privacy Policy
                    </Link>
                </div>
                <p>
                    © {currentYear} Idle Clans Hub. Not an official Idle Clans
                    website.
                </p>
                <p>
                    Made with 💚 by{' '}
                    <a
                        href="https://github.com/karolhas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300"
                    >
                        HSK
                    </a>
                </p>
            </div>
        </footer>
    );
}
