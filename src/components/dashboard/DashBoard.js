import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  {getCurrentProfile} from '../../actions/profile';

const DashBoard = ({ getCurrentProfile, auth, profile }) => {
    useEffect(() => {}, [])
        getCurrentProfile();
    return (
        <div>
            the dasshbbord!
        </div>
    )
}

DashBoard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.state,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(DashBoard);
