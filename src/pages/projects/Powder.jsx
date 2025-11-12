import styles from "./projectpage.module.css";
import ProjectFront from "../../components/ProjectFront/ProjectFront";
import "../../i18n";
import { useTranslation } from "react-i18next";
import SectionDivider from "../../components/sectionDivider/SectionDivider";
import MediaText from "../../components/mediatext/MediaText";
import { LogoClass } from "../../art/icons/LogoClass";

function Powder()
{
    const {t} = useTranslation();

    return (
    <div className={styles["page-container"]}>
        <ProjectFront                     
                title="Element Powder" 
                role={t("powder.role")}
                engineName="Processing" 
                timeFrame="Three Weeks"
                descriptionSection={t("powder.description")}
                mediaLink="/art/media/powder/showcase.mp4"
                />
            <br/>
            <SectionDivider logo={<LogoClass />} sectionName={t("powder.class.section_name")} />

            <MediaText imageSrc="/art/images/powder/diag.png" text={t("powder.class.description")} mediaLeft={false} />
    </div>);
}

export default Powder;