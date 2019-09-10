import { shallow } from 'enzyme';
import <%= nameUp %> from './<%= name %>';
import { selectorsExist } from '../../../test/helpers';

const setup = propsOverride => {
  const props = {
    ...propsOverride,
  };
  const wrapper = shallow(<<%= nameUp %> {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('# <%= nameUp %>', () => {
  describe('# When required props are passed', () => {
    const { wrapper} = setup({});

    describe('# When component renders', () => {
      selectorsExist(wrapper, ['.wrapper']);
    });


    describe('# When some functionality is invoked', () => {
      beforeAll(() => {
        wrapper.find('.button').simulate('click');
      });

      it('should call the correct functions', () => {
        expect(props.onEventName).toHaveBeenCalled();
      });
    });
  });

  describe('# When optional props are passed', () => {
    // Setup component with optional props.
    // Will override original props
    const { wrapper, props } = setup({ optional: null });

    ddescribe('# When component renders', () => {
      selectorsExist(wrapper, ['.wrapper']);
    });


    describe('# When some functionality is invoked', () => {
      beforeAll(() => {
        wrapper.find('.button').simulate('click');
      });

      it('should call the correct functions', () => {
        expect(props.onEventName).toHaveBeenCalled();
      });
    });
  });

});
