import React from 'react';
import PopupContent from '../../PopupContent/PopupContent';
import './Batashov-styles.css';
import DigitalHouse from '../../Gant/DigitalHouse';

const BatashevRshort = () => {
    const sectionsShort = [
        { id: 'general',    title: 'Основные услуги' },
        { id: 'investments',title: 'Вложения для запуска' },
        { id: 'money',      title: 'Заработок' },
        { id: 'stages',     title: 'Этапы проекта' },
        { id: 'clients',    title: 'Откуда брать клиентов' },
        { id: 'focus',      title: 'Главный фокус' },
        { id: 'employeer',  title: 'Сотрудники' },
        { id: 'alone',      title: 'Когда ты один' },
        { id: 'gears',      title: 'Оборудование' },
        { id: 'nuances',    title: 'Нюансы' },
      ];
    return (
        <article className='story-content'>
            <div className='story-content__relative'>
                <PopupContent sections={sectionsShort} />
            </div>
            <div className='story__story '>
                <p id='general' className='story__question'>
                    Какие основные услуги продаем клиентам?
                </p>

                <div className='story__text-container'>
                    <ul className='short-text story__list'>
                        <li className='story__list-item'>Установка системы “Умный дом” в больших особняках</li>
                        <li className='story__list-item'>Оснащение офисов мультимедийными системами</li>
                    </ul>
                </div> 

                <p id='investments' className='story__question'>
                    Сколько стоит открытие этого бизнеса и сколько времени нужно потратить, чтобы запустить его с нуля?
                </p>
                <div className='story__text-container'>
                    <p className='short-text'>Чтобы открыть данный 
                    бизнес <span className='batashov__text-span'>нужны не деньги, а знания.</span>
                    </p>
                    <p className='short-text'>
                        Ты должен хорошо разбираться в инженерных системах и как ими управляет “умный дом”, 
                        так как средний чек высокий и заказчик ожидает, что ты сможешь ответить на все его вопросы, 
                        ведь он планирует доверить тебе круглую сумму денег.
                    </p>
                    <p className='short-text'>
                        Суммарно <span className='batashov__text-span'>нужно где&#8209;то 2 года</span>, чтобы запустить данный бизнес с нуля и без знаний:
                    </p>
                    <ul className='short-text story__list'>
                        <li className='story__list-item'>1-й год уйдет на то, чтобы понять что к чему и как это работает</li>
                        <li className='story__list-item'>2-й год на получение первых хороших продаж</li>
                    </ul>
                </div>
                <p id='money' className='story__question'>
                    Сколько можно заработать на данном бизнесе?
                </p>
                <div className='story__text-container'>
                    <div className='story__quotation'>
                        <div className='story__quotation-quote green'>‘‘</div>
                        <p className='short-text story__quotation-text'>
                            <span className='short-text story__quotation-text-span green'>
                                Средний чек: </span>от 30 млн руб. (“умный дом”, плюс вся слаботочная система и электрика для 
                                особняков от 1000 м2)< br />
                            <span className='short-text story__quotation-text-span green'>
                                Чистая прибыль:</span> 25% или от 7,5 млн руб. (после налогов на один особняк)
                        </p>
                    </div>
                    <p className='short-text'>
                        Средняя длительность 1-го проекта: от 2&#8209;х до 4&#8209;х лет.<br />
                        За год с маленькой командой из 4 человек можно взять 4 проекта. В идеальном случае, когда все 
                        проекты находятся на разных стадиях жизненного цикла. В неидеальном случае количество людей может 
                        увеличиться до 10 человек.
                    </p>
                </div>

                <p id='stages' className='story__question'>
                    Какие основные этапы жизненного цикла проекта в данном бизнесе?
                </p>
                <div className='story__text-container'>
                    <ul className='story__list-numbers'>
                        <li className='story__item-number batashov__item-number-green top'>
                            <div className='story__number-line top'></div>
                            <div className='story__number-step short-text'>1</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Поиск партнеров
                                </p>
                                <p className='story__number-text short-text '>
                                    Партнеры&nbsp;&mdash;&nbsp;это компании или люди, которые будут приводить к тебе клиентов                           
                                </p>
                            </div>
                        </li>
                        <li className='story__item-number '>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>2</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Ожидание заказа от партнеров
                                </p>
                                <p className='story__number-text  short-text'>
                                    Партнерам выгодно приводить к тебе клиентов, поскольку за это они получат от тебя комиссию
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number  batashov__item-number-green  '>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>3</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Первичные переговоры с клиентом
                                </p>
                                <p className='story__number-text short-text'>
                                    Знакомимся с клиентом, узнаем детали, рассказываем о себе, компании и услугах                      
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number '>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>4</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Выезд на объект
                                </p>
                                <p className='story__number-text short-text'>
                                    Нужно для следующего этапа :)                      
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number  batashov__item-number-green  '>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>5</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Презентация клиенту
                                </p>
                                <p className='story__number-text short-text'>
                                    Показываем клиенту, что он получит и примерно за какие деньги
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number '>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>6</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Подписание договора на проектирование
                                </p>
                                <p className='story__number-text short-text'>
                                    Если ты договорился с клиентом, поздравляю! <br />
                                    Теперь нужно переложить все его пожелания на лист бумаги, чтобы понять конечную стоимость и зафиксировать масштаб работ
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number  batashov__item-number-green  '>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>7</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Формирование технического задания
                                </p>
                                <p className='story__number-text short-text'>
                                    Чтобы его сформировать, тебе нужно еще раз подробно обсудить все с клиентом
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number '>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>8</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Проектирования “умного дома”
                                </p>
                                <p className='story__number-text short-text'>
                                    Договариваемся с проектировщиками, отдаем им техническое задание с прошлого этапа и дизайн&#8209;проект объекта
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number  batashov__item-number-green  '>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>9</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Второе коммерческое предложение
                                </p>
                                <p className='story__number-text short-text'>
                                    Делаем заказчику второе коммерческое предложение с точной стоимостью поставки, монтажа и пусконаладки
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number  '>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>10</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Переговоры с клиентом о цене
                                </p>
                                <p className='story__number-text short-text'>
                                    Все хотят понять за что они заплатят круглую цену и можно ли ее уменьшить :)
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number  batashov__item-number-green  '>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>11</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                Заключение договора
                                </p>
                                <p className='story__number-text short-text'>
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number   '>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>12</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Покупка, привоз и складирование оборудования
                                </p>
                                <p className='story__number-text short-text'>
                                    Поставщики оборудования общеизвестны и гуглятся на раз&#8209;два, главное знать, что тебе нужно
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number  batashov__item-number-green  '>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>13</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Ожидание готовности черновой отделки объекта
                                </p>
                                <p className='story__number-text short-text'>
                                    Нужно для следующего этапа
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number'>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>14</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Монтаж кабелей и щитового оборудования
                                </p>
                                <p className='story__number-text short-text'>
                                    Начала реализации проекта “умного дома”
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number  batashov__item-number-green'>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>15</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Ожидание чистовой отделки
                                </p>
                                <p className='story__number-text short-text'>
                                    Без этого не перейти к одному из финальных этапов
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number  '>
                            <div className='story__number-line'></div>
                            <div className='story__number-step short-text'>16</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Монтаж оконечных устройств, таких как датчиков, камер, выключателей и другого оборудования
                                </p>
                                <p className='story__number-text short-text'>
                                    Ты на финишной прямой! Красавчик!
                                </p>
                            </div>
                        </li> 
                        <li className='story__item-number  batashov__item-number-green  '>
                            <div className='story__number-line bottom'></div>
                            <div className='story__number-step short-text'>17</div>
                            <div className='story__number-container'>
                                <p className='story__number-title short-text '>
                                    Пусконаладка всех систем и закрытие сделки
                                </p>
                                <p className='story__number-text short-text'>
                                    Путь длиной в несколько лет пройден. Время праздновать!
                                </p>
                            </div>
                        </li> 
                    </ul>
                </div> 
                <div className='story__benefits'>
                    <DigitalHouse />
                </div>
                <p id='clients' className='story__question'>
                    Как находить клиентов?
                </p>
                <div className='story__text-container'>
                    <p className='short-text'> 
                        Основной источник заказов&nbsp;&mdash;&nbsp;это партнеры, которые получают комиссионные в 5&#8209;10% от суммы 
                        сделки, среди них архитекторы, дизайнеры и строительные компании.
                    </p>
                    <div className='story__quotation'>
                        <div className='story__quotation-quote green'>‘‘</div>
                        <p className='short-text story__quotation-text'>
                            С этими ребятами нужно знакомиться, встречаться и обсуждать свои услуги. В какой&#8209;то момент 
                            они тебе позвонят и скажут, что у них есть потенциальный клиент, который не против установки 
                            “умного дома”.
                        </p>
                    </div> 
                </div>

                <p id='focus' className='story__question'>
                    На чем нужно сконцентрироваться для успешного запуска этого бизнеса?
                </p>
                <div className='story__text-container'>
                    <p className='short-text'><span className='batashov__text-span'>Нужно сделать максимальный пуш 
                        на продажах.</span>
                    </p>
                    <p className='short-text'>
                        Как? Запартнериться с максимально большим количеством архитекторов и строителей, втереться к ним в доверие и подружиться. 
                        Для этого нужно ходить по всем выставкам и светить лицом, чтобы тебя узнавали.
                    </p>
                    <div className='story__quotation'>
                        <div className='story__quotation-quote green'>‘‘</div>
                        <p className='short-text batashov__quotation-text'>
                            Вот так полгода-год побегаешь и начнутся заказы, без этого как бы ты не отлаживал бизнес-процессы и какую бы 
                            excel-табличку не создал&nbsp;&mdash;&nbsp;клиенты не пойдут.
                        </p>
                    </div>
                </div>

                <p id='employeer' className='story__question'>
                    Сколько сотрудников нужно?
                </p>
                <div className='story__text-container'>
                    <div className=''>
                        <p className='short-text'> Все зависит от количества проектов, но такая компания&nbsp;&mdash;&nbsp;это обычно:</p>
                        <ul className='short-text story__list'>
                            <li className='story__list-item'>один руководитель проектов (может качественно вести одновременно 2&#8209;3 проекта)</li>
                            <li className='story__list-item'>пара проектировщиков</li>
                            <li className='story__list-item'>один монтажник</li>
                            <li className='story__list-item'>бухгалтерия на аутсорсе</li>
                        </ul>
                    </div>
                    <p className='short-text'> 
                        Монтажников обычно нанимают как подрядчиков и берут в штат только при стабильно большом потоке заказов.
                    </p>

                </div>

                <p id='alone' className='story__question'>
                    Как организовать работу в самом начале, если в компании есть только ты?
                </p>
                <div className='story__text-container'>
                    <p className='short-text'> 
                        Перед стартом бизнеса хорошо бы поработать на аналогичную компанию, чтобы понять все бизнес-процессы и специфику бизнеса.
                    </p>
                    <p className='short-text'> 
                        Далее, как предприниматель, ты должен заниматься продажами, а всю работу отдавать подрядчикам и контролировать их качество.                
                    </p>
                    <p className='short-text'> 
                        То есть ты должен найти ребят, которые будут заниматься проектированием, монтажом, пусконаладкой и привлекать их к проектам.                
                    </p>
                    <p className='short-text'> 
                        Основная проблема тут&nbsp;&mdash;&nbsp;это подбор качественного персонала за адекватные деньги. Дешевые ребята много рукожопят, 
                        качественные очень дорого стоят.
                    </p>
                    <div className='story__quotation'>
                        <div className='story__quotation-quote green'>‘‘</div>
                        <p className='short-text story__quotation-text'>
                            Но если ты все организуешь, то получится максимально живучий бизнес без лишних издержек.
                        </p>
                    </div>
                </div>

                <p id='gears' className='story__question'>
                    Откуда заказывать оборудование?
                </p>
                <div className='story__text-container'>
                    <p className='short-text'> 
                        Поставщики оборудования для “умных домов” общедоступны, и они охотно работают с любыми компаниями&nbsp;&mdash;&nbsp;как с начинающими, 
                        так и с продвинутыми.
                    </p>
                    <p className='short-text'> 
                        Если у тебя хороший заказ, тебе предложат хорошие условия&nbsp;&mdash;&nbsp;неважно, сколько ты у них заказывал и заказывал ли вообще.
                    </p>
                    <p className='short-text'> 
                        Найти их не проблема. В первом же поисковике они находятся все на раз&#8209;два.
                    </p>
                </div>


                <div className='story__colored-block'>
                    <p id='nuances' className='story__colored-block-question'>
                    О каких нюансах следует помнить?
                    </p>
                    <div className='story__colored-block__projects'>
                        <div className='story__colored-block__project'>
                            <p className='story__colored-block__project-number'>1.</p>                            
                            <p className='short-text story__colored-block__project-text'>
                                Цикл продажи может быть очень длительным. Бывают сделки, которые ты будешь добиваться полтора года.                           
                            </p>
                        </div>
                        <div className='story__colored-block__project'>
                            <p className='story__colored-block__project-number'>2.</p>
                            <p className='short-text story__colored-block__project-text'>
                                Специфика бизнеса с “умными домами” в том, что компания заходит в проект одна из первых, а 
                                уходит самой последней. Длительность проекта может быть от 2&#8209;х до 4&#8209;х лет.                            
                            </p>
                        </div>
                        <div className='story__colored-block__project'>
                            <p className='story__colored-block__project-number'>3.</p>
                            <p className='short-text story__colored-block__project-text'>
                                Основной заработок происходит на продаже оборудования.
                            </p>
                        </div>
                        <div className='story__colored-block__project'>
                            <p className='story__colored-block__project-number'>4.</p>
                            <p className='short-text story__colored-block__project-text'>
                                Хорошая проектная документация &nbsp; это залог успеха, поэтому на нее лучше не скупиться.
                            </p>
                        </div>
                        <div className='story__colored-block__project'>
                            <p className='story__colored-block__project-number'>5.</p>
                            <p className='short-text story__colored-block__project-text'>
                                Если ты заложишь в смету стоимость работ хороших дорогих ребят, то ты скорее всего 
                                получишь отказ от заказчика, потому что стоимость работ будет казаться очень высокой.
                            </p>
                        </div>
                        <div className='story__colored-block__project'>
                            <p className='story__colored-block__project-number'>6.</p>
                            <p className='short-text story__colored-block__project-text'>
                                Лучше заниматься заказами в рамках одного города, так как иначе много денег съест
                                логистика и ни один заказчик не захочет платить дополнительные транспортные расходы, 
                                командировочные и так далее.
                            </p>
                        </div>
                        <div className='story__colored-block__project'>
                            <p className='story__colored-block__project-number'>7.</p>
                            <p className='short-text story__colored-block__project-text'>
                                Если в доме перестало что&#8209;то работать, то клиент скорее всего в первую очередь подумает 
                                на “умный дом” и будет бомбардировать компанию звонками, даже если “умный дом” ни при 
                                чем. В таком случае клиент вынужден платить за ложные выезды, но таких выездов может 
                                быть много и это неприятный процесс.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    )
  }
  
  export default BatashevRshort;
  