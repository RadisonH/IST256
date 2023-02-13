import { html } from 'lit';
import '../src/ist256-card.js';

export default {
  title: 'Ist256Card',
  component: 'ist256-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <ist256-card
      style="--ist256-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </ist256-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
