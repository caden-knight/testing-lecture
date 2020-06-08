import React from 'react';
import { render, act } from '@testing-library/react';
import Todos from '../components/Todos';
import axios from 'axios'

//testing async functionality
it('component renders the todos', async () => {
    let component;
    
    //will intercept the get call
    jest.spyOn(axios, 'get').mockImplementation(() => {
        //resolve creates mock data reassigning res.data to what you specify
        return Promise.resolve({data: [{id: 1, title: "test title"}]})
        //mimic your data to get the best results
        //id and title is how the object is structured in the actual data being used 
    })
    await act( async () => {
        const {container} = render(<Todos />)
        component = container
    })

    expect(component.textContent).toContain('test title')
});
