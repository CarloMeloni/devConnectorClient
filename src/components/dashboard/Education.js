import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
    const educations = education.map(edu => (
        <tr key={edu._id}>
            <td className="hide-sm">{edu.school}</td>
            <td><Moment format='DD/MM/YYYY'>{edu.degree}</Moment> -{' '} 
                {edu.to === null ? (' NOW') : <Moment format='DD/MM/YYYY'>{edu.to}</Moment>}
            </td>
            <td>
                <buttono onClick={() => deleteEducation(edu._id)} className='btn btn-danger'>Delete</buttono>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">Education Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>School</th>
                        <th className="hide-sm">Degree</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </Fragment>
    );
};

Education.propTypes = {
    education: PropTypes.array.isRequired,
};

export default connect(null,{ deleteEducation })(Education);
