import img7962 from '../../imports/7962.jpg';
import img7968 from '../../imports/7968-1.jpg';

export function Gallery() {
  const images = [
    { src: img7962, caption: 'Cremosidade real' },
    { src: img7968, caption: 'Feito artesanalmente' },
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-[#B8F0E0]/20 via-[#FFE5B4]/20 to-[#FFCCB3]/20">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="mb-2 text-[#FF1493]">Sabores que Encantam</h2>
        </div>
        <div className="flex gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg flex-1"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-64 object-cover transition-transform duration-500 group-active:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
