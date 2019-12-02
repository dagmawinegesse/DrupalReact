import React from 'react';
import './app.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';



const picURL = "http://gtest.dev.wwbtc.com";


class Recipedescription extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ID: 0,
        current: this.state,
        clicked: false,
        list: null,
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
  
      const { list } = this.state;
      return (

        <div className='recipe'>
            <h1>Hello  </h1>
          <h1> {list[this.state.ID].title}</h1>

          {console.log('id', this.state.ID)}
          <Button onClick={this.togglePrev}>Previous</Button>
          <img src={picURL + list[this.state.ID].field_images} />
  
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

export default Recipedescription;