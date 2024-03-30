import { createContext, useState } from "react";
import React from "react";

export const SidebarContext = createContext()

export const SidebarContextProvider = (props) =>{
    const[isToggled, setIsToggeld] = useState(true)

    const handleToggleSidebar= () =>{
        setIsToggeld(!isToggled)
    }
    return <SidebarContext.Provider 
        value={{isToggled, setIsToggeld, handleToggleSidebar}} 
        {...props}
    />
}

export default SidebarContextProvider;