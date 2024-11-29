import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Products = () => {
    const {type} = useParams()
    const products = {
        "consoles":[
            {
                "name":"Playstation 4",
                "price": 1849
            },
            {
                "name":"Xbox One S",
                "price": 1500
            },

            {
                "name":"Xbox Series S",
                "price":2250
            },

            {
                "name":"Xbox Series X",
                "price":4200
            },

            {
                "name":"Playstation 5",
                "price":5000
            },
          
        ],

        "games":[
            {
                "name":"Grand Theft Auto V",
                "price":75
            },

            {
                "name":"God Of War 2018",
                "price":105
            }
        ],

        "artigos":[
            {
                "name":"Garrafa do Harry Potter",
                "price":75
            },
            {
                "name":"Anel da Akatsuki",
                "price":25
            }
        ]
    }
    const StyleButtom = styled.section`
        width:70px;
        height: 25px;
        color: white;
        font-weight: bold;
        background-color: blue;
        margin-top: 30px;
        margin-left: 30px;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        & span{
            color: white;
        }
    `
    const StyleCard = styled.section`
        width: 200px;
        height: 200px;
        background-color: #d3d3d3;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        padding: 5px;
        margin-left: 30px;

        & button{
            width:100px;
            height:30px;
            border:none;
            background: blue;
            color:white;
            font-weight: bold;
            border-radius: 10px;
            cursor: pointer;
        }

        & p{
            text-transform: uppercase;
            font-size: 10px;
        }
    `
    return (
        <>
      
            <main>
                <StyleButtom>
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                </StyleButtom>

                <section className="list-products">
                    {
                        products[type].map((product)=>(
                          
                                <StyleCard>
                                    <section>
                                        <h3>{`${product.name}`}</h3>
                                    </section>
                                    <p>{type}</p>
                                    <h4>{`R$${product.price}`}</h4>
                                    <button type="submit">Comprar</button>
                                </StyleCard>
                           
                        ))
                    }
                 </section>

            </main>
    </>);
}
 
export default Products;