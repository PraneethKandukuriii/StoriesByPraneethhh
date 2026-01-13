export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-white text-xl font-bold tracking-wide">
          StoriesByPraneethhh
        </div>
  
        {/* Nav Links */}
        <ul className="flex gap-8 text-white text-sm uppercase tracking-widest">
          <li className="cursor-pointer hover:opacity-70">Home</li>
          <li className="cursor-pointer hover:opacity-70">Work</li>
          <li className="cursor-pointer hover:opacity-70">About</li>
          <li className="cursor-pointer hover:opacity-70">Contact</li>
        </ul>
  
      </nav>
    )
  }
  