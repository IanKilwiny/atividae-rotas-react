import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {

    const StyleCard = styled.section`
        width: 250px;
        height: 300px;
        padding: 5px;
        background-color: #e9e7e7;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & .img-product-games{
            width: 100%;
            height: 60%;
            background-image: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBcCrgSQCvivxonBxnAmnPbtEPKrOOSlOix9PmLALbJqY5e-gfIdFtSyBdLRZZxWsOL83ihH4mWM4z1V1drjSwvwXAH_JmRUievhYoG6KtxQjEdvQ-YuzASdR0S19tWPjvxlBc1y-_sNiQgildcwohR-_ZYZdPPMryq8F8fGxtQG5C4mRrfChgtab-aQ/w640-h332/nintendo-switch-jogos-fisicos.jpg");
            background-size: cover;
        }

        & .img-product-consoles{
            width: 100%;
            height: 60%;
            background-image: url("https://buscageral.com/uploads/content/image/93498/Design_sem_nome__4_.jpg");
            background-size: cover;
        }

        & .img-product-artigos{
            width: 100%;
            height: 60%;
            background-image: url("https://imgs.search.brave.com/D-OhojVEtUYqe7DItqc_yTGVX4K1enTmIRFTz9rNTus/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tb250/YXJ1bW5lZ29jaW8u/Y29tLmJyL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA0L3By/b2R1dG9zLWdlZWst/ZS1uZXJkLW5vLWF0/YWNhZG8uanBn");
            background-size: cover;
        }
    `
    return (
        <>
            <main>
                <section className="products">
                    <StyleCard>
                        <div className="img-product-games">
                        </div>
                        <div className="titulo">
                            <h3>Games</h3>
                        </div>
                        <Link to={"/product/games"}>Acessar</Link>
                    </StyleCard>


                    <StyleCard>
                        <div className="img-product-consoles">
                            
                        </div>
                        <div className="titulo">
                            <h3>Consoles</h3>
                        </div>

                      
                        <Link to={"/product/consoles"}>Acessar</Link>
                   
                    </StyleCard>

                    <StyleCard>
                        <div className="img-product-artigos">
                            
                        </div>
                        <div className="titulo">
                            <h3>Artigos Nerd</h3>
                        </div>

                        <Link to={"/product/artigos"}>Acessar</Link>
                    </StyleCard>

                </section>

            </main>
        </>
    );
}

export default Home;