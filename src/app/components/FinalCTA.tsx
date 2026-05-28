import { MessageCircle } from 'lucide-react';

export function FinalCTA() {
  const whatsappNumbers = [
    { name: 'Victória', number: '5573982397835' },
    { name: 'Kaly', number: '5573982356629' },
    { name: 'Rogério', number: '5573991085949' },
  ];

  const handleWhatsAppClick = (number: string, name: string) => {
    const message = encodeURIComponent(`Olá ${name}! Gostaria de fazer um pedido de geladinhos gourmet.`);
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#FFCCB3]/30 via-[#DA70D6]/20 to-[#B8F0E0]/30">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-block bg-gradient-to-r from-[#FF1493] to-[#DA70D6] text-white px-8 py-3 rounded-full mb-4 shadow-xl">
          <h2 className="text-white leading-tight">
            Seu próximo sabor favorito está aqui
          </h2>
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Faça seu pedido agora e receba geladinhos artesanais preparados com muito cuidado.
        </p>

        <div className="bg-white/80 backdrop-blur-sm border border-[#FFE5B4] rounded-2xl p-4 mb-8 shadow-sm">
          <p className="text-sm text-gray-700">
            Entregas disponíveis a partir de 4 unidades
          </p>
        </div>

        <div className="space-y-4">
          {whatsappNumbers.map((contact) => (
            <button
              key={contact.name}
              onClick={() => handleWhatsAppClick(contact.number, contact.name)}
              className="w-full bg-[#25D366] text-white py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle size={22} />
              <span>Pedir com {contact.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
