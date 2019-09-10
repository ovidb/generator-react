import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { <%= nameUp %> } from './<%= name %>.jsx';
import pageDecorator from '../../../.storybook/decorators/page-decorator';

storiesOf('<%= category %>| <%= nameUp %>', module)
  .addDecorator(withKnobs)
  .addDecorator(pageDecorator)
  .add('State 1', () => (
    <<%= nameUp %> />
  ))
  .add('State 2', () => (
    <<%= nameUp %> />
  ));
