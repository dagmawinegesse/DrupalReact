import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import App, { Counter, dataReducer } from './App';
import ImageClick from './App';
import { toggleNext, togglePrev } from './App';
import Recipes from './Recipes';
import Recipe from './App';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme';
import register from './serviceWorker'



it('adds correctly', () => {
    expect(1 + 1).toEqual(2);
})

var data = [
    {
        field_images: "image section",
        field_ingredients: "1 2 3 4",
        field_sumamary: "summary section",
        title: "title section",
        node: "0"
    },
    {
        field_images: "image section",
        field_ingredients: "5 4 3 2",
        field_sumamary: "summary section",
        title: "title section",
        node: "2"
    }
]

describe('App components', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<App recipeData={data} />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
 
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });





});
describe('ImageClicked components', () => {
    test('<ImageClcked Component> run without crashing', () => {
        //   const div = document.createElement('div');
        //   ReactDOM.render(<ImageClick/>, div);
        //   ReactDOM.unmountComponentAtNode(div);
        const component = renderer.create(<ImageClick recipeData={data} />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
describe('Recipe Components', () => {
    test('<Recipe run without crashing', () => {

        const component = renderer.create(<Recipe recipeData={data} />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
describe('Recipe page components', () => {
    test('recipe snapshot', () => {
        const component = renderer.create(<Recipes recipeData={data} />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})