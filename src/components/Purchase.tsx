import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Purchase = () => {
  const plans = [
    {
      name: "Базовый",
      price: "598",
      period: "7 дней",
      data: "5 ГБ",
      features: [
        "Безлимитные звонки по России",
        "SMS в пределах РФ",
        "4G/5G скорость",
        "Поддержка 24/7",
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Популярный",
      price: "1598",
      period: "30 дней",
      data: "20 ГБ",
      features: [
        "Безлимитные звонки по России",
        "Безлимитные SMS",
        "4G/5G скорость",
        "Роуминг в СНГ",
        "Поддержка 24/7",
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Максимум",
      price: "2998",
      period: "30 дней",
      data: "50 ГБ",
      features: [
        "Безлимитные звонки",
        "Безлимитные SMS",
        "5G скорость",
        "Роуминг в СНГ и Европе",
        "Приоритетная поддержка",
        "Дополнительный номер",
      ],
      popular: false,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Выберите тариф
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Все тарифы работают в России без документов. Оплата российскими
            картами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${plan.popular ? "ring-4 ring-purple-500 scale-105" : ""} hover:scale-105 transition-all duration-300 shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                  🔥 Самый популярный
                </div>
              )}

              <CardHeader
                className={`text-center ${plan.popular ? "pt-12" : ""}`}
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-4`}
                >
                  <Icon name="Smartphone" size={24} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-gray-800">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">₽</span>
                  <p className="text-gray-500 mt-1">{plan.period}</p>
                </div>
              </CardHeader>

              <CardContent>
                <div className="text-center mb-6">
                  <div
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${plan.gradient} text-white font-semibold`}
                  >
                    {plan.data} интернета
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-3 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-full transition-all duration-300 hover-scale`}
                  size="lg"
                >
                  <Icon name="ShoppingCart" className="mr-2" size={18} />
                  Купить сейчас
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 max-w-4xl mx-auto border border-green-200">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Shield" className="text-green-600 mr-2" size={24} />
              <h3 className="text-xl font-semibold text-green-800">
                Гарантия качества
              </h3>
            </div>
            <p className="text-green-700 mb-4">
              Не понравилось качество связи? Вернём деньги в течение 3 дней без
              вопросов.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-600">
              <div className="flex items-center">
                <Icon name="Check" size={16} className="mr-1" />
                Мгновенная активация
              </div>
              <div className="flex items-center">
                <Icon name="Check" size={16} className="mr-1" />
                Работает по всей России
              </div>
              <div className="flex items-center">
                <Icon name="Check" size={16} className="mr-1" />
                Поддержка 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
