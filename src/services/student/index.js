import { client } from "../http-base";

export const getStudent = (id) => client.get(`alunos/${id}`);
