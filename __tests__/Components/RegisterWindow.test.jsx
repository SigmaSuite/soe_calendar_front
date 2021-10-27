/**
 * @jest-environment jsdom
 */

import React from 'react';

import { ASSET_PREFIX } from 'src/config/config';
import theme, { background } from '@styles/theme';
import { RegisterImageContainer } from '@components/UserAccess/RegisterWindow.styles';
import renderer from 'react-test-renderer';

describe('Styled Component: Window Header', () => {
  it('Changes image background color to red-gradient on error', () => {
    let isInvalid = false;
    const component = renderer.create(
      <RegisterImageContainer theme={theme} isInvalid={isInvalid} />,
    );
    let tree = component.toJSON();
    expect(tree).toHaveStyleRule(
      'background-image',
      `url('${ASSET_PREFIX}bartek.svg'),${background.properBlueSkewed}`,
    );

    isInvalid = true;
    component.update(<RegisterImageContainer theme={theme} isInvalid={isInvalid} />);
    tree = component.toJSON();
    expect(tree).toHaveStyleRule(
      'background-image',
      `url('${ASSET_PREFIX}bartek.svg'),${background.errorSkewed}`,
    );
  });
});
