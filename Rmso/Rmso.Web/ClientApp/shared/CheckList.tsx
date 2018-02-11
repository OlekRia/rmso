import * as React from 'react';
import { TodoStore, TodoEntity } from '../stores/TodoStore';

interface IProps {
    store: TodoStore;
}

export class CheckList extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const a = this.props.store.todos;
        const todoLis = this.props.store.filteredTodos.map(todo => {
            return <li key={todo.id} className="list-item">
                <div className="checkbox">
                    <label className="checkbox-inline">
                        <input type="checkbox" value={todo.value} checked={todo.complete}
                            onChange={() => this.props.store.toggle(todo)}
                        >
                        </input>
                        {todo.value}
                    </label>
                </div>
            </li>;
        });

        return <ul className="list">
            {todoLis}
        </ul>
    }
}