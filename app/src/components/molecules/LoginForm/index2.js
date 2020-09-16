import LoginForm from '_molecules/LoginForm/index.js';
import {connect, useDispatch} from 'react-redux';


// REDUX
const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        login : (uname,psw) => {
            {
                dispatch({type:'authen/login',payload:(uname,psw)});
            }
        },
    }
}
export default connect(null,mapDispatchToProps)(LoginForm);

