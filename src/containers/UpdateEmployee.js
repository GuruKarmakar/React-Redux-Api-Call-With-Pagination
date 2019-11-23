import React, { Component } from 'react';

class UpdateEmplyee extends Component {
    render() {
        return (
            <div className="card" style={{ padding: 40 }}>
                <form>
                    <div>
                        <label>Name</label>
                        <input placeholder="Enter your name" type="text" className="validate" />
                    </div>
                    <div>
                        <label>Age</label>
                        <input placeholder="Enter your age" type="text" className="validate" />
                    </div>
                    <div>
                        <label>Sallary</label>
                        <input placeholder="What is your monthly sallary?" type="number" className="validate" />
                    </div>
                </form>
                <button className="waves-effect waves-light btn purple accent-3">Update</button>
            </div>
        );
    }
}

export default UpdateEmplyee;