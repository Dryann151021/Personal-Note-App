import React from "react";
import { Link, useNavigate, } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";
import content from "../contexts/content";

function RegisterPage() {
  const {locale} = React.useContext(content);

  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return(
    <section className="register-page">
      <h2>{locale === 'id' ? 'Isi form untuk mendaftarkan akun' : 'Fill the form to register an account.'}</h2>
      <RegisterInput register={onRegisterHandler}/>
      <p>
        {locale === 'id' ? 'Sudah punya akun? ' : 'Have an account already? '}
        <Link to='/'>{locale === 'id' ? 'Masuk' : 'Log in'}</Link>
      </p>
    </section>
  )
}

export default RegisterPage;