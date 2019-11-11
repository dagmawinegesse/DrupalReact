import React from 'react';
import './app.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

console.log(React.version)
// const lorem = new LoremIpsum({
//   sentencesPerParagraph: {
//     max: 8,
//     min: 4
//   },
//   wordsPerSentence: {
//     max: 16,
//     min: 4
//   }
// });

const API = 'http://gtest.dev.wwbtc.com/json/rec';
const picURL = "http://gtest.dev.wwbtc.com";

function App() {
  return (
    <div className="App">
      <nav >
      <a href = {<Recipe/>}><h1>Food Recipes</h1></a>  
        <div className="linkHome">
          <a href={<Recipe />}>Home</a><br></br>
          
        </div>
        
      </nav>
      <div className="recipe1">
        <Recipe />
      </div>
      <footer id="footer">
        
        <p id = "footernotes"> Umami magazine & Umami publications is a fictional magazine and <br></br> publisher for illustrative purposes only. 
     &nbsp;  &nbsp;&nbsp;</p>
     <p id= "footerCopyrights">© 2018 Terms & Conditions</p>
      </footer>
    </div>
  );
}

class ImageClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index:0,
      clicked: false,
      list: null,

    }
      this.onClickForward = this.onClickForward.bind(this)
      this.onClickBack = this.onClickBack.bind(this)
  }
  componentWillMount() {
    this.setState({ list: this.props.list, ID: this.props.ID })

  }
  onClickForward(){
    const { list } = this.state;
    var clicked = false
    if(clicked === true){
      this.setState({
          list:this.props.list, ID : this.props.ID + 1
      })
    
    }
  }
  onClickBack(){
    if(this.state.index - 1 === -1){
      this.setState({
        index: this.state.list.length -1 
      })
    }else{
      this.setState({
        index: this.state.index - 1
      })
    }
  }

  render() {
    // const { index, disabledNext, disabledPrev } = this.state
    // const recID = this.props.ID
    // const { result } = this.state;
    const { list } = this.state;


    return (
      <div className='recipe'>
        
        <h1> {list[this.props.ID].title}</h1>  
        <Button onClick = {this.onClickBack}>Previous</Button>
          
          <img src={picURL+list[this.props.ID].field_images} />
          <Button onClick = {this.onClickForward}>Next</Button>
            <div className = "fieldingredients">
                
                    <li>
                      {list[this.props.ID].field_ingredients}
                      </li>
                 </div>
             <div>
              <p>{list[this.props.ID].field_summary}</p>

             </div>
            </div>
    );
  }
}
class Recipe extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // list,
      clicked: false,
      objectID: 0,
      result: []
    }
    this.imageClick = this.imageClick.bind(this)
    this.fetcheddataAPI = this.fetcheddataAPI.bind(this)
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
    const { result } = this.state;
  
   
    if (this.state.clicked) {
      // console.log(this.item.ID)

      return <ImageClick list={result} ID={this.state.objectID} />;

    }
    // if (!result) { return null; }

    return (
      <div className="cardStyle">
        {result.map((item, index) =>
         
          <Card className="card" style={{ width: '18rem' }} >
              
            <a href="/#" onClick={() => this.imageClick(index)}><CardImg src= {picURL + item.field_images} /></a>
            <CardBody>
              <CardTitle>{item.title}</CardTitle>

         
            </CardBody>
          </Card>

        )}
        <div id="update">
          <h1>In this month edition</h1>
          <p>
            Dumque ibi diu moratur commeatus opperiens, quorum translationem ex Aquitania verni imbres solito crebriores prohibebant auctique torrentes, Herculanus advenit protector domesticus, Hermogenis ex magistro equitum filius, apud Constantinopolim, ut supra rettulimus, populari quondam turbela discerpti. quo verissime referente quae Gallus egerat, damnis
super praeteritis maerens et futurorum timore suspensus angorem animi quam diu potuit emendabat.</p>

        </div>

      </div>
    );
  }
}

export default App;
