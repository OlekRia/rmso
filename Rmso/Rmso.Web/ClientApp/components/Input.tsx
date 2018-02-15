import * as React from 'react';
import { observer } from 'mobx-react';
import { TodoStore } from '../stores/TodoStore';

interface IState {
    newValue: string;
}

interface IProps {
    hint: string;
    store: TodoStore;
    onEnter?: boolean;
    onChange?: boolean;
}

@observer
export class Input extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { newValue: "" } as IState;
    }

    public static defaultProps: Partial<IProps> = {
        onEnter: false,
        onChange: false
    }

    private newValueChange = (e: any) => {
        this.setState({ newValue: e.target.value }, () => {
            if (this.props.onChange) {
                this.props.store.filter = this.state.newValue;
            }
        });
    }

    private onKeyEnter = (e: any) => {
        if (this.props.onEnter && e.key == 'Enter') {
            this.props.store.add(this.state.newValue);
            this.setState({ newValue: "" });
        }
    }

    render() {
        return <div className="input-goup mb-3">
            <div className="input-group-append">
                <input type="text" className="form-control" placeholder={this.props.hint}
                    aria-label="" aria-describedby="basic-addon1"
                    onChange={this.newValueChange}
                    value={this.state.newValue}
                    onKeyPress={this.onKeyEnter}
                />
            </div>
        </div>
    }
}