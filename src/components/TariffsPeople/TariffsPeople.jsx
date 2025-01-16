import './TariffsPeople.css';
import { useState, useEffect } from 'react';
import BursalidiD from '../../assets/speaker-photoes/bursalidi-tariffs-desk.webp';
import KorotkovaPhoto from '../../assets/speaker-photoes/korotkova-wide.webp';
import BotashovR from '../../assets/speaker-photoes/botashov-tariffs-desk.webp';
import VafeevT from '../../assets/speaker-photoes/vafeev-tariffs-desk.webp';
import Kirillov from '../../assets/speaker-photoes/kirillov-tariffs-desk.webp';

const speakers = [
  { name: 'Екатерина', salary: 'топ-менеджер', image: KorotkovaPhoto },
  { name: 'Петя', salary: 'топ-менеджер', image: BursalidiD },
  { name: 'Айвар', salary: 'бизнесмен', image: VafeevT },
  { name: 'Коля', salary: 'бизнесмен', image: BotashovR },
  { name: 'Иван', salary: 'бизнесмен', image: Kirillov },
];

const colors = ['#F892D3', '#353E44', '#3D0150', '#283C35','#F6EFE7' ];

const TariffsPeople = () => {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  function getVisibleCount() {
    if (window.innerWidth >= 1280) {
      return 5; // Показываем 5 спикеров
    } else if (window.innerWidth >= 768) {
      return 3; // Показываем 3 спикера
    } else {
      return 2; // Показываем 2 спикера
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const newVisibleCount = getVisibleCount();
      setVisibleCount(newVisibleCount);
      if (window.innerWidth >= 768) {
        setCurrentPairIndex(0);
      }
    };

    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setCurrentPairIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % Math.ceil(speakers.length / 2);
          return nextIndex === 2 ? 0 : nextIndex;
        });
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let currentSpeakers;

  if (window.innerWidth < 768) {
    currentSpeakers = speakers.slice(currentPairIndex * 2, currentPairIndex * 2 + visibleCount).filter((speaker, index) => index < speakers.length - 1);
  } else {
    currentSpeakers = speakers.slice(currentPairIndex * (visibleCount <= 2 ? 2 : visibleCount), 
                                      currentPairIndex * (visibleCount <= 2 ? 2 : visibleCount) + visibleCount);
  }

  return (
    <div className='tariffs__people'>
      {currentSpeakers.map((speaker, index) => (
        <div 
          className='tariffs__person' 
          key={speaker.name} 
          style={{ backgroundColor: colors[(currentPairIndex * visibleCount + index) % colors.length] }}
        >
          <img className='tariffs__image' src={speaker.image} alt={`Фотография спикера ${speaker.name}`} />
          <div className='tariffs__gradient'>
            <p className='tariffs__name'>{speaker.name}</p>
            <div className='tarrifs__salary'>
              {speaker.salary && (
                <p className='tarrifs__salary-number'>{speaker.salary}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TariffsPeople;
