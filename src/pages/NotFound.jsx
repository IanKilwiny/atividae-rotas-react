import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
    const StyleNotFound = styled.section`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        & .conteiner h1{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 50px;
            color: blue;
        }



    `
    return (
        <>
            <StyleNotFound>
                <div className="conteiner">
                    <h1>Error 400. Not Found</h1>
                    <p>
                        Página não encontrada. Retorne para a página <Link to="/">Home</Link>
                    </p>
                </div>
                
            </StyleNotFound>
        </>
    );
}
 
export default NotFound;