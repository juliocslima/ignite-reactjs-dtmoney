import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {

  useEffect(() => {
    api.get('/transactions')
      .then(response => console.log(response.data))
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>01/12/2021</td>
          </tr>
          <tr>
            <td>Alugue</td>
            <td className="withdraw">-R$ 1.200,00</td>
            <td>Desenvolvimento</td>
            <td>01/12/2021</td>
          </tr>
          <tr>
            <td>IFood</td>
            <td className="withdraw">-R$ 120,00</td>
            <td>Desenvolvimento</td>
            <td>01/12/2021</td>
          </tr>
          <tr>
            <td>Cashback</td>
            <td className="deposit">R$ 500,00</td>
            <td>Desenvolvimento</td>
            <td>01/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}