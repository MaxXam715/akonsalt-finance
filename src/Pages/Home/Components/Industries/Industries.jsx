import style from "./Industries.module.scss";
import SectionName from "@Components/Common/SectionName/SectionName.jsx";
import imgBranch_1 from "@Img//Industries/branch-1.jpg";
import imgBranch_2 from "@Img//Industries/branch-2.jpg";
import imgBranch_3 from "@Img//Industries/branch-3.jpg";
import imgBranch_4 from "@Img//Industries/branch-4.jpg";
import imgBranch_5 from "@Img//Industries/branch-5.jpg";
import imgBranch_6 from "@Img//Industries/branch-6.jpg";

export default function Industries() {
    const industriesList = [
        {img: imgBranch_1},
        {img: imgBranch_2},
        {img: imgBranch_3},
        {img: imgBranch_4},
        {img: imgBranch_5},
        {img: imgBranch_6}
    ];

    return (
        <section className={style['section-industries']}>
            <div className="g-container">
                <SectionName>Уникален для каждой отрасли</SectionName>
                <ul className={style['grid-container']}>
                    {industriesList.map((item, index) => {
                        return (
                            <li className={style['branch-item']} key={index}>
                                <img src={item.img} className={style['img']}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}