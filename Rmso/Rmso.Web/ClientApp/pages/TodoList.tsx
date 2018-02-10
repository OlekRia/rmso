import * as React from 'react';


export class TodoList extends React.Component<{}, {}> {

    render() {
        return (<div>
            {this.renderInfo()}
            {this.renderAddInput()}
            {this.renderFilterInput()}
            {this.renderTodoList()}
            {this.renderClearSelected()}
        </div>);
    }

    renderInfo() {
        return <div>
           to
        </div>
    }

    renderAddInput() {
        return <div className="input-goup mb-3">
            <div className="input-group-append">
                <input type="text" className="form-control" placeholder="new value"
                    aria-label="" aria-describedby="basic-addon1"
                //onChange={this.newValueChange.bind(this)}
                //value={this.state.newValue}
                //onKeyPress={this.onKeyEnter.bind(this)}
                />
            </div>
        </div>
    }

    renderFilterInput() {
        return <div className="input-goup mb-3">
            <div className="input-group-prepend">
                <input type="text" className="form-control" placeholder="Filter"
                    aria-label="" aria-describedby="basic-addon1"
                    //onChange={this.filter.bind(this)}
                />
            </div>
        </div>
    }

    renderTodoList() {
        <ul className="list">

        </ul>
    }

    renderClearSelected() {
        return <a href="#"
            //onClick={store.clearComplete}
        >Clear complete</a>
    }
}