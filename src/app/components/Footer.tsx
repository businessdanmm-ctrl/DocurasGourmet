import { Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  const contacts = [
    { name: 'Victória', number: '73 98239-7835' },
    { name: 'Kaly', number: '73 98235-6629' },
    { name: 'Rogério', number: '73 99108-5949' },
  ];

  return (
    <footer className="py-10 px-6 bg-gradient-to-br from-[#FFF5F8] via-white to-[#B8F0E0]/10 border-t border-[#FFE5B4]/50">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-xl text-[#FF69B4] mb-2">Doçura Geladinhos Gourmet</h3>
        </div>

        <div className="space-y-3 mb-6">
          <a
            href="https://www.instagram.com/docuragourmet_01/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-gray-700 hover:text-[#FF69B4] transition-colors"
          >
            <Instagram size={20} />
            <span>@docuragourmet_01</span>
          </a>

          <div className="space-y-2">
            {contacts.map((contact) => (
              <div key={contact.name} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <MessageCircle size={16} className="text-[#25D366]" />
                <span>{contact.name}: {contact.number}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed">
          Feito artesanalmente com carinho
        </p>

        <div className="mt-6 pt-6 border-t border-[#FFE5B4]/30">
          <p className="text-xs text-gray-400">
            © 2026 Doçura Geladinhos Gourmet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
