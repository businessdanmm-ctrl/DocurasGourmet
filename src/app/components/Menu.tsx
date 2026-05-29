import { MessageCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('Chocolates');

  const categories = {
    Chocolates: [
      'Morango com Nutella',
      'Ninho com Nutella',
      'Cappuccino com Nutella',
      'Tapioca com Nutella',
      'Morango Trufado',
      'Prestígio',
      'Brigadeiro',
      'Oreo',
      
    ],
    Frutados: [
      'Açaí com Amendoim',
      'Mousse de Maracujá Trufado',
      'Mousse de Maracujá',
      'Mousse de Limão',
      'Tortinha de Limão',
      'Coco',
      'Coalhada',
    ],
    Novidades: [
      'Ninho com Morango',
      'Ouro Branco',
      'Coco com Abacaxi',
    ],
  };

  const favorites = ['Morango com Nutella', 'Ninho com Nutella', 'Mousse de Maracujá'];

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent('Olá! Gostaria de fazer um pedido de geladinhos gourmet.');
    window.open(`https://wa.me/5573982397835?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#FFF5F8] via-white to-[#B8F0E0]/20 border-y-4 border-[#FFE5B4]">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF69B4] to-[#DA70D6] rounded-3xl blur-lg opacity-50"></div>
            <div className="relative bg-gradient-to-r from-[#FF69B4] to-[#DA70D6] text-white px-10 py-4 rounded-3xl shadow-2xl">
              <h2 className="text-white text-2xl">Cardápio Premium</h2>
            </div>
          </div>
          <p className="text-gray-700 text-lg">
            Sabores artesanais preparados com muito carinho
          </p>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#FF69B4] to-[#DA70D6] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-[#FFF5F8] border border-[#FFE5B4]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-3 mb-8">
          {categories[selectedCategory as keyof typeof categories].map((flavor) => (
            <div
              key={flavor}
              className="bg-white p-4 rounded-xl border-2 border-[#FFE5B4] flex items-center justify-between shadow-md hover:shadow-lg hover:border-[#FF69B4] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                {favorites.includes(flavor) && (
                  <Sparkles size={18} className="text-[#FF69B4]" />
                )}
                <span className="text-gray-800">{flavor}</span>
              </div>
              <span className="text-[#FF69B4]">R$ 6,00</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#98D8C8]/20 to-[#FFE5B4]/20 border-2 border-[#98D8C8] rounded-2xl p-5 mb-8 shadow-md">
          <div className="flex items-center gap-2 justify-center">
            <Sparkles size={20} className="text-[#FF69B4]" />
            <p className="text-gray-800">Favoritos dos clientes</p>
          </div>
        </div>

        <button
          onClick={handleWhatsAppOrder}
          className="w-full bg-[#25D366] text-white py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02]"
        >
          <MessageCircle size={22} />
          <span className="text-lg">FAZER PEDIDO AGORA</span>
        </button>
      </div>
    </section>
  );
}
