import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import content from "../contexts/content";
import PropTypes from "prop-types";

function LoginPage({ loginSuccess }) {
  const {locale} = React.useContext(content);

  const onLoginHandler = async ({ email, password, }) => {
    const { error, data, } = await login({ email, password, });
    if (!error) {
      loginSuccess(data);
    }
  }

  return(
    <section className="register-page">
      <h2>{locale === 'id' ? 'Yuk, login untuk menggunakan aplikasi.' : 'Log in to use the application.'}</h2>
      <LoginInput login={onLoginHandler}/>
      <p>
        {locale === 'id' ? 'Belum punya akun? ' : 'Don\'t have an account? '} 
        <Link to='/register'>{locale === 'id' ? 'Daftar sekarang!' : 'Register now!'}</Link>
      </p>
    </section>
  )
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired, 
}

export default LoginPage;