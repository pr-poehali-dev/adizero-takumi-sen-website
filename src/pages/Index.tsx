import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const specs = [
    {
      icon: "Zap",
      title: "Легкость",
      description: "Всего 195г на размер 9 US",
    },
    {
      icon: "Wind",
      title: "Воздухопроницаемость",
      description: "Mesh верх для максимальной вентиляции",
    },
    {
      icon: "Target",
      title: "Точность",
      description: "Precision engineering для идеальной посадки",
    },
    {
      icon: "Gauge",
      title: "Энергетический возврат",
      description: "LIGHTSTRIKE PRO в передней части",
    },
  ];

  const galleryImages = [
    "/img/e39d334a-cae2-4424-83da-38731497232d.jpg",
    "/img/3ad35935-7995-4683-a5da-fec23ad1cd0d.jpg",
    "/img/77607b80-cac3-4c2a-8f7b-b962801a9390.jpg",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-6xl lg:text-8xl font-bold text-black mb-6 font-['Montserrat']">
              ADIZERO
              <br />
              <span className="text-[#FF6B35]">TAKUMI</span>
              <br />
              SEN 10
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
              Революционные беговые кроссовки для максимальной скорости и
              комфорта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg"
              >
                Купить сейчас
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg"
              >
                Узнать больше
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/img/e39d334a-cae2-4424-83da-38731497232d.jpg"
              alt="ADIZERO TAKUMI SEN 10"
              className="max-w-lg w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 font-['Montserrat']">
              Технические характеристики
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Каждая деталь создана для достижения максимальной
              производительности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specs.map((spec, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#FF6B35] rounded-full flex items-center justify-center">
                    <Icon name={spec.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2 font-['Montserrat']">
                    {spec.title}
                  </h3>
                  <p className="text-gray-600">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 font-['Montserrat']">
              Галерея
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Рассмотрите каждую деталь совершенства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt={`ADIZERO TAKUMI SEN 10 - View ${index + 1}`}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-['Montserrat']">
            Готовы к новым рекордам?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам атлетов, которые уже выбрали ADIZERO
            TAKUMI SEN 10
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FF6B35] text-white hover:bg-[#e55a2b] px-12 py-6 text-lg"
            >
              Купить за 15 990 ₽
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg"
            >
              Найти в магазине
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
