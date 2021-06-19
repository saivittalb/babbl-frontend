import React from 'react'

import BabbleEditor from './BabbleEditor';

export default {
    title: 'Example/BabbleEditor',
    component: BabbleEditor,
    argTypes: {
    },
};

const Template = (args) => <BabbleEditor {...args} />;

export const Small = Template.bind({});
Small.args = {
};
