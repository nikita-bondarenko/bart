import React from 'react';
import CircleItem, {CircleItemProps} from "./CircleItem";

const About = () => {

    const items: CircleItemProps[] = [
        {
            className: 'first',
            title: 'Проекты',
            text: 'Возьмём на себя управление проектом и подберём исполнителей. Предложим лучшие решения по оптимизации процессов, воплотим в жизнь вашу бизнес-идею и запустим продукт.'
        },
        {
            className: 'fifth',
            title: 'Digital',
            text: 'Реализуем IT-решения: разработаем сайт, фирменный стиль и&nbsp;брендинг, внедрим CRM, проработаем маркетинг, настроим рекламу, создадим контент.'
        },
        {
            className: 'second',
            title: 'HR',
            text: 'Выстроим систему управления персоналом, предложим новые технологии обучения сотрудников, поможем развить учебную базу и корпоративную культуру.'
        },
        {
            className: 'fourth',
            title: 'Финансовые услуги',
            text: 'Выстроим, автоматизируем и&nbsp;улучшим финансовую модель компании. Бюджетирование, отчёты, прогнозирование и&nbsp;управление рисками возьмём на себя.'
        },
        {
            className: 'third',
            title: 'Юридические услуги',
            text: 'Грамотная юридическая поддержка для компаний и&nbsp;физических лиц. Мы сильны в вопросах международного права и&nbsp;криптовалютного законодательства.'
        },
    ]


    return (
        <section className={'container about'}>
            <div className={'about__circle circle'}>
                <div className={'circle__center'}>
                </div>
                {items.map((item: CircleItemProps) => <CircleItem key={item.className} className={item.className} text={item.text}
                                                                  title={item.title}></CircleItem>)}
            </div>
            <ul className="about__list">
                <li className="about__block">
                    <div id={'block1'} className="about__item">
                        <h2 className="about__title subtitle">Проекты</h2>
                        <p className="about__text text">Возьмём на себя управление проектом и подберём исполнителей.
                            Предложим лучшие решения по оптимизации процессов, воплотим в жизнь вашу бизнес-идею и
                            запустим продукт.</p>
                    </div>

                    <svg id={'decor1'} className="about__decor white-half-circle">
                        <use xlinkHref={'/images/svg/sprite.svg#white-half-circle'}></use>
                    </svg>
                </li>
                <li className="about__block">
                    <div id={'block2'} className="about__item">
                        <h2 className="about__title subtitle">Digital</h2>
                        <p className="about__text text">Реализуем IT-решения: разработаем сайт, фирменный стиль и
                            брендинг, внедрим CRM, проработаем маркетинг, настроим рекламу, создадим контент.</p>
                    </div>
                    <svg id={'decor2'} className="about__decor blue-triangle">
                        <use xlinkHref={'/images/svg/sprite.svg#blue-triangle'}></use>
                    </svg>
                </li>
                <li className="about__block">
                    <div id={'block3'} className="about__item">
                        <h2 className="about__title subtitle">HR</h2>
                        <p className="about__text text">Выстроим систему управления персоналом, предложим новые
                            технологии обучения сотрудников, поможем развить учебную базу и&nbsp;корпоративную
                            культуру.</p>
                    </div>
                    <svg id={'decor3'} className="about__decor red-rectangle">
                        <use xlinkHref={'/images/svg/sprite.svg#red-rectangle'}></use>
                    </svg>
                </li>
                <li className="about__block">
                    <div id={'block4'} className="about__item">
                        <h2 className="about__title subtitle">Финансовые услуги</h2>
                        <p className="about__text text">Выстроим, автоматизируем и улучшим финансовую модель
                            компании.
                            Бюджетирование, отчёты, прогнозирование и управление рисками возьмём на себя.</p>
                    </div>
                </li>

                <li className="about__block">
                    <div id={'block5'} className="about__item">
                        <h2 className="about__title subtitle">Юридические услуги</h2>
                        <p className="about__text text">Грамотная юридическая поддержка для компаний и физических
                            лиц.
                            Мы сильны в вопросах международного права и&nbsp;криптовалютного законодательства.</p>
                    </div>
                    <svg id={'decor4'} className="about__decor yellow-circle">
                        <use xlinkHref={'/images/svg/sprite.svg#yellow-circle'}></use>
                    </svg>
                </li>
            </ul>
        </section>
    );
};

export default About;