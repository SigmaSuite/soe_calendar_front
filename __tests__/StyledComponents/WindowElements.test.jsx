/**
 * @jest-environment jsdom
 */

import React from 'react';
import { WindowHeader } from '@components/Generic/WindowsElements';
import renderer from 'react-test-renderer';
import theme, { background } from '@styles/theme';

describe('Styled Component: Window Header', () => {
  it('Changes header background color to red-gradient on error', () => {
    let isInvalid = false;
    const component = renderer.create(<WindowHeader theme={theme} isInvalid={isInvalid} />);
    let tree = component.toJSON();
    expect(tree).toHaveStyleRule('background', background.properBlue);

    isInvalid = true;
    component.update(<WindowHeader theme={theme} isInvalid={isInvalid} />);
    tree = component.toJSON();
    expect(tree).toHaveStyleRule('background', background.error);
  });
});
