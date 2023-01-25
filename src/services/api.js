import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.dicionario-aberto.net',
});

export async function getWord(){
  const response = await api.get("/random");
  const word = response.data.word;

  return await word;
}

export async function getDefinition(word){
  const response = await api.get(`/word/${word}`);
  const definition = response.data[0].xml.split("<def>")[1].split("</def>")[0];

  if(definition.split("").includes("_")){
    return `Relativo à ${definition.split("_")[1].split("_")[0]}.`;
  }

  return await definition;
}
