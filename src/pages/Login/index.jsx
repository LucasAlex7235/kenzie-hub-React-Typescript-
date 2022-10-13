import { Conatiner, ContainerPassword, FormLogin } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

const validationSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido!"),
  password: yup.string().required("Senha obrigarória"),
});

export const LoginUser = () => {
  const { eye, eyePassword, onSubmitForm } = useContext(AuthContext);
  // const { onSubmitForm } = useContext(AuthContext);
  // const [eye, setEye] = useState(true);

  // const eyePassword = () => {
  //   eye ? setEye(false) : setEye(true);
  // };

  window.localStorage.clear();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // const navigate = useNavigate();

  // const onSubmitForm = (data) => {
  //   ApiBase.post("/sessions", data)
  //     .then((res) => {
  //       setTimeout(() => {
  //         navigate("/dashboard");
  //         window.location.reload();
  //       }, 200);
  //       window.localStorage.setItem("@KenzieHub:", res.data.token);
  //     })
  //     .catch((err) => {
  //       err &&
  //         toast.error("Email ou senha incorretos!", {
  //           position: "top-right",
  //           autoClose: 1500,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //         });
  //     });
  // };

  return (
    <Conatiner>
      <h1>Kenzie Hub</h1>
      <FormLogin onSubmit={handleSubmit(onSubmitForm)}>
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email?.message && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Senha</label>

          <main>
            <input
              type={eye ? "password" : "text"}
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <p onClick={eyePassword}>
              {eye == true ? <AiFillEye /> : <AiFillEyeInvisible />}
            </p>
          </main>

          {errors.password?.message && <span>{errors.password.message}</span>}
        </div>

        <button type="submit">Entrar</button>
        <span>Ainda não possui uma conta?</span>
        {/* <button type="submit">Cadastre-se</button>  */}
        <Link to="/register">Cadastra-se</Link>
      </FormLogin>
      <ToastContainer />
    </Conatiner>
  );
};
