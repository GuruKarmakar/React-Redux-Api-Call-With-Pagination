import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchEmplyee,deleteEmployee } from './../store/actions/employeeAction'
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
class Employee extends Component {
    state = {
        currentPage: 1,
        postPerPage: 10
    }

    _peginate = (pageNumber) => {
        this.setState({ currentPage: pageNumber })
    }

    componentDidMount() {
        this.props.fetchEmplyees()
    }
    render() {
        const { currentPage, postPerPage } = this.state
        const indexOflast = currentPage * postPerPage
        const indexOfFirst = indexOflast - postPerPage
        const currentPost = this.props.data.slice(indexOfFirst, indexOflast)

        return (
            <div>
                <Posts
                    posts={currentPost}
                    pending={this.props.pending}
                    deleteEmplyee={this.props.deleteEmployee} />
                {/* sorry ! the data is too mcuh so i divided by 40 */}
                <Pagination
                    postPerPage={postPerPage}
                    totalPost={this.props.data.length / 40}
                    currentPage={currentPage}
                    peginate={this._peginate}

                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.employeeReducer.data,
        pending: state.employeeReducer.pending
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEmplyees : () => dispatch(fetchEmplyee()),
        deleteEmployee : (id) => dispatch(deleteEmployee(id)) 
        // deleteEmployee : (id) => dispatch({type:'REMOVE_EMPLOYEE',payload:id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Employee);