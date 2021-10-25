import React from 'react';

export type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (<div className="Layout">
        {children}
    </div>);
}
