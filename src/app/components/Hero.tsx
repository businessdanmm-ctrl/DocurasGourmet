import { MessageCircle } from 'lucide-react';
import img7959 from '../../imports/7959-1.jpg';
import logo from '../../imports/Card_pio_Atualizado-1.jpg'; 

export function Hero() {
  const whatsappNumbers = [
    { name: 'Victória', number: '5573982397835' },
    { name: 'Kaly', number: '5573982356629' },
    { name: 'Rogério', number: '5573991085949' },
  ];

  const handleWhatsAppClick = (number: string) => {
    const message = encodeURIComponent('Olá! Gostaria de fazer um pedido de geladinhos gourmet.');
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-[#FFF5F8] via-[#FFE5B4]/20 to-[#B8F0E0]/20 pt-8 pb-16 px-6">
      <div className="max-w-md mx-auto">
        {/* Logo destacada */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF69B4] via-[#DA70D6] to-[#98D8C8] rounded-3xl blur-xl opacity-60"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-4 border-4 border-white">
              <img
                src={logo}
                alt="Doçura Geladinhos Gourmet"
                className="w-64 h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="mb-3 leading-tight text-gray-800">
            Geladinhos Gourmet Artesanais que conquistam no primeiro sabor
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Sabores cremosos, ingredientes selecionados e combinações irresistíveis feitos artesanalmente.
          </p>
        </div>

        <div className="relative mb-8 rounded-3xl overflow-hidden shadow-xl">
          <img
            src={img7959}
            alt="Geladinhos Gourmet - Nutella e Ninho"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="space-y-4 mb-6">
          <button
            onClick={() => handleWhatsAppClick(whatsappNumbers[0].number)}
            className="w-full bg-[#FF69B4] text-white py-4 rounded-2xl shadow-lg hover:bg-[#ff4da1] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            FAZER PEDIDO AGORA
          </button>

          <div className="space-y-3">
            {whatsappNumbers.map((contact) => (
              <button
                key={contact.name}
                onClick={() => handleWhatsAppClick(contact.number)}
                className="w-full bg-[#25D366] text-white py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.01]"
              >
                <MessageCircle size={20} />
                <span>WhatsApp {contact.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#FFE5B4]/30 border border-[#FFE5B4] rounded-xl p-4 mb-4">
          <p className="text-center text-sm text-gray-700">
            Entregas a partir de 4 unidades
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Clientes aprovam nossos sabores artesanais
          </p>
        </div>
      </div>
    </section>
  );
}
