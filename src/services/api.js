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
  let definition = response.data[0].xml.split("<def>")[1].split("</def>")[0];

  if(definition.split("<cit")[1] !== undefined){
    definition = await definition.split("<cit")[1].split("</cit>")[0];
  }
  if(definition.split("<term>")[0] !== undefined){
    definition = await definition.split("<term>")[0].split("</term>")[0];
  }

  return await definition;
}
