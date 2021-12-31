import PropTypes from 'prop-types';
import {Container, Box, StatsList} from './Profile.styled'

export const Profile = ({ username, tag, location, avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png', stats }) => {
 
  return (
    <Container >
      <Box >
        <img src={avatar} alt="User avatar" width={300}/>
        <p >{username}</p>
        <p >@{tag}</p>
        <p >{location}</p>
      </Box>

      <StatsList >
        <li>
          <span >Followers </span>
          <span >{stats.followers}</span>
        </li>
        <li>
          <span >Views </span>
          <span >{stats.views}</span>
        </li>
        <li>
          <span >Likes </span>
          <span >{stats.likes}</span>
        </li>
      </StatsList>
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
  }),
};