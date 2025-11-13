import style from "./Services.module.scss";
import SectionName from "@Components/Common/SectionName/SectionName.jsx";
import Icon from "@Icons/Icon.jsx";

export default function Services() {
    const servicesList = [
        {
            title: "Стратегический консалтинг\n(ВВП - Верный Выбор Приоритета)",
            icon: "strategic-consulting"
        },
        {
            title: "Риск-консалтинг\n(ЭКУ - Экспертный контроль угроз)",
            icon: "risk-consulting"
        },
        {
            title: "Финансовый консалтинг\n(ВСР - Верная стратегия роста)",
            icon: "financial-consulting"
        }
    ]

    return (
        <section className={style['section-services']} id="services">
            <div className="g-container">
                <div className={style['wrapper-container']}>
                    <div className={style['left-col']}>
                        <SectionName>Услуги</SectionName>
                    </div>
                    <div className={style['right-col']}>
                        <ul className={style['services-list']}>
                            {servicesList.map((service, index) => {
                                return (
                                    <li className={style['service-item']} key={index}>
                                        <div className={style['info-block']}>
                                            <span className={style['number']}>0{index + 1}</span>
                                            <h3 className={style['title']}>{service.title}</h3>
                                        </div>
                                        <div className={style['icon-container']}>
                                            <Icon variant={service.icon} className={style['icon']}/>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}