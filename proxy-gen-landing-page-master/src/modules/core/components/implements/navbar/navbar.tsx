import Button from "@/modules/core/components/Button/button";

export default function Navbar() {
  return (
    <nav className="flex w-[1200px] h-[50px] py-[13px] justify-center items-center gap-[74px] mx-auto border-b border-white/15 ">
        {/* Logo */}
      <div className="flex items-center">
        <div className="bg-gradient-to-br from-purple-500 to-purple-800 rounded-xl w-10 h-10 flex items-center justify-center">
          <img src="/images/logo1.png" width="38" height="38" alt="Logo" />
        </div>
      </div>

      {/* Spacer after logo */}
      

      {/* Nav links */}
      <div className="flex items-center justify-center gap-[30px] bg-black py-2 px-10 rounded-full border border-gray-500">
        <a href="#" className="text-white text-sm hover:underline">Features</a>
        <a href="#" className="text-white text-sm hover:underline">Developers</a>
        <a href="#" className="text-white text-sm hover:underline">Company</a>
        <a href="#" className="text-white text-sm hover:underline">Blog</a>
        <a href="#" className="text-white text-sm hover:underline">Changelog</a>
      </div>


      {/* Spacer after nav links */}
     

      {/* Join Waitlist Button */}
      <div className="flex items-center justify-center bg-black p-[2px] border border-gray-500 rounded-lg">
        <Button className="!text-[10px] bg-gradient-to-br from-purple-600 to-purple-800 text-white w-[109px] h-[30px] rounded-lg font-medium flex items-center justify-center normal-case">
          Join waitlist
        </Button>
      </div>





    </nav>

  );
}
