import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  const steps = [
    {
      icon: "ShoppingCart",
      title: "Выберите тариф",
      description: "Выберите подходящий тариф и оплатите российской картой",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "QrCode",
      title: "Получите QR-код",
      description: "Моментально получите QR-код на email для активации eSIM",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Smartphone",
      title: "Сканируйте код",
      description:
        "Отсканируйте QR-код камерой телефона для автоматической настройки",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Signal",
      title: "Пользуйтесь связью",
      description: "Готово! Пользуйтесь мобильной связью и интернетом в России",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Получите мобильную связь в России за 4 простых шага
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div
                  className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={step.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full">
                  <Icon
                    name="ArrowRight"
                    className="text-gray-300 mx-auto"
                    size={24}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
