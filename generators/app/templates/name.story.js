import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { <%= nameUp %> } from './<%= name %>.jsx';
import pageDecorator from '../../.storybook/decorators/page-decorator';
import className from 'classnames';

storiesOf('<>| Wellbeing and Assessment Hubs Cards', module)
  .addDecorator(withKnobs)
  .addDecorator(pageDecorator)
  .add('State 1', () => (

  ))
  .add('State 2', () => (

  ));
