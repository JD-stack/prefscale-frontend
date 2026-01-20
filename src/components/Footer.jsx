export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <p>© {new Date().getFullYear()} PREFSCALE. All rights reserved.</p>
        <p className="text-sm">Performance Engineering Solutions</p>
      </div>
    </footer>
  );
}
