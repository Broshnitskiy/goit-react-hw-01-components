import PropTypes from 'prop-types';
import { ListItem, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline}) => (
<ListItem >
  <Status isOnline={isOnline}></Status>
  <img src={avatar} alt="User avatar" width="85" />
  <p >{name}</p>
</ListItem>
)

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}