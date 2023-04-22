import {
  Information,
  InformationLink,
  InformationList,
  Title
} from 'page/MoviesItem/MoviesItem.styled';

export function MovieInformation() {
  return (
    <Information>
      <Title>More Information</Title>
      <InformationList>
        <li>
          <InformationLink to={'cast'}>Cast</InformationLink>
        </li>
        <li>
          <InformationLink to={'reviews'}>Reviews</InformationLink>
        </li>
      </InformationList>
    </Information>
  );
}
