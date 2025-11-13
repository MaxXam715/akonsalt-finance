import style from "./AboutCompany.module.scss";
import SectionName from "@Components/Common/SectionName/SectionName.jsx";

export default function AboutCompany() {
    const arrayTracks = [
        {
            number: "50+",
            text: "отраслевых экспертов",
        },
        {
            number: "320+",
            text: "реализованных проектов",
        },
        {
            number: "8 лет",
            text: "работаем без выходных",
        },
        {
            number: "3 млрд.",
            text: "сэкономленных для клиентов",
        }
    ];

    return (
        <section className={style['about-company']} id="about">
            <div className="g-container">
                <div className={style['description-wrapper']}>
                    <div className={style['left-col']}>
                        <SectionName>О компании</SectionName>
                    </div>
                    <div className={style['right-col']}>
                        <p className={style['text-primary']}>Akonsalt Finance сочетает академическую строгость, отраслевой опыт партнёров и передовые аналитические технологии, обеспечивая ясность и точность управленческих решений в динамичном глобальном бизнес-ландшафте.</p>
                        <p className={style['text-secondary']}>Практическая направленность деятельности охватывает более 40 отраслей, при этом фокус устойчиво смещается в сторону предоставления стратегического понимания оценки и управления рисками, сохраняемых в рамках взаимовыгодного сотрудничества.</p>
                    </div>
                </div>
                <div className={style['track-record']}>
                    {arrayTracks.map((track, index) => {
                        return (
                            <div className={style['track-item']} key={index}>
                                <span className={style['number']}>{track.number}</span>
                                <span className={style['desc']}>{track.text}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}