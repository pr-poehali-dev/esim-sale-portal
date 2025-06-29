import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const FAQ = () => {
  const faqs = [
    {
      question: "Действительно ли работает в России без паспорта?",
      answer:
        "Да! Наша eSIM работает на территории России без предоставления паспортных данных. Вы можете пользоваться связью сразу после активации QR-кода.",
    },
    {
      question: "Как происходит активация через QR-код?",
      answer:
        'После оплаты вы получите QR-код на email. Откройте настройки телефона, выберите "Добавить eSIM", отсканируйте код камерой. Активация происходит автоматически за несколько секунд.',
    },
    {
      question: "Какие российские карты принимаются к оплате?",
      answer:
        "Мы принимаем все основные российские банковские карты: Мир, Visa, Mastercard от Сбербанка, ВТБ, Альфа-Банка и других российских банков.",
    },
    {
      question: "На каких телефонах работает eSIM?",
      answer:
        "eSIM поддерживают iPhone XS и новее, Google Pixel 3 и новее, Samsung Galaxy S20 и новее, а также многие другие современные смартфоны. Проверьте поддержку в настройках вашего устройства.",
    },
    {
      question: "Можно ли использовать eSIM вместе с основной SIM?",
      answer:
        "Да! eSIM работает параллельно с вашей основной SIM-картой. Вы можете использовать два номера одновременно и переключаться между ними в настройках.",
    },
    {
      question: "Что делать, если eSIM не активируется?",
      answer:
        "Наша служба поддержки работает 24/7. Обратитесь к нам через чат или по email, и мы поможем активировать eSIM в течение нескольких минут.",
    },
    {
      question: "Есть ли ограничения по использованию?",
      answer:
        "Никаких скрытых ограничений! Вы получаете заявленный объём интернета и звонков. После исчерпания пакета скорость снижается, но связь остаётся активной.",
    },
    {
      question: "Можно ли продлить тариф автоматически?",
      answer:
        "Да, вы можете настроить автопродление тарифа. Деньги будут списываться автоматически с привязанной карты за день до окончания действия тарифа.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Найдите ответы на популярные вопросы о нашей eSIM
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl shadow-md border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon
                        name="Help"
                        fallback="Circle"
                        size={16}
                        className="text-white"
                      />
                    </div>
                    <span className="font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="ml-12 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <Icon
                name="MessageCircle"
                fallback="Mail"
                size={48}
                className="mx-auto mb-4 opacity-90"
              />
              <h3 className="text-2xl font-bold mb-2">Остались вопросы?</h3>
              <p className="mb-6 opacity-90">
                Наша служба поддержки работает круглосуточно и готова помочь вам
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@esim-russia.ru"
                  className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center"
                >
                  <Icon name="Mail" size={18} className="mr-2" />
                  support@esim-russia.ru
                </a>
                <a
                  href="https://t.me/esim_russia_support"
                  className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center"
                >
                  <Icon
                    name="MessageCircle"
                    fallback="Send"
                    size={18}
                    className="mr-2"
                  />
                  Telegram поддержка
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
