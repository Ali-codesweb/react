import React, { PureComponent } from 'react'

class Purecomponent extends PureComponent {
    render() {
        console.log(`Pure component render`)
        return (
            <div>
                Pure COmponent {this.props.name}
            </div>
        )
    }
}

export default Purecomponent
