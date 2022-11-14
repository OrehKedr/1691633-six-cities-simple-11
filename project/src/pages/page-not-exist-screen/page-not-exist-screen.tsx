import { Link } from 'react-router-dom';

function PageNotExist(): JSX.Element {
  return (
    <div style={{
      width: 1144,
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: 58,
      paddingRight: 58
    }}
    >
      <p>404 Not Found</p>
      <Link to='/'>Перейти на главную &#8594;</Link>
    </div>
  );
}

export default PageNotExist;
