import styles from "./projectpage.module.css";
import ProjectFront from "../../components/ProjectFront/ProjectFront";
import "../../i18n";
import { useTranslation } from "react-i18next";
import SectionDivider from "../../components/sectionDivider/SectionDivider";
import MediaText from "../../components/mediatext/MediaText";
import { LogoMath } from "../../art/icons/LogoMath";

function Model()
{
    const {t} = useTranslation();

    return (
    <div className={styles["page-container"]}>
        <ProjectFront                     
                title="Additive Animations in WebGL" 
                role="Solo Developer" 
                engineName="WebGL-HTML-CSS" 
                timeFrame="3 Weeks"
                descriptionSection={t("model.description")}
                mediaLink="/art/media/model/showcase.mp4"
                />
            <br/>
            <SectionDivider logo={<LogoMath />} sectionName={t("model.section_name")} />

            <MediaText imageSrc="/art/images/model/math.png" text={t("model.math")} />
    </div>);
}

export default Model;