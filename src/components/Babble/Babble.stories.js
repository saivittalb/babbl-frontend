import React from 'react'

import Babble from './Babble';

export default {
    title: 'Example/Babble',
    component: Babble,
    argTypes: {
    },
};

const Template = (args) => <Babble {...args} />;

export const Small = Template.bind({});
Small.args = {
};
