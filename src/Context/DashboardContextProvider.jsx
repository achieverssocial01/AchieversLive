import React, { useState } from 'react'
import DashboardContext from './DashboardContext';

const DashboardContextProvider = ({children}) => {

const [selectedPage, setSelectedPage] = useState(0);

  return (
    <DashboardContext.Provider value={{selectedPage, setSelectedPage}}>
      
      {children}

    </DashboardContext.Provider>
  )
}

export default DashboardContextProvider
