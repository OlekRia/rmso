import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { TodoList } from '../pages/TodoList';

export class Todo extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="cold-md-10">
            <h1>To-do List:</h1>
            <TodoList />
        </div>;
    }
}
