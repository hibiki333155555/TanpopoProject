
import Title from "../components/Title";
// import { useAtom } from "jotai";
// import { atomWithStorage } from "jotai/utils";
import { IncorrectTextBox } from "../components/Inputb";

export function Chat() {
    {/*const OpenAIKeyAtom = atomWithStorage("OpenAIKeyAtom", "");*/}
    {/*const [openAIKey, setOpenAIKey] = useAtom(OpenAIKeyAtom);label="Input your question."*/}
    return(
        <>
            <Title/>
            <h1>
            <IncorrectTextBox  />
            </h1>
            
            
        </>
    );
};