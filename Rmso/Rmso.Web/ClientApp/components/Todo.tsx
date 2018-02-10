import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Todo extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>To-do</h1>
        </div>;
    }
}
