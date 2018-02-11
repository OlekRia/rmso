import { action, computed, observable } from 'mobx';

export class TodoStore {
    @observable todos: TodoEntity[] = new Array<TodoEntity>();
    @observable filter: string;

    @action add(data: string) {
        var todo = new TodoEntity(data);
        this.todos.push(todo);
    }

    @action toggle(data: TodoEntity) {
        data.complete = !data.complete;
    }

    @action clearSelected() {
        const completedTodos = this.todos.filter(todo => !todo.complete);
        this.todos = completedTodos;
    }

    @computed get filteredTodos() {
        var matchesFilter = new RegExp(this.filter, "i");
        if (this.filter == "" || this.filter == null || this.filter == 'undefined')
            return this.todos;

        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value));
    }
}

export class TodoEntity {
    @observable value: string = "";
    @observable id: number = 0;
    @observable complete: boolean = false;

    constructor(data: string) {
        this.id = Date.now();
        this.value = data;
    }
}

var store = (<any>window).store = new TodoStore();

export default store;