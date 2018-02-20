import React, { Component } from 'react';

class ToolBox extends Component {
    render() {
        return (
            <div className="toolbox">
                <div className="card card-default">
                    <div className="card-header">
                        ToolBox
                    </div>
                    <div className="card-body toolbox-list p-0">
                        <ul className="list-group">
                            {
                                this.props.tools.map((types) => {
                                    return <li draggable={true}
                                               onDragStart={(e) => this.dragField(e, types.name)} key={types.name}
                                               className='list-group-item singleField'>{types.title}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="card-footer">
                        <span className='pull-right'>Single Fields</span>
                    </div>
                </div>
            </div>
        );
    }

    dragField(e, types){
        e.dataTransfer.setData("dragField", types);
    }
}

export default ToolBox;
