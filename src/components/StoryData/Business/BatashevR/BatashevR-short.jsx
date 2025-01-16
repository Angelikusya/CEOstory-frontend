import React from 'react';
import PopupContent from '../../../PopupContent/PopupContent';
import './Batashov-styles.css';

const BatashevRshort = () => {
    const sectionsShort = [
        { id: 'services',    title: 'Основные услуги' },
        { id: 'investments', title: 'Вложения для запуска' },
        { id: 'income',      title: 'Заработок' },
        { id: 'stages',      title: 'Этапы проекта' },
        { id: 'clients',     title: 'Где брать клиентов' },
        { id: 'focus',       title: 'Главный фокус' },
        { id: 'imployees',   title: 'Сотрудники' },
        { id: 'alone',       title: 'Когда ты один' },
        { id: 'equipment',   title: 'Оборудование' },
        { id: 'important',   title: 'Нюансы' },
      ];
    return (
        <article className='story-content'>
            <div className='batashov-short__relative'>
                <PopupContent sections={sectionsShort} />
            </div>
            <div className='batashov-short__story'>
                <p id='services' className='batashov-short__question'>
                    Какие основные услуги продаем клиентам?
                </p>
                <div className='batashov-short__text-container'>
                    <ul className='batashov-short__list-bulits'>
                        <li className='batashov-short__list-bulit short-text'>Оснащение "умным домом" больших особняков</li>
                        <li className='batashov-short__list-bulit short-text'>Оснащение офисов мультимедийными системами</li>
                    </ul>
                </div>
                <p id='investments' className='batashov-short__question'>
                    Сколько стоит открытие этого бизнеса и сколько времени нужно потратить, чтобы запустить его с нуля?
                </p>
                <div className='batashov-short__text-container'>
                    <p className='short-text'>
                        Чтобы открыть данный бизнес нужны <span className='short-text short-span_underlined '>не деньги, а знания.</span>
                    </p>
                    <p className='short-text'>
                        Ты должен хорошо разбираться в инженерных системах и как ими управляет “умный дом”, так как средний 
                        чек высокий и заказчик ожидает, что ты сможешь ответить на все его вопросы, ведь он планирует 
                        доверить тебе круглую сумму денег.
                    </p>
                    <p className='short-text'>
                        Суммарно <span className='short-text short-span_underlined '>нужно где-то 2 года,</span> чтобы запустить данный бизнес с нуля:
                    </p>
                    <ul className='batashov-short__list-bulits'>
                        <li className='batashov-short__list-bulit short-text'>1-й год уйдет на то, чтобы понять что к чему и как это работает</li>
                        <li className='batashov-short__list-bulit short-text'>2-й год на получение первых хороших продаж</li>
                    </ul>
                </div>
                <p id='income'className='batashov-short__question'>
                    Сколько можно заработать на данном бизнесе?
                </p>
                <div className='batashov-short__quoute'>
                    <div className='batashov-short__quoute-img'></div>
                    <p className='short-text'>
                        <span className='short-text short-span'>Средний чек: </span>от 30 млн руб. (“умный дом” для особняков от 800 м2)
                    </p>
                    <p className='short-text'>
                        <span className='short-text short-span'>Чистая прибыль: </span>
                        35% или от 10,5 млн руб. (до налогов на 1 особняк)
                    </p>
                </div>
                <div className='batashov-short__text-container'>
                    <p className='short-text'>
                    Средняя длительность 1-го проекта: от 2-х до 4-х лет.
                    <br />В год с маленькой командой можно брать 4 проекта, но желательно, чтобы проекты находились на разных этапах жизненного цикла.
                    </p>
                </div>
                <p id='stages' className='batashov-short__question'>
                    Какие основные этапы жизненного цикла проекта в данном бизнесе?
                </p>
                <div className='batashov-short__text-container'>
                    <ul className='batashov-short__list-numbers'>
                        <li className='batashov-short__item-number dark'>
                            <div className='batashov-short__number-line top'></div>
                            <div className='batashov-short__number-step'>1</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Поиск партнеров
                                </p>
                                <p className='batashov-short__number-text'>
                                    Партнеры - это компании или люди, которые будут приводить к тебе клиентов
                                </p>
                            </div>
                        </li>
                        <li className='batashov-short__item-number'>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>2</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Ожидание заказа от партнеров
                                </p>
                                <p className='batashov-short__number-text'>
                                    Партнерам выгодно приводить к тебе клиентов, поскольку за это они получат от тебя комиссию
                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number dark'>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>3</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Первичные переговоры с клиентом
                                </p>
                                <p className='batashov-short__number-text'>
                                    Знакомимся с клиентом, узнаем детали, рассказываем о себе, компании и услугах                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number'>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>4</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Выезд на объект
                                </p>
                                <p className='batashov-short__number-text'>
                                    Нужно для следующего этапа&nbsp;:)                          
                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number dark'>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>5</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Презентация клиенту
                                </p>
                                <p className='batashov-short__number-text'>
                                    Показываем клиенту, что он получит и примерно за какие деньги
                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number'>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>6</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Подписание договора на проектирование
                                </p>
                                <p className='batashov-short__number-text'>
                                    Если ты договорился с клиентом, поздравляю! 
                                    Теперь нужно переложить все его пожелания на лист бумаги, чтобы понять 
                                    конечную стоимость и зафиксировать масштаб работ
                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number dark'>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>7</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Формирование технического задания
                                </p>
                                <p className='batashov-short__number-text'>
                                    Чтобы его сформировать, тебе нужно еще раз подробно обсудить все с клиентом
                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number'>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>8</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Проектирования “умного дома”
                                </p>
                                <p className='batashov-short__number-text'>
                                    Договариваемся с проектировщиками и отдаем им техническое 
                                    задание с прошлого этапа и дизайн-проекта объекта
                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number dark'>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>9</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Второе коммерческое предложение
                                </p>
                                <p className='batashov-short__number-text'>
                                    Делаем заказчику второе коммерческое предложение с точной 
                                    стоимостью работ и железа по результатам проектирования
                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number'>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>10</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Переговоры с клиентом о цене
                                </p>
                                <p className='batashov-short__number-text'>
                                    Все хотят понять за что они заплатят круглую цену и 
                                    можно ли ее уменьшить&nbsp;:)
                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number dark'>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>11</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Заключение договора
                                </p>
                                <p className='batashov-short__number-text'>
                                    Речь о договоре на поставку, монтаж и пусконаладку
                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number'>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>12</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Покупка, привоз и складирование оборудования
                                </p>
                                <p className='batashov-short__number-text'>
                                    Поставщики оборудования общеизвестны и гуглятся на раз-два, 
                                    главное знать, что тебе нужно
                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number dark'>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>13</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Ожидание готовности первичной отделки объекта
                                </p>
                                <p className='batashov-short__number-text'>
                                    Нужно для следующего этапа
                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number '>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>14</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Монтаж кабелей и другого оборудования
                                </p>
                                <p className='batashov-short__number-text'>
                                    Начала реализации проекта “умного дома”
                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number dark'>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>15</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                Ожидание чистовой отделки и установки мебели
                                </p>
                                <p className='batashov-short__number-text'>
                                Без этого не перейти к одному из финальных этапов
                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number'>
                            <div className='batashov-short__number-line'></div>
                            <div className='batashov-short__number-step'>16</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                Монтаж датчиков, камер, выключателей и другого оборудования
                                </p>
                                <p className='batashov-short__number-text'>
                                Ты на финишной прямой! Красавчик!
                                </p>
                            </div>
                        </li> 
                        <li className='batashov-short__item-number dark'>
                            <div className='batashov-short__number-line bottom'></div>
                            <div className='batashov-short__number-step'>17</div>
                            <div className='batashov-short__number-container'>
                                <p className='batashov-short__number-title'>
                                    Пусконаладка всех систем и закрытие сделки
                                </p>
                                <p className='batashov-short__number-text'>
                                    Путь длиной в несколько лет пройден. Время праздновать!
                                </p>
                            </div>
                        </li> 

                     </ul>
                </div>
                <p id='clients' className='batashov-short__question'>
                    Как находить клиентов?                    
                </p>
                <div className='batashov-short__text-container'>
                    <p className='short-text'>
                        Основной источник заказов - это партнеры, которые получают комиссионные в 5 - 10% от суммы сделки, среди них архитекторы,  
                        дизайнеры и строительные компании.
                    </p>
                </div>
                <div className='batashov-short__quoute'>
                    <div className='batashov-short__quoute-img'></div>
                    <p className='short-text'>
                        С этими ребятами нужно знакомиться, встречаться и обсуждать свои услуги. В какой-то момент они тебе позвонят и скажут, 
                        что у них есть потенциальный клиент, который не против установки “умного дома”.                    
                    </p>
                </div>
                <p id='focus' className='batashov-short__question'>
                    На чем нужно сконцентрироваться для успешного запуска этого бизнеса?                    
                </p>
                <div className='batashov-short__text-container'>
                    <span className='short-text short-span'>Нужно сделать максимальный пуш на продажах.</span>
                    <p className='short-text'>
                        Как? Запартнериться с максимально большим количеством архитекторов и строителей, втереться к ним в доверие и 
                        подружиться. Для этого нужно ходить по всем выставкам и светить лицом, чтобы тебя узнавали.
                    </p>
                </div>
                <div className='batashov-short__quoute'>
                    <div className='batashov-short__quoute-img'></div>
                    <p className='short-text'>
                        Вот так полгода-год побегаешь и начнутся заказы, без этого как бы ты не отлаживал бизнес-процессы и 
                        какую бы excel-табличку не создал - клиенты не пойдут.                   
                    </p>
                </div>
                <p id='employees' className='batashov-short__question'>
                    Сколько сотрудников нужно?
                </p>
                <div className='batashov-short__text-container'>
                    <p className='short-text'>
                        Чтобы открыть данный бизнес нужны <span className='short-text short-span_underlined '>не деньги, а знания.</span>
                    </p>
                    <p className='short-text'>
                        Ты должен хорошо разбираться в инженерных системах и как ими управляет “умный дом”, так как средний 
                        чек высокий и заказчик ожидает, что ты сможешь ответить на все его вопросы, ведь он планирует 
                        доверить тебе круглую сумму денег.
                    </p>
                    <p className='short-text'>
                        Все зависит от количества проектов, но такая компания - это обычно:                     
                    </p>
                    <ul className='batashov-short__list-bulits'>
                        <li className='batashov-short__list-bulit short-text'>Один руководитель проектов (может качественно вести одновременно 2-3 проекта)</li>
                        <li className='batashov-short__list-bulit short-text'>Пара проектировщиков</li>
                        <li className='batashov-short__list-bulit short-text'>Один кладовщик</li>
                    </ul>
                    <p className='short-text'>
                        Монтажников обычно нанимают как подрядчиков и берут в штат только при стабильно большом потоке заказов.                   
                    </p>
                </div>
                <p id='alone' className='batashov-short__question'>
                    Как организовать работу в самом начале, если в компании есть только ты?
                </p>
                <div className='batashov-short__text-container'>
                    <p className='short-text'>
                        Перед стартом бизнеса хорошо бы поработать на аналогичную компанию, чтобы понять все бизнес-процессы и специфику бизнеса.                    
                    </p>
                    <p className='short-text'>
                        Далее, как предприниматель, ты должен заниматься продажами, а всю работу отдавать подрядчикам и контролировать их качество.                    </p>
                    <p className='short-text'>
                        То есть ты должен найти ребят, которые будут заниматься проектированием , монтажом, пусконаладкой и привлекать их к проектам.                    </p>
                    <p className='short-text'>
                        Основная проблема тут - это поиск качественных монтажников, хорошие ребята всегда заняты.                    </p>
                </div>
                <div className='batashov-short__quoute'>
                    <div className='batashov-short__quoute-img'></div>
                    <p className='short-text'>
                        Но если ты все организуешь, то получится максимально живучий бизнес без лишних издержек.                  
                    </p>
                </div>
                <p id='equipment' className='batashov-short__question'>
                    Откуда заказывать оборудование?                
                </p>
                <div className='batashov-short__text-container'>
                    <p className='short-text'>
                        Поставщики оборудования для “умных домов” общедоступны, и они охотно работают с любыми компаниями - как 
                        с начинающими, так и с продвинутыми.
                    </p>
                    <p className='short-text'>
                        Если у тебя хороший заказ, то тебе всегда дадут хорошие условия - неважно сколько ты у них заказывал и заказывал ли вообще.
                    </p>
                    <p className='short-text'>
                        Найти их не проблема. В первом же поисковике они находятся все на раз-два.
                    </p>
                </div>
                <p id='important' className='batashov-short__question'>
                    О каких нюансах следует помнить?               
                </p>
                <div className='batashov-short__text-container'>
                    <ul className='batashov-short__list-numbers'>
                        <li className='batashov-short__number short-text'>
                            1. Цикл продажи может быть очень длительным. Бывают сделки, которые ты будешь добиваться полтора года.
                        </li>
                        <li className='batashov-short__number short-text'>
                            2. Специфика бизнеса с “умными домами” в том, что компания заходит в проект одна из первых, а
                             уходит самой последней. Длительность проекта может быть от 2-х до 4-х лет.
                        </li>    
                        <li className='batashov-short__number short-text'>
                            3. Основной заработок происходит на продаже оборудования.
                        </li>    
                        <li className='batashov-short__number short-text'>
                            4. Хороший проект - это залог успеха, поэтому на него лучше не скупиться.
                        </li>
                        <li className='batashov-short__number short-text'>
                            5. Если ты заложишь в смету стоимость работ хороших дорогих ребят, то ты скорее всего получишь 
                            отказ от заказчика, потому что стоимость работ будет казаться очень высокой. 
                        </li> 
                        <li className='batashov-short__number short-text'>
                            Лучше заниматься заказами в рамках одного города, так как иначе много денег съест логистика и 
                            ни один заказчик не захочет платить дополнительные транспортные расходы, командировочные и так далее.
                        </li>    
                        <li className='batashov-short__number short-text'>
                            Если в доме перестало что-то работать, то клиент скорее всего в первую очередь подумает на “умный дом” 
                            и будет бомбардировать компанию звонками, даже если “умный дом” ни при чем. В таком случае клиент 
                            вынужден платить за ложные выезды, но таких выездов может быть много и это неприятный процесс.
                        </li>        
                    </ul>
                </div>
            </div>
        </article>
    )
  }
  
  export default BatashevRshort;
  