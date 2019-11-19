import React from 'react';
import './app.css';



class ImageClick extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        index: 0,
        result:[]
      
      }
       
    }
  
    render() {
      // const { index, disabledNext, disabledPrev } = this.state
      // const recID = this.props.ID
      // const { result } = this.state;
          const recID = this.props.index
    
      return (
        <div className='recipe'>
            
  
        </div>
      );
    }
  }

           {/* <span>{result[thiis.props.ID].title}</span> */}
             {/* <h1>{list[this.props.ID].Name}</h1> 
             
             <span><img src = {list[this.props.ID].url} width = '50%'></img>
  
             </span>
             <button onClick={this.next}>Next</button>
             <br></br>
              <span>{list[this.props.ID].Summary}</span> */} 
  