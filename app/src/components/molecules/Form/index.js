const { Component } = require("react");
const { View } = require("react-native");


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        for(input in props.inputs) {
            console.log(input);
        }
    }
    render() {
        return(
            <View>
                {this.props.inputs}
                {this.props.submit}
            </View>
        )
    }
    
}