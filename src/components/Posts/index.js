import React from 'react';
import { Link } from 'react-router-dom'
const Posts = ({ posts, pending ,deleteEmplyee}) => {
    return (
        <div style={{ padding: 10, maxHeight: 400, overflow: 'scroll' }}>
            {
                pending ? <h5 className="center">Loading...</h5> :

            <table className="striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Employee name</th>
                        <th>Age</th>
                        <th>Sallary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.employee_name}</td>
                                <td>{post.employee_age}</td>
                                <td>{post.employee_salary}</td>
                                <td>
                                    <Link to="/update">
                                        <i className="material-icons" style={{ cursor: 'pointer', color: 'blue' }}>create</i>
                                    </Link>
                                    <i onClick={() => deleteEmplyee(post.id)} className="material-icons" style={{ cursor: 'pointer', color: 'red' }}>delete</i>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            }
        </div>
    );
}

export default Posts;