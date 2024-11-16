import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider=(props)=>{

    const[input , setInput]=useState("");

    const [recentPrompt,setRecentPrompt]=useState("");

    const[prevPropmpts,setPrevPrompts]=useState([]);

    const[showResult,setshowResult]=useState(false);

    const[loading,setLoading]=useState(false);

    const[resultData,setresultData]=useState("");

    const delaypara=(index,nextWord)=>{
        setTimeout(function(){
            setresultData(prev=>prev+nextWord)
        },75*index)
    }

    const onSent = async (prompt)=>{
        setresultData("")
        setLoading(true)
        setshowResult(true)
        setRecentPrompt(input)
        setPrevPrompts(prev=>[...prev,input])
        const response =await runChat(input)
        setresultData(response)
        setLoading(false)
        setInput("")
    }

    const contextvalue ={
        prevPropmpts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }

    return(
        <Context.Provider value={contextvalue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider