import { connect } from 'react-redux';
import Container from "components/App/container";

const mapStateToProps = (state, ownProps) => {
    const { user } = state;
    return {
        isLoggedIn: user.isLoggedIn
    }
}

export default connect(mapStateToProps)(Container);