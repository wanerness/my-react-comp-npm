import React from 'react';
import renderer from 'react-test-renderer';

import ReactComp from '../ReactComp';

describe('test ReactComp', () => {
  it('renders ReactCompe button', () => {
    const tree = renderer
      .create(
        <ReactComp
          title='fku'
          onClick={() => {
            console.log('click me');
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
