import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (

    <div className="contacto_container">
      <div className="div_in_div">
        <h1 className="main-title">Contacto</h1>
        <form className="formulario" onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
            <button className="enviar" type="submit">Enviar</button>
        </form>
      </div>
    </div>

  )
}

export default Contacto