import React from 'react';
import './app.css';
import {
    Card, CardImg,  CardBody,
    CardTitle,  Button
} from 'reactstrap';


const API = 'http://gtest.dev.wwbtc.com/json/rec';
const picURL = "http://gtest.dev.wwbtc.com";


class ImageClick extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ID: 0,
        current: this.state,
        clicked: false,
        list: this.props.list,
      }
      this.toggleNext = this.toggleNext.bind(this);
      this.togglePrev = this.togglePrev.bind(this);
  
  
    }
    componentWillMount() {
      this.setState({ list: this.props.list, ID: this.props.ID })
  
    }
  
    toggleNext(e) {
        e.preventDefault();

  
      if (this.state.ID === this.state.list.length - 1)
        return this.setState({ ID: 0 })
  
      this.setState(prevState => ({ ID: prevState.ID + 1 }))
  
  
    }
    togglePrev(e) {
        e.preventDefault();

  
  
      if (this.state.ID === 0) {
        console.log(this.state.ID === this.state.list.length - 1)
        return this.setState({ ID: this.state.list.length - 1 })
  
      }
  
  
  
      this.setState(prevState => ({ ID: prevState.ID - 1 }))
  
    }
    render() {
      { console.log("prevID", this.state.ID) }
  
      const { list } = this.state;
  
  
      return (
        
        <div className='recipe'>
         
          <h1> {list[this.state.ID].title}</h1>
          <Button onClick={this.togglePrev}>Previous</Button>
  
          <img src={picURL + list[this.state.ID].field_images} />
  
          {console.log(this.state.ID)}
          <Button onClick={this.toggleNext}>Next</Button>
          <div className="fieldingredients">
  
            <li>
              {list[this.state.ID].field_ingredients}
            </li>
          </div>
          <div>
            <p>{list[this.state.ID].field_summary}</p>
  
          </div>
        </div>
      );
    }
  }

class Recipes extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            // list,t54
        clicked: false,
        objectID: 0,
        result: []
          
    }
    this.fetcheddataAPI = this.fetcheddataAPI.bind(this)
    this.imageClick = this.imageClick.bind(this)
}

fetcheddataAPI(result) {

    this.setState({ result });

  }
  componentDidMount() {
    //console.log('a',API);
    fetch(API).then(response => response.json()).then(result => this.fetcheddataAPI(result));
  }
  imageClick(objectId) {
    

    //console.log(objectId)
    this.setState({ clicked: true, objectID: objectId })


  }
    render() {     
        const {result} = this.state
        console.log("hello",result)
        if(this.state.clicked){
            return <ImageClick list = {result} ID = {this.state.objectID}/>
        }
        
        return (     
            <div>
            {/* <h1> {list[this.state.ID].title}</h1> */}
                    <h1>Recipes</h1>
                    <h2>Explore recipes accross every type of occasion, ingredient and skill level</h2>
                    {result.map((item, index) => 
                          <Card className="card" style={{ width: '18rem' }} >

                          <a href="/#" onClick={() => this.imageClick(index)}><CardImg src={picURL + item.field_images} /></a>
                          <CardBody>
                            <CardTitle>{item.title}</CardTitle>            
                          </CardBody>
                        </Card>
                          ) }
                 </div>
        )
    }
}
export default Recipes;