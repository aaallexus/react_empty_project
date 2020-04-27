import { connect } from 'react-redux'
import UserCard from '../components/Users/UserCard'
import {createUser, updateUser} from '../actions/users'

const mapStateToProps = function(state, ownProps)
{
    return ({
        main:state.main,
    })
}
const mapDispatchToProps = (dispatch,ownProps) => ({
   createUser: (data) => dispatch(createUser(data)),
   updateUser: (id,data) => dispatch(updateUser(id,data))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCard)

