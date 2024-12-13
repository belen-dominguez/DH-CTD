export type UserDetails = {
  dni: number;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  phone: string;
};

export const userDetailsKeyTranslation = {
  dni: "Documento",
  email: "Correo",
  firstname: "Nombre",
  lastname: "Apellido",
  password: "Contraseña",
  phone: "Teléfono",
};

type UserDetailsKeys =
  | "dni"
  | "email"
  | "firstname"
  | "lastname"
  | "password"
  | "phone";
type UserDetailsKeyTypes = Record<UserDetailsKeys, string>;

export const userDetailsKeyTypes: UserDetailsKeyTypes = {
  dni: "number",
  email: "email",
  firstname: "string",
  lastname: "string",
  password: "password",
  phone: "string",
};
