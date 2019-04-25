import React from 'react';
import ReactList from 'react-list';
import {identifyDistinctElements, sortData} from "../Algorithm/DuplicationIdentifier";

export class ListComponent extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            accounts: []
        };
    }

    componentWillMount() {
        let dataArray = sortData()
        let data = dataArray[1]
        let duplicateInformation = identifyDistinctElements(data, this.props.windowSize,
            this.props.fieldAccThreshold, this.props.overallAccThreshold, this.props.rowsToCompare)

        let duplicates = duplicateInformation.filter((element) => {return element.length > 1})
        let nonDuplicates = duplicateInformation.filter((element) => {return element.length == 1})

        this.setState({
            duplicates,
            nonDuplicates
        })

    }

    getRenderFunction(stateField)
    {
        return function renderItem(index, key)
        {
            return <div key={key}>{this.state[stateField][index]}</div>;
        }
    }

    render() {
        let dupRenderFunction = this.getRenderFunction("duplicates")
        dupRenderFunction = dupRenderFunction.bind(this)

        let nonDupRenderFunction = this.getRenderFunction("nonDuplicates")
        nonDupRenderFunction = nonDupRenderFunction.bind(this)

        return (
            <div>
                <h1>Duplicates</h1>
                <div style={{overflow: 'auto', maxHeight: 400}}>
                    <ReactList
                        itemRenderer={dupRenderFunction}
                        length={this.state.duplicates.length}
                        type='uniform'
                    />
                </div>
                <h1>Non-Duplicates</h1>
                <div style={{overflow: 'auto', maxHeight: 400}}>
                    <ReactList
                        itemRenderer={nonDupRenderFunction}
                        length={this.state.nonDuplicates.length}
                        type='uniform'
                    />
                </div>
            </div>
        );
    }
}