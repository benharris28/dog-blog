import React from 'react';
import { useStateValue } from '../StateProvider';

const ProgressBar = () => {

      const [{progress}] = useStateValue()
      
      return(
        <div className="progress-bar-container">
      
            <div className="progress-bar" style={{ width: this.props.progress + "%"}}>
              
            </div>
        </div>
      )
   
  
}

export default ProgressBar;
