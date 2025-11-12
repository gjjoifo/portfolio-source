import styles from "./projectpage.module.css";
import ProjectFront from "../../components/ProjectFront/ProjectFront";
import "../../i18n";
import { useTranslation } from "react-i18next";
import SectionDivider from "../../components/sectionDivider/SectionDivider";
import MediaText from "../../components/mediatext/MediaText";
import { LogoPaw } from "../../art/icons/LogoPaw";

function Ges()
{
    const {t} = useTranslation();

    return (
    <div className={styles["page-container"]}>
        <ProjectFront                     
                title="Gestalt Therapy" 
                role="Solo Developer" 
                engineName="Unreal Engine - Blueprint/C++ - VR" 
                timeFrame="3 Months"
                descriptionSection={t("ges.description")}
                mediaLink="/art/media/ges/showcase.mp4"
                />
            <br/>
            <SectionDivider logo={<LogoPaw />} sectionName={t("ges.fur.section_name")} />

            <MediaText mediaLink="/art/media/ges/fur.mp4" text={t("ges.fur.description")} />
    </div>);
}

export default Ges;