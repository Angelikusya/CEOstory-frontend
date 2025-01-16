import React from 'react';
import './TariffsPrice.css';
import TariffCard from '../TariffsCard/TariffsCard';

const tariffs = [
  { id: 1, duration: 1, price: 1299, description: 'Подписка на 1 месяц', popular: false, benefits: [
    { name: '10 историй в карьере и бизнесе', text: 'Полный доступ ко всем историям успеха, чтобы ты мог их повторить' },
  ] },
  { id: 3, duration: 12, price: 5988, description: 'Подписка на 12 месяцев', popular: true, benefits: [
    { name: '10 историй в карьере и бизнесе', text: 'Полный доступ ко всем историям успеха, чтобы ты мог их повторить' },
    { name: 'Дополнительные материалы от спикеров', text: 'Полный доступ к файлам от спикеров, которые ты сможешь использовать в карьере или бизнесе' },
    { name: 'Обучающие видео от “CEOstory”', text: 'Ты узнаешь, что такое P&L и как с ней работать, как находить возможности для заработка и многое другое' },
  ]},
  { id: 2, duration: 3, price: 2693, description: 'Подписка на 3 месяца', popular: false, benefits: [
    { name: '10 историй в карьере и бизнесе', text: 'Полный доступ ко всем историям успеха, чтобы ты мог их повторить' },
    { name: 'Дополнительные материалы от спикеров', text: 'Полный доступ к файлам от спикеров, которые ты сможешь использовать в карьере или бизнесе' },
  ]},
];

const TariffsPrice = () => {
  const handleSubmitPayment = (event) => {
    event.preventDefault(); // предотвращаем переход по ссылке
    console.log('отправка данных на оплату');
  };

  return (
    <div className='tariffs__price'>
      {tariffs.map(tariff => (
        <TariffCard key={tariff.id} tariff={tariff} onSubmit={handleSubmitPayment} />
      ))}
    </div>
  );
};

export default TariffsPrice;
