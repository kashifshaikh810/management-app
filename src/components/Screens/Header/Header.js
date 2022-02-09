import React, {useState} from 'react';
import HeaderMarkup from './HeaderMarkup';

const Header = props => {
  const [focus, setFocus] = useState(false);
  return <HeaderMarkup {...props} focus={focus} setFocus={setFocus} />;
};

export default Header;
