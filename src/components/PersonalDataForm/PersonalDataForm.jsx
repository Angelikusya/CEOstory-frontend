import React, { useEffect } from 'react';
import './PersonalDataForm.css'; // Подключите ваш CSS файл
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavDocuments from '../NavDocuments/NavDocuments';

const PersonalDataForm = () => {
  const pathname = window.location.pathname; // Получаем текущий путь

  useEffect(() => {
      document.title = 'Согласие на обработку персональных данных — CEOstory';
  });
  
  return (
    <div className='documents'>
      <h3 className='documents__title'>Правовая информация</h3>
        <div className='documents__container'>
        <NavDocuments />
        <div className='documents__document'>
          <h4 className='documents__name'>Согласие на обработку персональных данных</h4>
          {/* <p className='documents__date'>Утверждено 01 июля 2024</p> */}
          <p className="documents__text">
            Пользователь, оставляя заявку на получение обратной связи на сайте ceostory.ru (далее – Сайт), 
            свободно, своей волей и в своем интересе, а также подтверждая свою дееспособность, дает согласие 
            индивидуальному предпринимателю Шайхуллину Айвару Илгамовичу, ОГРНИП 323861700043636, ИНН 860232368228 
            (далее – Оператор) на обработку его персональных данных (далее – ПДн) в соответствии со ст. 9 
            Федерального закона от 27 июля 2006 г. № 152-ФЗ «О персональных данных» (далее – ФЗ о ПДн).         
          </p>
          <table className="documents__table">
            <colgroup>
              <col width={360} />
            </colgroup>
            <tbody>
              <tr valign="top">
                <td className="documents__table-cell">
                  <p className="documents__text">ПДн Пользователя, на обработку которых дается Согласие</p>
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
                      - данные, оставленные Пользователем по его воле в форме заявки на получение обратной связи;
                    </li>
                  </ul>
                </td>
                <td className="documents__table-cell ">
                  <p className="documents__text">
                    получение Пользователем от Оператора обратной связи по заявке, оставленной Пользователем, 
                    в том числе посредством направления Оператором сообщений, телефонных звонков. 
                  </p>
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
          <p className="documents__text">Согласие дается и действует на период до:</p>
          <ul className='documents__list'>
            <li className='documents__list-item documents__text'>
              - достижения целей обработки ПДн,
            </li>
            <li className='documents__list-item documents__text'>
              - отзыва согласия на обработку ПДн,
            </li>
            <li className='documents__list-item documents__text'>
              - прекращении Оператором деятельности в качестве индивидуального предпринимателя,
              в зависимости от того, какое событие наступит раньше.
            </li>
          </ul>
          <p className="documents__text">
            Согласие может быть отозвано Пользователем или его представителем путем направления 
            Оператору письменного или электронного обращения, подписанного согласно законодательству 
            РФ в области электронной подписи, по адресу: электронное обращение: 
            <a className='documents__text-support' href="mailto:support@ceostory.ru"> support@ceostory.ru</a>.
          </p>
          <p className="documents__text">
            В случае отзыва Согласия Оператор вправе продолжить обработку ПДн без него при наличии оснований, 
            указанных в пунктах 2-11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 ФЗ о ПДн.
          </p>
        </div>
      </div>
    </div>
  );
};


export default PersonalDataForm;

