import React from 'react';
import { useStateValue } from '../StateProvider';

const ProgressBar = () => {

      const [{progress}] = useStateValue()
      
      return(
        <div className="progress-bar-container">
      
            <div className="progress-bar" style={{ width: progress + "%"}}>
              
            </div>
        </div>
      )
   
  
}

export default ProgressBar;
