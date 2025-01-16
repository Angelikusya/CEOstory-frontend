import React, { useEffect } from 'react';
import './PersonalData.css'; // Подключите ваш CSS файл
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavDocuments from '../NavDocuments/NavDocuments';

const PersonalData = () => {
  return (
    <div className='documents'>
      <h3 className='documents__title'>Правовая информация</h3>
        <div className='documents__container'>
        <NavDocuments />
        <div className='documents__document'>
          <h4 className='documents__name'>Согласие на&nbsp;обработку персональных данных</h4>
          {/* <p className='documents__date'>Утверждено 01 июля 2024</p> */}
          <p className="documents__text">
            Пользователь, регистрируясь на&nbsp;сайте ceostory.ru (далее – Сайт), свободно, своей волей и в&nbsp;
            своем интересе, а также подтверждая свою дееспособность, дает согласие индивидуальному 
            предпринимателю Шайхуллину Айвару Илгамовичу, ОГРНИП 323861700043636, ИНН 860232368228 
            (далее – Оператор) на&nbsp;обработку его персональных данных (далее – ПДн) в&nbsp;соответствии со ст. 
            9 Федерального закона от&nbsp; 27 июля 2006 г. № 152-ФЗ «О персональных данных» (далее – ФЗ о ПДн).         
          </p>
          <table className="documents__table">
            <colgroup>
              <col width={260} />
            </colgroup>
            <tbody>
              <tr valign="top">
                <td className="documents__table-cell">
                  <p className="documents__text">ПДн Пользователя, на&nbsp;обработку которых дается Согласие</p>
                </td>
                <td className="documents__table-cell">
                  <p className="documents__text">Цели сбора и обработки ПДн</p>
                </td>
              </tr>
              <tr valign="top">
                <td className="documents__table-cell ">
                  <ul className='documents__list'>
                    <li className='documents__list-item documents__text'>
                      - имя;
                    </li>
                    <li className='documents__list-item documents__text'>
                      -	адрес электронной почты;
                    </li>
                    <li className='documents__list-item documents__text'>
                      -	данные, полученные от сторонних сервисов в случае авторизации через такие сторонние сервисы;
                    </li>
                  </ul>
                </td>
                <td className="documents__table-cell ">
                  <ul className='documents__list'>
                    <li className='documents__list-item documents__text'>
                      - создание личного кабинета Пользователя на&nbsp;Сайте;
                    </li>
                    <li className='documents__list-item documents__text'>
                      -	авторизация Пользователя на&nbsp;Сайте;
                    </li>
                    <li className='documents__list-item documents__text'>
                      -	обеспечение Пользователю доступа в&nbsp;личный кабинет и использования его функциональности;
                    </li>
                    <li className='documents__list-item documents__text'>
                      -	консультационная и техническая поддержка Пользователя;
                    </li>
                    <li className='documents__list-item documents__text'>
                      -	установление связи с Пользователем по вопросам работы Сайта;
                    </li>
                    <li className='documents__list-item documents__text'>
                      -	отправка Пользователю информационных сообщений по вопросам функционирования Сайта;
                    </li>
                  </ul>
                  
                </td>


              </tr>
              <tr valign="top">
                <td className="documents__table-cell ">
                  <p className="documents__text">
                    - cookie-файлы, информация о действиях на&nbsp;Сайте;
                    </p>
                </td>
                <td className="documents__table-cell ">
                <ul className='documents__list'>
                    <li className='documents__list-item documents__text'>
                      - анализ поведения (действий) Пользователя на&nbsp;Сайте и обработка результатов такого 
                      анализа для: поддержания работоспособности Сайта (предоставления доступа к нему, 
                      исправления возникающих ошибок, улучшения функциональности); повышения качества 
                      оказываемых посредством Сайта услуг (развития услуг и сервисов Оператора); 
                      обеспечения Пользователю безопасного использования Сайта; улучшения Пользовательского 
                      опыта в&nbsp;целом;
                    </li>
                    <li className='documents__list-item documents__text'>
                      -	контроль качества работы Сайта, совершенствование программных продуктов Оператора и функциональности Сайта.;
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="documents__text">
            В ходе обработки с ПДн будут совершаться следующие действия: сбор, запись, систематизация, 
            накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача 
            (предоставление, доступ), блокирование,  удаление, уничтожение. ПДн Пользователя будут обрабатываться 
            с использованием средств автоматизации. 
          </p>
          <p className="documents__text">Согласие дается и действует на&nbsp;период до:</p>
          <ul className='documents__list'>
            <li className='documents__list-item documents__text'>
              - достижения целей обработки ПДн,
            </li>
            <li className='documents__list-item documents__text'>
              - отзыва согласия на&nbsp;обработку ПДн,
            </li>
            <li className='documents__list-item documents__text'>
              - прекращении Оператором деятельности в&nbsp;качестве индивидуального предпринимателя,
              в&nbsp;зависимости от&nbsp; того, какое событие наступит раньше.
            </li>
          </ul>
          <p className="documents__text">
            Согласие может быть отозвано Пользователем или его представителем путем направления 
            Оператору письменного или электронного обращения, подписанного согласно законодательству 
            РФ в&nbsp;области электронной подписи, по адресу: электронное обращение: 
            <a className='documents__text-support' href="mailto:support@ceostory.ru"> support@ceostory.ru</a>.
          </p>
          <p className="documents__text">
            В случае отзыва Согласия Оператор вправе продолжить обработку ПДн без него при наличии оснований, 
            указанных в&nbsp;пунктах 2-11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 ФЗ о ПДн.
          </p>
        </div>
      </div>
    </div>
  );
};


export default PersonalData;

