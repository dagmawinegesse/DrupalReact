import React from 'react';
import './app.css';

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

const list = [
  {
    objectID: 0,
    Name: 'Cheese Burger',
    url: 'https://sifu.unileversolutions.com/image/en-AU/recipe-topvisual/2/1260-709/honest-to-goodness-american-cheese-burger-50294060.jpg'

  },
  {
    objectID: 1,
    Name: 'Steak',
    url: 'https://www.omahasteaks.com/blog/wp-content/uploads/2019/09/Grilling-Flat-Irons-BP.jpg'

  }
];




function App() {
 
  
    return (

      <div className="App">
        <nav>
          <h1>Food Recipes</h1>
          <div className="linkHome">
            <a href=''>Home</a>

          </div>
        </nav>
        <div className="recipe1">
          <Recipe />


        </div>
        <footer id="footer">
          <p>Posted by: Dagmawi Negesse</p>
          <p>Contact information: <a href="mailto:someone@example.com">
            dagmawizeleke1@gmail.com</a>.</p>
        </footer>
      </div>

    );
  }
  class Recipe extends React.Component {


    render() {

      return (
        <div className="recipe">
          {list.map(function (item) {
            return (
              <div id="font">

                <span>{item.Name} </span>
                <div className="image">
                  <span>
                    <a href=""><img src={item.url} width='50%' /></a>
                  </span>
                </div>
                <p id="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh tellus molestie nunc non blandit. Massa massa ultricies mi quis. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Bibendum enim facilisis gravida neque. Arcu odio ut sem nulla. Eu volutpat odio facilisis mauris. Sed egestas egestas fringilla phasellus faucibus. Adipiscing enim eu turpis egestas pretium aenean pharetra. Velit dignissim sodales ut eu sem integer vitae justo. Massa tincidunt dui ut ornare. Tempor id eu nisl nunc mi ipsum faucibus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Viverra tellus in hac habitasse platea dictumst vestibulum. Id nibh tortor id aliquet lectus proin nibh. Posuere morbi leo urna molestie at elementum eu facilisis sed. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet.
              Egestas sed sed ri</p>
              </div>


            );
          })}
        </div>

      );
    }
  }
  class Clicked extends React.Component {
    render() {

      return (
        <div className="recipe">
          {list.map(function (item) {
            return (
              <div className="font">

                <span>{item.Name[0]} </span>
                <div className="image">
                  <span>


                    <a href=""><img src={item.url[0]} width='50%' /></a>
                  </span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh tellus molestie nunc non blandit. Massa massa ultricies mi quis. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Bibendum enim facilisis gravida neque. Arcu odio ut sem nulla. Eu volutpat odio facilisis mauris. Sed egestas egestas fringilla phasellus faucibus. Adipiscing enim eu turpis egestas pretium aenean pharetra. Velit dignissim sodales ut eu sem integer vitae justo. Massa tincidunt dui ut ornare. Tempor id eu nisl nunc mi ipsum faucibus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Viverra tellus in hac habitasse platea dictumst vestibulum. Id nibh tortor id aliquet lectus proin nibh. Posuere morbi leo urna molestie at elementum eu facilisis sed. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet.
Egestas sed sed ri</p>
              </div>
            );
          })}
        </div>


      );
    }
  }


  export default App;
