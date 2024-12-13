import { Input } from "../../components/form/input/Input";
import { PrimaryButton } from "../../components/buttons/primary-button/PrimaryButton";

const INPUTS = [
  {
    type: "text",
    placeholder: "Nombre",
    className: "w-[50%]",
  },
  {
    type: "text",
    placeholder: "Apellido",
    className: "w-[50%]",
  },
  {
    type: "number",
    placeholder: "DNI",
    className: "w-[50%]",
  },
  {
    type: "email",
    placeholder: "Correo",
    className: "w-[50%]",
  },
  {
    type: "password",
    placeholder: "Contraseña",
    className: "w-[50%]",
  },
  {
    type: "password",
    placeholder: "Confirmar contraseña",
    className: "w-[50%]",
  },
  {
    type: "number",
    placeholder: "Telefono",
    className: "w-[50%]",
  },
];
export default function Register() {
  return (
    <section className="h-dvh relative">
      <div className="flex justify-center items-center flex-col py-[40px] px-[45px] lg:py-[92px] lg:px-[100px]">
        <h1 className="heading-2 mb-[40px]">Crear cuenta</h1>
        <form>
          {INPUTS.reduce((rows, input, index) => {
            if (index % 2 === 0) {
              rows.push([input]);
            } else {
              rows[rows.length - 1].push(input);
            }
            return rows;
          }, []).map((row, rowIndex) => (
            <>
              {row.some((input) => input.placeholder === "Contraseña") && (
                <div>
                  <p className="mb-[15px]">
                    Usa entre 6 y 20 carácteres (debe contener al menos 1
                    carácter especial, una mayúscula y un número)
                  </p>
                </div>
              )}
              <div
                key={rowIndex}
                className="flex flex-col gap-[20px] lg:flex-row lg:gap-[57px] xxl:gap-[62px] lg:mb-[40px]"
              >
                {row.map((input, inputIndex) => (
                  <Input
                    key={inputIndex}
                    type={input.type}
                    placeholder={input.placeholder}
                    className="w-[50%]"
                  />
                ))}
                {row.some((input) => input.placeholder === "Telefono") && (
                  <PrimaryButton
                    type="submit"
                    label="Crear cuenta"
                    selectedTheme="green"
                    className="w-[50%]"
                  />
                )}
              </div>
            </>
          ))}
        </form>
      </div>
    </section>
  );
}
