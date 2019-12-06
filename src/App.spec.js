import React from 'react';
import renderer from 'react-test-renderer';
import { mount,shallow } from 'enzyme';
import App from './App';
import ImageClick from './App';
import { toggleNext, togglePrev } from './App';
import Recipes from './Recipes';
import Recipe from './App';
import ReactDOM from 'react-dom'

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
const home =[
    {
        title: "title",
        body: "body",
        view_node:"node/1"
    }
]

describe('App components', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<App homepage = {home}recipeData={data} />)
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

        const component = renderer.create(<Recipe list = {0} recipeData={data} />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
describe('Recipe page components', () => {
    test('recipe snapshot', () => {
        const component = renderer.create(<Recipes list = {0}recipeData={data} />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    // it('increment vlaue for next button ', ()=> {
    //     const wrapper = mount(<Recipes ID = {0} recipeData = {data}/> )
    //     wrapper.find('next').simulate('click');
    //     expect(wrapper.update().state().list).toEqual(1);
    // });

});

