import React from 'react';
import PopupContent from '../../../PopupContent/PopupContent';
import { Link } from 'react-router-dom';

const BatashevRlong = () => {
    // блок с вопросами
    const sectionsLong = [
        { id: 'about', title: 'О бизнесе' },
        { id: 'path', title: 'Путь' },
        { id: 'run', title: 'Как работает бизнес' },
        { id: 'clients', title: 'Где брать клиентов' },
        { id: 'zero', title: 'А если с нуля?' },
        { id: 'feelings', title: 'Сейчас и планы' },
        { id: 'benefits', title: 'Полезно знать' },
        { id: 'achievements', title: 'Факапы и достижения' },
        { id: 'gears', title: 'Платформы для работы' },
        { id: 'books', title: 'Хобби' },
        { id: 'advice', title: 'Советы' },
        { id: 'hiring', title: 'Идет ли поиск в команду?' },
        { id: 'contacts', title: 'Контакты' },
    ];

    return (
        <div className='story-content'>
            <div className='batashov-short__relative'>
                <PopupContent sections={sectionsLong} />
            </div>
            <div className='batashov-short__story'>

                <p id='about' className='batashov-short__question'>
                    Привет, как тебя зовут и какой у тебя бизнес?
                </p>
                <div className='batashov-short__text-container'>
                    <p className='short-text'>
                        Привет, меня зовут Роман Баташов, мне 41 год, и мой бизнес связан с инженерными системами для недвижимости. 
                        Компания называется <Link to='https://hubiq.pro' target='__blank'>«Hubiq»</Link>.
                    </p>
                </div>

                <p id='about' className='batashov-short__question'>
                    Какой твой предпринимательский путь и как ты пришел к идее текущего бизнеса?
                </p>

                <p id='run' className='batashov-short__question'>
                    Как работает твой бизнес?
                </p>

                <p id='clients' className='batashov-short__question'>
                    С момента создания бизнеса что помогает тебе привлекать и удерживать клиентов?
                </p>

                <p id='zero' className='batashov-short__question'>
                    Опиши, как бы ты сейчас создавал свой бизнес с нуля и создавал бы его?               
                </p>
                <p id='feelings' className='batashov-short__question'>
                    Как ты ощущаешь себя в роли предпринимателя и какие у тебя планы на будущее?
                </p>
                <p id='benefits' className='batashov-short__question'>
                    Какие полезные вещи ты извлек в процессе создания бизнеса?
                </p>
                <p id='achievements' className='batashov-short__question'>
                    Расскажи про свои самые большие факапы и достижения в бизнесе и жизни
                </p>
                <p id='gears' className='batashov-short__question'>
                    Какими платформами и инструментами в бизнесе пользуешься?
                </p>
                <p id='books' className='batashov-short__question'>
                    А какие книги, подкасты, ресурсы оказали на тебя наиболее сильное влияние и что вообще сейчас любишь?
                </p>
                <p id='advice' className='batashov-short__question'>
                    Дай советы предпринимателям, которые запускают бизнес или планируют его запустить
                </p>
                <p id='hiring' className='batashov-short__question'>
                    Ищешь ли ты кого-то к себе в команду? 
                </p>
                <p id='contacts' className='batashov-short__question'>
                    Где можно узнать о тебе побольше и как можно с тобой связаться?
                </p>
                
            </div>
        </div>
    );
};

export default BatashevRlong;
