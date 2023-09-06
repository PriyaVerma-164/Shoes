import React, { createContext, useState } from "react";

export const Context = createContext();

const AppContext =({chirldren}) => {
    return <Context.Provider> {chirldren} </Context.Provider>;

};
 export default AppContext;