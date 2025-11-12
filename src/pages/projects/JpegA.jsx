import styles from "./projectpage.module.css";
import ProjectFront from "../../components/ProjectFront/ProjectFront";
import "../../i18n";
import { useTranslation } from "react-i18next";
import SectionDivider from "../../components/sectionDivider/SectionDivider";
import MediaText from "../../components/mediatext/MediaText";
import { LogoBrain } from "../../art/icons/LogoBrain";

function JpegA()
{
    const {t} = useTranslation();

    return (
    <div className={styles["page-container"]}>
        <ProjectFront                     
                title="JPEG Artifact Removal" 
                role="Solo Developer" 
                engineName="python - pytorch" 
                timeFrame="1 week"
                descriptionSection={t("ia.description")}
                imageSrc="/art/images/ia.png"
                />
            <br/>
            <SectionDivider logo={<LogoBrain />} sectionName={t("ia.section_name")} />

            <MediaText imageSrc="/art/images/ia/resnet.png" text={t("ia.arch")} />
            <br/>
            <br/>
            <MediaText imageSrc="/art/images/ia/draw.png" text={t("ia.drawback")} />
    </div>);
}

export default JpegA;