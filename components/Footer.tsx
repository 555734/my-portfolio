export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-200 bg-white">
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}