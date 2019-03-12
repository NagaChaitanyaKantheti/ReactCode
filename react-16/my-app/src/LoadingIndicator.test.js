import React from 'react';
import {mount,configure} from 'enzyme';
import LoadingIndicator from './LoadingIndicator'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('LoadingIndicator',()=>{
    describe('when isLoading is true',()=>{
        describe('given 200ms have not yet elapsed',()=>{
            it('should render nothing',()=>{
                const wrapper=mount(
                    <LoadingIndicator isLoading={true}>
                        <div>ahoy!</div>
                    </LoadingIndicator>
                );
                expect(wrapper.html()).toBe(null);
                wrapper.unmount();
            });
        })
        
    });
});