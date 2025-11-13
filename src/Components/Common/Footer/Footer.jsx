import {useEffect, useState} from "react";
import {Dialog} from "primereact/dialog";
import style from "./Footer.module.scss";

export default function Footer() {
    const [visible, setVisible] = useState(false);
    const [myDomain, setMyDomain] = useState("");
    const [currentYear, setCurrentYear] = useState("");

    useEffect(() => {
        setMyDomain(window.location.origin);
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <>
            <footer className={style['g-footer']} id="contacts">
                <div className="g-container">
                    <h2 className={style['logo']}>Akonsalt Finance</h2>
                    <div className={style['wrapper-container']}>
                        <div className={style['left-col']}>
                            <span className={style['text']}>Компания Аконсалт Финанс (Akonsalt Finance)</span>
                            <span className={style['text']}>akonsalt-finance@mail.ru</span>
                            <span className={style['text']}>© {currentYear}. Все права защищены</span>
                        </div>
                        <div className={style['right-col']}>
                            <a href="https://www.consultant.ru/document/cons_doc_LAW_61801" target="_blank" className={style['link']}>ФЗ РФ №152-ФЗ «О персональных данных»</a>
                            <a href="https://ivo.garant.ru/#/document/12148555/paragraph/3471:0" target="_blank" className={style['link']}>ФЗ РФ №149-ФЗ «О защите информации»</a>
                            <span className={`${style['text']} ${style['link']}`} onClick={() => setVisible(true)}>Материалы, представленные на сайте, не являются публичной офертой</span>
                        </div>
                    </div>
                </div>
            </footer>

            <Dialog
                header="Публичная оферта"
                visible={visible}
                style={{ width: '50vw' }}
                onHide={() => {
                    if (!visible) return;
                    setVisible(false);
                }}
                pt={{
                    root: style['modal-public-offer'],
                    header: style['header'],
                    headerTitle: style['header-title'],
                    headerIcons: style['header-icons'],
                    content: style['modal-content'],
                    mask: style['modal-mask']
                }}
            >
                <div className={style['wrapper-container']}>
                    <p className={style['text']}>Копирование информации, размещенной на {myDomain} (равно как цитирование в средствах массовой информации тех или иных сведений либо сообщений, содержащихся в информационных разделах сайта Akonsalt Finance) допускается при условии указания ссылки на источник такой информации (в сетевых СМИ – гиперссылки на соответствующую Интернет-страницу с уникальным сетевым адресом).</p>
                    <p className={style['text']}>Информационные ресурсы, непосредственно доступные с {myDomain}, находятся в частной собственности согласно Конституции РФ и ГК РФ , если иное не установлено законодательством об информации, информатизации и защите информации. Указанные информационные ресурсы содержат информацию открытого доступа, которая не может рассматриваться как конфиденциальные сведения, подлежащие защите в соответствии с законодательством РФ. Указанная информация также не может рассматриваться как объект для использования в коммерческих целях без наличия исключительнных прав.</p>
                    <p className={style['text']}>При переходе по гиперссылкам, размещенным на сайте, на внешние по отношению к {myDomain} информационные ресурсы пользователь покидает Интернет-представительство Akonsalt Finance. Редакция сайта {myDomain} не несет ответственности за достоверность сведений, составляющих внешние по отношению к {myDomain} информационные ресурсы, а также за актуализацию и периодичность обновления соответствующей информации в их составе. Лица и/или организации, желающие разместить гиперссылку на сайт {myDomain} в целях использования в качестве элемента информационной (содержательной) структуры своего Интернет-ресурса (например, в каталоге, предусматривающем реконструкцию текста, либо в виде самостоятельной тематической рубрики и т.п.), а также в виде графической ссылки (баннера), в обязательном порядке уведомляют об этом постредством официальной почты official@akonsalt-finance.ru на сайте {myDomain}. При размещении графических ссылок (баннеров) могут использоваться только графические элементы, письменно согласованные с компанией Akonsalt Finance. Владельцы сетевых ресурсов, разместившие гиперссылки на Интернет-представительство Akonsalt Finance в целях, указанных в п. 5:</p>
                    <p className={style['text']}>- не вправе изменять стандартный вид окна программы просмотра (браузера) или иным способом ограничивать либо модифицировать представление содержания {myDomain},</p>
                    <p className={style['text']}>- не вправе указывать недостоверную информацию, связанную с предоставлением гиперссылки на {myDomain}, не вправе размещать на Интернет-страницах, содержащих гиперссылки на {myDomain}, информационные или иные материалы, не соответствующие целям и принципам функционирования Интернет-представительства Akonsalt Finance.</p>
                    <p className={style['text']}>Вопросы, связанные с порядком использования информации, размещенной на {myDomain}, или условиями настоящего Уведомления, могут быть направлены на официальную почту Akonsalt Finance.</p>
                </div>
            </Dialog>
        </>
    );
}