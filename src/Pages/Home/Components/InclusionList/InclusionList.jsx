import style from "./InclusionList.module.scss";
import SectionName from "@Components/Common/SectionName/SectionName.jsx";

export default function InclusionList() {
    const inclusionList = [
        {title: "Торгово-Промышленную палату России"},
        {title: "Московскую торгово-промышленную палату"},
        {title: "Московский инновационный кластер"},
        {title: "Экспертный совет по защите конкуренции на рынке финансовых услуг при ФАС России"},
    ];

    return (
        <section className={style['section-inclusion-list']}>
            <div className="g-container">
                <SectionName className={style['heading']}>Аконсалт Финанс <br/>включен в:</SectionName>
                <div className={style['inclusion-list']}>
                    {inclusionList.map((item, index) => {
                        return (
                            <div className={style['inclusion-item']} key={index}>
                                <h3 className={style['title']}>{item.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}