import PropTypes from 'prop-types';
import {Container, Box, StatsList} from './Profile.styled'

export const Profile = ({ user }) => {
  const {
    username,
    tag,
    location,
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats,
  } = user;
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
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{stats.likes}</span>
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