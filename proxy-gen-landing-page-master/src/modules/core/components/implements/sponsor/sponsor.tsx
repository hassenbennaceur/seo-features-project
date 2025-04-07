'use client';

export default function Sponsor() {
  const sponsors = [
    { name: 'Acme Corp' },
    { name: 'Echo Valley' },
    { name: 'Quantum' },
    { name: 'PULSE' },
    { name: 'Outside' },
    { name: 'APEX' },
    { name: 'Celestial' },
    { name: '2TWICE' },
  ];

  return (
    <section className="bg-black text-white py-20 flex flex-col items-center">
      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
          Trusted by the world's most innovative teams
        </p>
        <div className="h-1 w-10 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-full mx-auto" />
      </div>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-24 w-48 bg-[#0e0e10] border border-gray-700 rounded-2xl hover:border-purple-500 hover:shadow-lg transition duration-300"
          >
            <span className="font-semibold text-lg">{sponsor.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
