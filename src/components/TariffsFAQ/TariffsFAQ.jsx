import './TariffsFAQ.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const TariffsFAQ = () => {

  const [expandedIndex, setExpandedIndex] = useState(null);
    // раскрыть дропдаун
    const toggleDropdown = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const promoElement = document.querySelector('.tariffs__dropdowns');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      },
      {
        root: null, // Использовать viewport
        threshold: 0 // Сработает при любом пересечении
      }
    );

    if (promoElement) {
      observer.observe(promoElement);
    }

    return () => {
      if (promoElement) {
        observer.unobserve(promoElement);
      }
    };
  }, []);

  return (
    <section className='tariffs__FAQ'>
      <h3 className='tariffs__subtitle'>Частые вопросы</h3>
       <div className='tarrifs__dropdowns'>

        {[...Array(4)].map((_, index) => (
          <div 
            className='tariffs__dropdown' key={index}
            onClick={() => toggleDropdown(index)}
          >
            <div className='tariffs_dropdown-block'>
              <p className='tariffs__dropdown-title'>
                  {index === 0 ? (
                      <span className='tariffs__dropdown-title_span'>Какие сферы в&nbsp;бизнесе покрывает “CEOstory”?</span>
                  ) : index === 1 ? (
                    <span className='tarrifs__dropdown-title_span'>Как часто обновляются инструкции по&nbsp;открытию бизнеса?</span>
                  ) : index === 2 ? (
                    <span className='tarrifs__dropdown-title_span'>Я ничего не&nbsp;знаю о&nbsp;бизнесе, подойдет ли мне “СEOstory”?</span>
                  ) : (
                    <span className='tarrifs__dropdown-title_span'>Я уже развиваюсь в&nbsp;бизнесе, подойдет ли мне “CEOstory”?</span>
                  )}
              </p>
              <div className={`tarrifs__dropdown-button ${expandedIndex === index ? 'rotated' : ''}`} >
              </div>
            </div>
              <div className={`tariffs__dropdown-content ${expandedIndex === index ? 'show' : ''}`}>
                {index === 0 &&                       
                <div className='tarrifs__dropdown-list'>
                  <p className='tarrifs__dropdown-text'>
                    Буквально все, до которых мы успели дотянуться. Нам важна не столько сфера, сколько пример рабочего бизнеса, 
                    путь предпринимателя для его открытия и советы, благодаря которым любой сможет повторить его опыт.
                  </p>
                  <p className='tarrifs__dropdown-text'>
                    На страницах со списком историй есть фильтр “Сфера”, благодаря которому можно выбрать то, что интересует именно тебя.
                  </p>
                </div>
                  
                }
                {index === 1 && (
                  <div className='tarrifs__dropdown-list'>
                    <p className='tarrifs__dropdown-text'>
                      Мы собираем истории только от проверенных ребят в бизнесе и стараемся выяснить саму суть их успеха &mdash; все 
                      то, что поможет тебе в открытие своего бизнеса и будет твоей инструкцией к действию.
                    </p>
                    <p className='tarrifs__dropdown-text'>
                      Поэтому статьи выходят в среднем 1 раз в пару недель, но мы делаем максимум для их качества.
                    </p>
                  </div>
                )}
                {index === 2 && (
                <div className='tarrifs__dropdown-list'>
                  <p className='tarrifs__dropdown-text'>
                    Да, определенно подойдет. “CEOstory” &mdash; это место, где ты можешь найти сотни идей и черпать 
                    вдохновение, читать инструкции по открытию бизнеса и воплощать их в жизнь. 
                  </p>
                  <p className='tarrifs__dropdown-text'>
                    Это место для тех, кто ищет. Ищет как открыть рабочий бизнес. Ищет как больше зарабатывать. 
                    Ищет какой бизнес самый легкий для открытия и при этом еще и прибыльный. Ищет ответы на 
                    эти и многие другие вопросы от людей, которые уже имеют опыт и успешны в том, что они делают.                     
                  </p>
                </div>
                )}
                {index === 3 && (
                  <div className='tarrifs__dropdown-list'>
                    <p className='tarrifs__dropdown-text'>
                      100% да, ведь ты сможешь использовать советы для развития бизнеса от других успешных ребят, у которых получилось достигнуть высот в своей области.
                    </p>
                </div>
                )}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TariffsFAQ;
