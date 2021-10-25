import React from 'react';
import Layout, { LayoutProps } from './Layout';

export default {
    title: "Layout",
    component: Layout
};

export const Default = (props: LayoutProps) => <Layout {...props} >Hello</Layout>;
