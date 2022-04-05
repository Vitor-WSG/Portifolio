import {Container} from './style'
import IncomeImg from '../../assets/income.svg' //importando a imagem e guardando em uma variavel
import OutcomeImg from '../../assets/outcome.svg' //importando a imagem e guardadndo em uma variavel
import Total from '../../assets/total.svg'
export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas"/>
                </header>
                <strong>RS1000,00</strong>          
            </div>

            <div className='redlight-background'>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="Saidas"/>
                </header>
                <strong>- RS500,00</strong>          
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={Total} alt="Total"/>
                </header>
                <strong>RS500,00</strong>          
            </div>
        </Container>
    )
}