import { useState } from "react";



const Section = ({ title, description, isVisible, SetIsVisible }) => {
    return (
        <div className="border border-black p-3">
            <h3 className="font-bold text-xl">{title}</h3>
            {!isVisible ? <button className="cursor-pointer py-2 m-3 bg-lime-500" onClick={() => SetIsVisible(true)}>Show</button>
                : <button className="cursor-pointer py-2 bg-lime-500" onClick={() => SetIsVisible(false)}>Hide</button>
            }
            {isVisible && <p>{description}</p>}
        </div>
    );
};


const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("about");
    return (
        <div>
            <h1 className="text-3xl font-bold p-4">Instamart</h1>
            <Section title={"About Instamart"}
                isVisible={visibleSection === "about"}
                SetIsVisible={() => setVisibleSection("about")}

                description={"this is about section of ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker includin instamart"} />

            <Section title={"Team Instamart"}
                isVisible={visibleSection === "team"}
                SetIsVisible={() => setVisibleSection("team")}

                description={"this is team section of instamart.Our team has 50 members ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker includin"} />

            <Section title={"Career Instamart"}
                isVisible={visibleSection === "career"}
                SetIsVisible={() => setVisibleSection("career")}

                description={"this is career section of instamart ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker includin"} />


        </div>
    );
};

export default Instamart