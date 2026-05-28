import { Instagram as InstagramIcon } from 'lucide-react';

export function Instagram() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/docuragourmet_01/', '_blank');
  };

  return (
    <section className="py-8 px-6 bg-white">
      <div className="max-w-md mx-auto">
        <div className="bg-gradient-to-r from-[#FFF5F8] to-white rounded-2xl p-6 border border-[#FFE5B4]/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF69B4] to-[#DA70D6] rounded-xl flex items-center justify-center shadow-md">
                <InstagramIcon size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Siga no Instagram</p>
                <p className="text-[#FF69B4]">@docuragourmet_01</p>
              </div>
            </div>
            <button
              onClick={handleInstagramClick}
              className="bg-gradient-to-r from-[#FF69B4] to-[#DA70D6] text-white px-6 py-2.5 rounded-xl text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Seguir
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
