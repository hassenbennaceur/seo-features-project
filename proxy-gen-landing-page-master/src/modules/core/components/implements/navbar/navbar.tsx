import  Button  from "@/modules/core/components/Button/button";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-black">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-800 rounded-xl flex items-center justify-center">
          {/* You can replace this div with an <img src="..." /> if you have a logo */}
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
      </div>

      {/* Center: Navigation Links */}
      <div className="flex items-center gap-8 bg-[#111] py-2 px-6 rounded-full">
        <a href="#" className="text-white text-sm hover:underline">Features</a>
        <a href="#" className="text-white text-sm hover:underline">Developers</a>
        <a href="#" className="text-white text-sm hover:underline">Company</a>
        <a href="#" className="text-white text-sm hover:underline">Blog</a>
        <a href="#" className="text-white text-sm hover:underline">Changelog</a>
      </div>

      {/* Right: Button */}
      <Button className="bg-gradient-to-br from-purple-600 to-purple-800 text-white px-6 py-2 rounded-full shadow-lg">
        Join waitlist
      </Button>
    </nav>
  );
}
