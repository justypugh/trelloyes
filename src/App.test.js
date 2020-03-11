import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Card from '/.Card';
import List from './List';
import renderer from 'react-test-renderer';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card name="Card" />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
});

describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List name="List" />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
});

