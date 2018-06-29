import React from 'react';
import { connect } from 'react-redux';
import { goalRef } from "../firebase";

class GoalList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        goalRef.on('value', snap => {
            snap.forEach(goal => {
                let goalObject = goal.val();
            })
        })
    }

    render() {
        return(
            <ul className="goal_list">

            </ul>
        )
    }
}

export default GoalList;

// function mapStateToProps(state) {
//
//     return {
//
//     }
// }
//
// export default connect(mapStateToProps, null)(GoalList);