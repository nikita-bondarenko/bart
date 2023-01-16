import React from 'react';
import './App.css';
import {useOriginalScale} from "./hooks/originalScale";

function App() {

    useOriginalScale('root')

    return (
        <>
            <section className={'container top'}>
                <svg className={'logo'}>
                    <use xlinkHref="/images/svg/sprite.svg#logo"></use>
                </svg>
                <h1 className={'top__title title'}>Хороший бизнес – лучшее искусство</h1>
                <p className={'top__quote quote'}>Э. Уорхол</p>
            </section>
            <section className={'container about'}>
                <ul className="about__list">
                    <li className="about__item">
                        <h2 className="about__title subtitle">Проекты</h2>
                        <p className="about__text text">Возьмём на себя управление проектом и подберём исполнителей.
                            Предложим лучшие решения по оптимизации процессов, воплотим в жизнь вашу бизнес-идею и
                            запустим продукт.</p>
                        <svg className="about__decor white-half-circle">
                            <use xlinkHref={'/images/svg/sprite.svg#white-half-circle'}></use>
                        </svg>
                    </li>
                    <li className="about__item">
                        <h2 className="about__title subtitle">Digital</h2>
                        <p className="about__text text">Реализуем IT-решения: разработаем сайт, фирменный стиль и
                            брендинг, внедрим CRM, проработаем маркетинг, настроим рекламу, создадим контент.</p>
                        <svg className="about__decor blue-triangle">
                            <use xlinkHref={'/images/svg/sprite.svg#blue-triangle'}></use>
                        </svg>
                    </li>
                    <li className="about__item">
                        <h2 className="about__title subtitle">HR</h2>
                        <p className="about__text text">Выстроим систему управления персоналом, предложим новые
                            технологии обучения сотрудников, поможем развить учебную базу и корпоративную культуру.</p>
                        <svg className="about__decor red-rectangle">
                            <use xlinkHref={'/images/svg/sprite.svg#red-rectangle'}></use>
                        </svg>
                    </li>
                    <li className="about__item">
                        <h2 className="about__title subtitle">Финансовые услуги</h2>
                        <p className="about__text text">Выстроим, автоматизируем и улучшим финансовую модель компании.
                            Бюджетирование, отчёты, прогнозирование и управление рисками возьмём на себя.</p>
                    </li>

                    <li className="about__item">
                        <h2 className="about__title subtitle">Юридические услуги</h2>
                        <p className="about__text text">Грамотная юридическая поддержка для компаний и физических лиц.
                            Мы сильны в вопросах международного права и криптовалютного законодательства.</p>
                        <svg className="about__decor yellow-circle">
                            <use xlinkHref={'/images/svg/sprite.svg#yellow-circle'}></use>
                        </svg>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default App;
