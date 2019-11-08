import { connect } from 'react-redux';
import Link from 'Components/Link/Link';
import { setVisibilityfilter } from './Action';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityfilter(ownProps.filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link);
