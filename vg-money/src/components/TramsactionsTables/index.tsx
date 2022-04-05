import {Container} from'./style'
export function TransactionsTables(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvovimento de website</td>
                        <td className='deposit'>RS12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>04/04/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className='withdraw'>- RS2.000,00</td>
                        <td>Casa</td>
                        <td>04/04/2022</td>
                    </tr>
                    <tr>
                        <td>Ferramentas</td>
                        <td className='withdraw'>- RS12.000,00</td>
                        <td>Acessórios</td>
                        <td>04/04/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )

}