import ProjectFront from "../../components/ProjectFront/ProjectFront";

import "../../i18n";
import { useTranslation } from "react-i18next";
import SectionDivider from "../../components/sectionDivider/SectionDivider";
import { LogoSonicHead } from "../../art/icons/LogoSonicHead";
import { LogoPunch } from "../../art/icons/LogoPunch";

import styles from "./projectpage.module.css"
import TextZone from "../../components/textzone/TextZone";
import MediaText from "../../components/mediatext/MediaText";
import ArtSwiper from "../../components/artswiper/ArtSwiper";
import { LogoGlobe } from "../../art/icons/LogoGlobe";

function SymSym() {
    const {t} = useTranslation();
    return (
        <div className={styles["page-container"]}>
            <ProjectFront                     
                title="Symbolic Symphony" 
                role="Solo Developer" 
                engineName="Unreal Engine - Blueprint/C++" 
                timeFrame="N/A"
                descriptionSection={t("symb.description")}
                mediaLink="/art/media/symb/symshowcase.mp4"
                />
            <br/>
            <SectionDivider logo={<LogoSonicHead />} sectionName={t("symb.day.section_name")} />

            <MediaText mediaLink="/art/media/symb/gas.mp4" text={t("symb.day.presentation")} />
            <br/>
            <ArtSwiper images={["/art/images/sym/gi.png", "/art/images/sym/super.webp", "/art/images/sym/wind.webp", "/art/images/sym/windsonic.webp", "/art/images/sym/ui.webp"]} loop={true}/>
            <ArtSwiper videos={["/art/media/symb/dayshowcase.mp4", "/art/media/symb/snow.mp4", "/art/media/symb/enemies.mp4"]} />
            <ArtSwiper videos={["/art/media/symb/kake.mp4", "/art/media/symb/wallj.mp4"]} />

            <br/>
            <SectionDivider logo={<LogoPunch />} sectionName={t("symb.night.section_name")} />
            <MediaText mediaLink="/art/media/symb/furcombos.mp4" text={t("symb.night.presentation")} mediaLeft={false} />
            <br/>
            <br/>
            <MediaText imageSrc="/art/images/sym/fur.webp" text={t("symb.night.fur")} />
            <br/>
            <br/>
            <MediaText mediaLink="/art/media/symb/finisher.mp4" text={t("symb.night.finisher")} mediaLeft={false} />
            <br/>
            <br/>
            <MediaText mediaLink="/art/media/symb/bloco.mp4" text={t("symb.night.loco")} mediaLeft={true} />
            <ArtSwiper videos={["/art/media/symb/throw.mp4", "/art/media/symb/nightshowcase.mp4", "/art/media/symb/lightw.mp4"]} />
            <ArtSwiper videos={["/art/media/symb/shield.mp4", "/art/media/symb/rail.mp4", "/art/media/symb/loco.mp4"]}/>

            <SectionDivider logo={<LogoGlobe />} sectionName={t("symb.globe.section_name")} />
            <br/>
            <br/>
            <MediaText imageSrc="/art/images/sym/earth.webp" text={t("symb.globe.presentation")} mediaLeft={true} />

        </div>
    )
}

export default SymSym;