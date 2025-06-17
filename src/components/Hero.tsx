import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            eSIM для России
            <span className="block text-gradient bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Без границ
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Работает в РФ без паспорта. Автоматическая активация через QR-код.
            Оплата российскими картами.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover-scale"
            >
              <Icon name="Smartphone" className="mr-2" size={20} />
              Получить eSIM
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 hover:bg-white/20 text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Как это работает
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Без паспорта</h3>
              <p className="text-blue-100">Работает в России без документов</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon name="QrCode" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">QR активация</h3>
              <p className="text-blue-100">
                Автоматическая настройка за секунды
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon name="CreditCard" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">РФ карты</h3>
              <p className="text-blue-100">Оплата российскими картами</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
