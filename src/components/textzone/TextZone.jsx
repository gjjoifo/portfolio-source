import BackgroundCard from "../backgroundCard/BackgroundCard";
import ReactMarkdown from "react-markdown";

function TextZone({text})
{
    return (                
    <BackgroundCard>
        <ReactMarkdown>{text}</ReactMarkdown>
    </BackgroundCard>);
}

export default TextZone;