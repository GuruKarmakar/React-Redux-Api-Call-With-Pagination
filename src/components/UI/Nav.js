import React from 'react';

const Nav = () => {
    return (
        <nav className="nav-extended purple accent-3">
            <div className="nav-content">
                <h4 className="center" style={{ padding: 10 }} >React & Redux</h4>
                <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal pulse">
                    <i className="material-icons">add</i>
                </a>
            </div>
        </nav>
    );
}

export default Nav;