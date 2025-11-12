import styles from "./projectpage.module.css";
import ProjectFront from "../../components/ProjectFront/ProjectFront";
import "../../i18n";
import { useTranslation } from "react-i18next";
import SectionDivider from "../../components/sectionDivider/SectionDivider";
import MediaText from "../../components/mediatext/MediaText";
import { LogoTriangle } from "../../art/icons/LogoTriangle";
import { LogoConvexHull } from "../../art/icons/LogoConvexHull";
import { LogoSelectPoint } from "../../art/icons/LogoSelectPoint";

function Engine()
{
    const {t} = useTranslation();

    return (
    <div className={styles["page-container"]}>
        <ProjectFront                     
                title="3D Engine" 
                role="Solo Developer" 
                engineName="python - pygames" 
                timeFrame="1 week"
                descriptionSection={t("engine.description")}
                mediaLink="/art/media/engine/showcase.mp4"
                />
            <br />
            <SectionDivider logo={<LogoTriangle />} sectionName={t("engine.triangulation.section_name")} />
            <MediaText mediaLink="/art/media/engine/triangulation.mp4" text={t("engine.triangulation.description")} />
            <br />
            <br />
            <SectionDivider logo={<LogoConvexHull />} sectionName={t("engine.convexhull.section_name")} />
            <MediaText mediaLink="/art/media/engine/hull.mp4" text={t("engine.convexhull.description")} mediaLeft={false}/>
            <br />
            <br />
            <SectionDivider logo={<LogoSelectPoint />} sectionName={t("engine.point.section_name")} />
            <MediaText mediaLink="/art/media/engine/convex.mp4" text={t("engine.point.description")} />
            <br />
            <br />

    </div>);
}

export default Engine;