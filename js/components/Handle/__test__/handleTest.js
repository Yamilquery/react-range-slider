import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Handle from '../index';
import { getReactClassNames } from '../../../testUtils';

describe('Handle test suite', () => {
  it('should have a div when rendered', () => {
    expect(shallow(
      <Handle
        factor={1}
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
      />).node.type).to.equal('div');
  });

  it('should add className in props to the rendered div', () => {
    assert.isTrue(getReactClassNames(mount(
      <Handle
        factor={1}
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
        className="testClassName"
      />))
      .indexOf('testClassName') > 0);
  });

  it('should have false value for state variables hovered and active by default', () => {
    const handle = mount(
      <Handle
        factor={1}
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
      />
    );
    expect(handle.state().hovered).to.equal(false);
    expect(handle.state().active).to.equal(false);
  });

  it('should execute function handleRef when component is mount', () => {
    let test;
    const handleRef = () => {
      test = 'test123';
    };
    mount(<Handle
      handleRef={handleRef}
      factor={1}
      handleMove={() => {}}
      afterChange={() => {}}
    />);
    expect(test).to.equal('test123');
  });

  it('should add props values of left and right to the component styles', () => {
    const handle = mount(
      <Handle
        left={10}
        right={50}
        factor={1}
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
      />
    );
    expect(handle.node.style.left).to.equal(10);
    expect(handle.node.style.right).to.equal(50);
  });

  it('should set state to active when mouse is down', () => {
    const handle = mount(
      <Handle
        left={10}
        right={50}
        factor={1}
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
      />
    );
    expect(handle.state().active).to.equal(false);
    handle.simulate('mouseDown');
    expect(handle.state().active).to.equal(true);
  });

  it('should set state to active when mouse is down', () => {
    const handle = mount(
      <Handle
        left={10}
        right={50}
        factor={1}
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
      />
    );
    expect(handle.state().active).to.equal(false);
    handle.simulate('mouseDown');
    expect(handle.state().active).to.equal(true);
  });

  it('should set state to hovered when mouse is above it', () => {
    const handle = mount(
      <Handle
        left={10}
        right={50}
        factor={1}
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
      />
    );
    expect(handle.state().hovered).to.equal(false);
    handle.simulate('mouseEnter');
    expect(handle.state().hovered).to.equal(true);
    handle.simulate('mouseLeave');
    expect(handle.state().hovered).to.equal(false);
  });
});