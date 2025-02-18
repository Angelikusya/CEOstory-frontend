import './TariffsCost.css';

const TariffsCost = () => {

  return (
      <section className='tariffs__cost'>
        <h2 className='tariffs__cost-header'>Сколько это стоит? </h2>
        <div className='tariffs__cost-container'>
          <p className='tariffs__text'>
            Для контекста, если покупать отдельно <span className='tariffs__text span'>часовые консультации</span> у всех наших спикеров, 
            то цена <span className='tariffs__text span'>выйдет не меньше 100 тысяч рублей</span>, но скажу по секрету &mdash; на одно интервью 
            уходит куда больше одного часа.
          </p>
          <p className='tariffs__text'>
            Помимо этого мы стараемся получить от спикеров максимум секретов и даем тебе их 
            краткую сводку, благодаря чему ты сможешь сэкономить десятки часов своего времени.
          </p>
          <p className='tariffs__text'>
            Доступ на нашу платформу &mdash; это&nbsp;
            <span className='tariffs__text span'>
             инвестиция в успешную карьеру или бизнес, что позволит изменить жизнь в лучшую сторону.
            </span>
          </p>
          <p className='tariffs__text'>
            Если ты не настроен серьезно к своему росту, тогда возможно “CEOstory” не для тебя.
          </p>
          <p className='tariffs__text'>
            Но если все же ты готов, то инвестиция небольшой суммы денег в экономию своего времени и 
            повышение шансов на достижение успеха не составит для тебя труда.
          </p>
          <p className='tariffs__text'>
            Особенно учитывая как сильно может измениться твоя жизнь и сколько денег ты сможешь заработать, если все сделаешь правильно.
          </p>
          <p className='tariffs__text'>
            В общем, хватит слов, цена ниже.
          </p>
        </div>

    </section>
  );
};

export default TariffsCost;
