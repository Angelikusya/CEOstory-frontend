import React from 'react';
import PopupContent from '../../../PopupContent/PopupContent';
import './Korotkova-styles.css';

const KorotkovaEshort = () => {
    const sectionsShort = [
        { id: 'general',    title: 'Общие принципы' },
        { id: 'actions',    title: 'Конкретные действия' },
        { id: 'examples',   title: 'Примеры проектов' },
      ];
    return (
        <article className='story-content'>
            <div className='story-content__relative'>
                <PopupContent sections={sectionsShort} />
            </div>
            <div className='korotkova-short__story'>
                <p id='general' className='korotkova-short__question'>
                    Общие принципы, благодаря которым я выросла в карьере
                </p>
                <div className='korotkova-short__text-container'>
                    <ul className='korotkova-short__list-numbers'>
                        <li className='korotkova-short__item-number red'>
                            <div className='korotkova-short__number-line top'></div>
                            <div className='korotkova-short__number-step'>1</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Выбирала работу с челленджем
                                </p>
                                <p className='korotkova-short__number-text'>
                                    Новая работа для меня всегда была вызовом с трудностями, 
                                    которые нужно было разрулить, но это позволяло мне быстро  
                                    улучшать свои навыки и расти в карьере                            
                                </p>
                            </div>
                        </li>
                        <li className='korotkova-short__item-number'>
                            <div className='korotkova-short__number-line'></div>
                            <div className='korotkova-short__number-step'>2</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Развивала свои сильные стороны
                                </p>
                                <p className='korotkova-short__number-text'>
                                    У человека есть определенный набор навыков, которые ему проще развивать, 
                                    а есть те, с которыми работать сложнее. Потратив какие-то усилия на первые,
                                    ты дорастешь до потолка, а в других с теми же усилиями лишь слегка подпрыгнешь 
                                    &mdash; я развивала навыки, которые позволили бы быстро прыгнуть куда-то высоко
                                </p>
                            </div>
                        </li> 
                        <li className='korotkova-short__item-number red'>
                            <div className='korotkova-short__number-line'></div>
                            <div className='korotkova-short__number-step'>3</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Проявляла инициативу
                                </p>
                                <p className='korotkova-short__number-text'>
                                    Я хотела быстро расти и хватала все зоны ответственности, которые лежали вокруг меня, 
                                    особенно ничейные, но в перспективе важные и нужные                        
                                </p>
                            </div>
                        </li> 
                        <li className='korotkova-short__item-number'>
                            <div className='korotkova-short__number-line'></div>
                            <div className='korotkova-short__number-step'>4</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Улучшала навыки коммуникации
                                </p>
                                <p className='korotkova-short__number-text'>
                                    Юристы и разработчики говорят на совершенно разных языках, а вам возможно придется 
                                    договариваться и с теми и с другими                          
                                </p>
                            </div>
                        </li> 
                        <li className='korotkova-short__item-number red'>
                            <div className='korotkova-short__number-line'></div>
                            <div className='korotkova-short__number-step'>5</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Развивала самоорганизацию
                                </p>
                                <p className='korotkova-short__number-text'>
                                    Нужно просто садиться и делать, а не откладывать. Если ты что-то пообещал, то важно 
                                    твердо держать обещание и не искать внешние причины, которые помешали что-то сделать
                                </p>
                            </div>
                        </li> 
                        <li className='korotkova-short__item-number'>
                            <div className='korotkova-short__number-line'></div>
                            <div className='korotkova-short__number-step'>6</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Много рефлексировала
                                </p>
                                <p className='korotkova-short__number-text'>
                                    На рынке выше ценятся те люди, которые смотрят не узко, 
                                    а пошире и умеют задавать себе вопросы и отвечать на них, отсеивая 
                                    ненужное и концентрируясь на ключевых вещах. Я постоянно отвечала себе на вопрос: 
                                    “А зачем мы вообще это делаем?”
                                </p>
                            </div>
                        </li> 
                        <li className='korotkova-short__item-number red'>
                            <div className='korotkova-short__number-line'></div>
                            <div className='korotkova-short__number-step'>7</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Приняла факапы, как часть пути
                                </p>
                                <p className='korotkova-short__number-text'>
                                    Не ошибается только тот, кто ничего не делает, но важно извлекать опыт из ошибок. Тут важно также понимать, 
                                    что стадия “Я на дне, у меня ничего не получается” &mdash;это нормально и нужно уметь с этим справляться
                                </p>
                            </div>
                        </li> 
                        <li className='korotkova-short__item-number'>
                            <div className='korotkova-short__number-line'></div>
                            <div className='korotkova-short__number-step'>8</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Серьезно относилась к отдыху
                                </p>
                                <p className='korotkova-short__number-text'>
                                    Я занимаюсь такими видами отдыха, которые вводят меня в состояние потока. 
                                    При высокой ментальной нагрузке это помогает переключить на время внимание и восполнить энергию
                                </p>
                            </div>
                        </li> 
                        <li className='korotkova-short__item-number red'>
                            <div className='korotkova-short__number-line bottom'></div>
                            <div className='korotkova-short__number-step'>9</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Вовремя меняла позиции
                                </p>
                                <p className='korotkova-short__number-text'>
                                    Если я понимаю, что текущая позиция не может мне дать ничего нового, то сразу начинаю искать 
                                    другие варианты. Это может быть горизонтальное или вертикальное движение в текущей компании, 
                                    или вообще смена работодателя. Главное – не затягивать и не сомневаться в&nbsp;своей чуйке
                                </p>
                            </div>
                        </li> 
                    </ul>
                </div>    
    
                <p id='actions' className='korotkova-short__question margin-top '>
                    Действия, благодаря которым я выросла в карьере
                </p>
                <div className='korotkova-short__text-container'>
                    <ul className='korotkova-short__list-numbers'>
                        <li className='korotkova-short__item-number red'>
                            <div className='korotkova-short__number-line top'></div>
                            <div className='korotkova-short__number-step'>1</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Получила хорошее базовое образование
                                </p>
                                <p className='korotkova-short__number-text'>
                                    Я окончила бакалавриат ВШЭ по направлению «менеджмент»
                                </p>
                            </div>
                        </li>
                        <li className='korotkova-short__item-number'>
                            <div className='korotkova-short__number-line'></div>
                            <div className='korotkova-short__number-step'>2</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Стажировалась во время обучения
                                </p>
                                <p className='korotkova-short__number-text'>
                                    Навыки, которые я получила на стажировках помогли моему росту в карьере 
                                </p>
                            </div>
                        </li> 
                        <li className='korotkova-short__item-number red'>
                            <div className='korotkova-short__number-line'></div>
                            <div className='korotkova-short__number-step'>3</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Изучила Excel, SQL и инструменты визуализации данных
                                </p>
                                <p className='korotkova-short__number-text'>
                                    Это позволило быть мобильнее и не стоять в очереди к аналитикам, а самостоятельно выгружать, анализировать 
                                    и визуализировать нужные цифры
                                </p>
                            </div>
                        </li> 
                        <li className='korotkova-short__item-number'>
                            <div className='korotkova-short__number-line'></div>
                            <div className='korotkova-short__number-step'>4</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Научилась “табличному мышлению”
                                </p>
                                <p className='korotkova-short__number-text'>
                                    С тех пор я могу любую информацию структурировать в Excel и благодаря этому делать правильные 
                                    выводы и принимать необходимые решения
                                </p>
                            </div>
                        </li> 
                        <li className='korotkova-short__item-number red'>
                            <div className='korotkova-short__number-line'></div>
                            <div className='korotkova-short__number-step'>5</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Разобралась в метриках бизнеса
                                </p>
                                <p className='korotkova-short__number-text'>
                                    Чтобы расти в карьере, нужно очень хорошо работать с метриками, и понимать, 
                                    какие из них ключевые и как они влияют на бизнес
                                </p>
                            </div>
                        </li> 
                        <li className='korotkova-short__item-number'>
                            <div className='korotkova-short__number-line'></div>
                            <div className='korotkova-short__number-step'>6</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Задавала вопросы и была любопытной
                                </p>
                                <p className='korotkova-short__number-text'>
                                    Если я что-то не понимала, я всегда активно пыталась в этом разобраться. 
                                    Для этого я и сама искала информацию, и уточняла непонятное у коллег вокруг
                                </p>
                            </div>
                        </li> 
                        <li className='korotkova-short__item-number red'>
                            <div className='korotkova-short__number-line'></div>
                            <div className='korotkova-short__number-step'>7</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Попадала в ожидания руководителя
                                </p>
                                <p className='korotkova-short__number-text'>
                                    Я договаривалась на каких требованиях руководитель сфокусируется сейчас, 
                                    чтобы точно понимать, что от меня ждут, а что можно отложить на потом
                                </p>
                            </div>
                        </li> 
                        <li className='korotkova-short__item-number'>
                            <div className='korotkova-short__number-line bottom'></div>
                            <div className='korotkova-short__number-step'>8</div>
                            <div className='korotkova-short__number-container'>
                                <p className='korotkova-short__number-title'>
                                    Научилась нанимать людей и руководить ими
                                </p>
                                <p className='korotkova-short__number-text'>
                                    Я перестала нанимать людей только из чувства, что вакансия уже давно открыта и ее надо закрыть, и я больше не перегибаю с контролем сотрудников – это частая ошибка начинающего руководителя
                                </p>
                            </div>
                        </li> 
                    </ul>
                </div> 
                <div className='korotkova-short__red-block'>
                    <p id='examples' className='korotkova-short__question red'>
                        Примеры проектов, которые можно реализовать, чтобы вырасти в карьере
                    </p>
                    <div className='korotkova-short__red-line'></div>
                    <div className='korotkova-short__projects'>
                        <div className='korotkova-short__project'>
                            <p className='korotkova-short__project-number'>1.</p>
                            <p className='korotkova-short__project-title'> Проекты, связанные с оптимизацией процесса</p>
                            <p className='short-text korotkova-short__project-text'>
                                В операциях всегда ценится опыт, когда какой-то процесс стал более производительным за 
                                те же деньги или стал более дешевым, не потеряв в качестве и капасити.
                            </p>
                            <p className='short-text korotkova-short__project-text'>
                                К примеру, ты работаешь в интернет-магазине, в котором заказ от клиента должен пройти 
                                через этап сборки на складе — товары должны найти, упаковать и подготовить к отправке.
                            </p>
                            <p className='short-text korotkova-short__project-text'>
                                Ты посмотрел аналитику и выяснил, что 10% ваших заказов — это заказы, состоящие из одного самого 
                                популярного набора товаров. Зная это, ты можешь организовать процесс сборки таких заказов заранее 
                                в моменты падения спроса и простоя сотрудников на складе, а потом отправлять уже готовые собранные заказы.          
                            </p>
                        </div>
                        <div className='korotkova-short__project'>
                            <p className='korotkova-short__project-number'>2.</p>
                            <p className='korotkova-short__project-title'> Проекты, связанные с оцифровкой процесса </p>
                            <p className='short-text korotkova-short__project-text'>
                                Иногда оптимизировать процесс невозможно, так как он не оцифрован и непонятен. Проект по описанию и 
                                замеру метрик по какому-то важному для бизнеса процессу будет не лишним в портфолио.
                            </p>
                            <p className='short-text korotkova-short__project-text'>
                                Например, можно оцифровать процент заказов с ошибочно отобранными товарами по каждому сборщику и подумать, 
                                говорят ли о чем-то эти цифры :)
                            </p>
                        </div>
                        <div className='korotkova-short__project'>
                            <p className='korotkova-short__project-number'>3.</p>
                            <p className='korotkova-short__project-title'> Проекты, связанные с запуском нового функционала </p>
                            <p className='short-text korotkova-short__project-text'>
                                Я всегда говорю, что задача операций – соответствовать коммерческим мощностям бизнеса. Часто для 
                                этого нужно запускать с нуля совершенно новый функционал. Такой опыт получить «больнее», но он очень 
                                ценится на рынке.
                            </p>
                            <p className='short-text korotkova-short__project-text'>
                                К примеру, можно запустить самовывоз заказов со склада. 
                                Для того, чтобы такой запуск случился, нужно описать процессы для сотрудников на выдаче, провести обучение, настроить систему коммуникаций с клиентами, актуализировать систему учета заказов и многое-многое другое.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
  }
  
  export default KorotkovaEshort;
  