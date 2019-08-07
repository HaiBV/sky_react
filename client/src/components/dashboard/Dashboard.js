import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';

const Dashboard = () => {
  return <div>Dashboard</div>;
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getCurrentProfile }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
