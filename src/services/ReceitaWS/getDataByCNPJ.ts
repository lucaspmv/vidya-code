import axios from 'axios';

import { RECEITAWS_TOKEN } from '@env';

const getDataByCNPJ = async (cnpj: string): Promise<any> => {
  const { data } = await axios.get(
    `https://receitaws.com.br/v1/cnpj/${cnpj.replace(/\D+/g, '')}`,
    {
      headers: { Authorization: `Bearer ${RECEITAWS_TOKEN}` },
    },
  );

  return data;
};

export { getDataByCNPJ };
