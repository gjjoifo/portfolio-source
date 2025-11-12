import React from "react";
import "./Home.css"
import Card from "../components/cards/Card";
import SectionDivider from "../components/sectionDivider/SectionDivider";
import { LogoProgram } from "../art/icons/LogoProgram";
import { LogoUnreal } from "../art/icons/LogoUnreal";

import "../i18n";
import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";
import TextZone from "../components/textzone/TextZone";
import { LogoHappy } from "../art/icons/LogoHappy";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <br />
      <div className="hint">
        <LogoHappy/>
        <h1>{t("home.hint")}</h1>
      </div>
      <SectionDivider logo={<LogoUnreal />} sectionName="Unreal Engine" />
      <div className="cards-container">
        <Card
          imgSrc="/art/images/sym/super.webp"
          title="Symbolic Symphony"
          description={t("home.project.symb.description")}
          buttonText="Learn More"
          link="/project/symsym"
        />
        <Card
          imgSrc="/art/images/ges.png"
          title="Gestalt Therapy"
          description={t("home.project.ges.description")}
          buttonText="Learn More"
          link="/project/ges"
        />
      </div>

      <SectionDivider logo={<LogoProgram />} sectionName="Programming" />
      <div className="cards-container">
        <Card
          imgSrc="/art/images/engine.png"
          title="3D Engine"
          description={t("home.project.engine.description")}
          buttonText="Learn More"
          link="/project/engine"
        />
        <Card
          imgSrc="/art/images/ia.png"
          title="JPEG Artifact Removal"
          description={t("home.project.jpeg_remov.description")}
          buttonText="Learn More"
          link="/project/ia"
        />
        <Card
          imgSrc="/art/images/elmt.png"
          title="Powder Toy"
          description={t("home.project.powder_toy.description")}
          buttonText="Learn More"
          link="/project/powder"
        />
        <Card
          imgSrc="/art/images/webgl.png"
          title="WebGL Additive Animation"
          description={t("home.project.additive.description")}
          buttonText="Learn More"
          link="/project/model"
        />
      </div>
    </div>
  );
}


export default Home;