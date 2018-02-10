import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>React, Mobx, SignalR, Orleans</h1>
            <p>This page is created to play with above mentioned technologies</p>
        </div>;
    }
}
