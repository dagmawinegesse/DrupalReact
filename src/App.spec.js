import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import App from './App';
import { toggleNext, togglePrev } from './App';




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
    //     it('should increment state by one', () => {
    //         const state = {ID : 0}
    //         const newstate = toggleNext(state)

    //         expect(newstate.ID).toEqual(1);
    //     });
    //     it('should decrement state by one', () => {

    //         const state = {ID : 0}
    //         const newstate = togglePrev(state)

    //         expect(newstate.ID).toEqual(-1);
    // });

});

