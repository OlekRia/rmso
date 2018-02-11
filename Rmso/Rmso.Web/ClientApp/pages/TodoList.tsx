import * as React from 'react';
import { observer } from 'mobx-react';
import { TodoStore, TodoEntity } from '../stores/TodoStore';
import { Input } from '../shared/Input';
import { CheckList } from '../shared/CheckList';

interface IProps {
    store: TodoStore;
}

@observer
export class TodoList extends React.Component<IProps, {}> {
    constructor(prop: IProps) {
        super(prop);
    }

    // <CheckList store={this.props.store} />

    render() {
        return (<div>
            <div>{this.props.store.filter}</div>
            <Input hint="add new value and press ENTER" onEnter={true} store={this.props.store} />
            <Input hint="filter values locally" onChange={true} store={this.props.store} />
            {this.renderClearSelected()}
            {this.renderTodoList()}
        </div>);
    }

    renderTodoList() {
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

    renderClearSelected() {
        return <button href="todo" onClick={(e) => this.props.store.clearSelected() }>
            Clear complete
        </button>
    }
}