// UserProfile.jsx
import React from 'react';

class UserProfile extends React.Component {
    render() {
        return (
            <div className="container mt-5 mb-5">
                <div className="card shadow">
                    <div className="card-header bg-primary text-white">
                        <h2 className="m-0">Hello World</h2>
                    </div>
                    <div className="card-body">
                        <p className="lead">This is a Bootstrap-styled component</p>
                        <button className="btn btn-success">Example Button</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;