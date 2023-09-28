import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Registro() {
  const [alert, setAlert] = useState({ type: '', message: '' });

  return (
    <div>
      <h1>Crea una Cuenta</h1>
      <div className="social-icons-container">
        <SocialButton icon={faFacebook} url="https://www.facebook.com/" />
        <SocialButton icon={faGithub} url="https://www.github.com/" />
        <SocialButton icon={faLinkedin} url="https://www.linkedin.com/" />
      </div>
      <p>o usa tu email para registrarte</p>
      <Formulario setAlert={setAlert} />
      <Alert type={alert.type} message={alert.message} />
    </div>
  );
}

export default Registro;
