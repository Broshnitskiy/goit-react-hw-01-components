import PropTypes from 'prop-types';
import{Section, ListItem, Title} from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
  return (
    <Section >
      {title && <Title>{title}</Title>}

      <ul >
        {stats.map(stat => (
          <ListItem key={stat.id}>
            <span >{stat.label} </span>
            <span >{stat.percentage}%</span>
          </ListItem>
        ))}
      </ul>
    </Section>
  );
};


Statistics.propTypes = {
    title:PropTypes.string,
   stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })
  ).isRequired,
};
