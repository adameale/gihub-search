import { createContext,useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext()



export const GithubProvider =({children}) =>{
    const initialState ={
        users:[],
        user:{},
        repos:[],
        Loading:false,
    }
   
   const [state,dispatch] =useReducer(githubReducer,
    initialState)
    
  
   
         //search single user
    
            return <GithubContext.Provider 
    value=    { {
    ...state,
        dispatch,
       
      
    } }>
        {children}
    </GithubContext.Provider>
}
export default GithubContext