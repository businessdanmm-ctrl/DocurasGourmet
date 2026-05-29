import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: 'Extremamente cremoso e muito saboroso.',
      author: 'Danm R..',
    },
    {
      text: 'O de Ninho com Nutella virou meu favorito.',
      author: 'Dona Neide.',
    },
    {
      text: 'Qualidade impecável e entrega rápida.',
      author: 'João P..',
    },
  ];

  const stats = [
    { label: 'Clientes Satisfeitos', value: '500+' },
    { label: 'Sabores Disponíveis', value: '18' },
    { label: 'Pedidos Entregues', value: '1500+' },
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-white via-[#FFF5F8] to-[#FFE5B4]/10">
      <div className="max-w-md mx-auto">
        <div className="space-y-4 mb-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-[#FFF5F8] p-5 rounded-2xl shadow-md border border-[#FF69B4]/20"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FF69B4" stroke="#FF69B4" />
                ))}
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-gray-500">— {testimonial.author}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl mb-1 text-[#FF69B4]">{stat.value}</div>
              <div className="text-xs text-gray-600 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
