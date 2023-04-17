import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import CardShop from "../../common/shopsDos/cardShop/CardShop";
import CardActivities from '../../common/CardActivities/CardActivities';
import Reviews from '../../common/Reviews/Reviews';
import Redes from '../../common/redesSociales/redes/Redes';


//importamos el array que simula los datos que llegan del back-componente redes sociales
import { arrayRedes } from './arrayRedes';

//importamos elementos que simula los datos que llegan del estado global
import { description, name, image } from './descriptions';

import style from './AventurasDelCaribe.module.css';

export default function AventurasDelCaribe() {

    const [ aventuras, setAventuras ] = useState([]);
    useEffect(() => {
        setAventuras(require('./mock_aventuras.json').response);
    },[]);

    return (
        <>
            <div className={style.page}>
                <section className={style.titleSection}>
                    <CardShop description={description} name={name} image={image}/>    
                </section>
                
                
                <div className={style.contRedes}>
                    <section className={style.ubicacionSection}>
                        <h2 className={style.ubicacion}>Nuestra Ubicación</h2>
                        <img className={style.map} src="https://i.blogs.es/ade34e/google-maps-portada-trafico/840_560.jpg" alt="mapa"/>
                    </section>
                    <section className={style.contactSection}>
                        <h2 className={style.contact}>Contáctanos</h2>  
                        <div className={style.contactInfo}>
                            <p className={style.contactInfo}>Teléfono: 123456789</p>    
                            <p className={style.contactInfo}>Correo: matina@gmail.com </p>
                            <p className={style.contactInfo}>Dirección: Calle 123 # 45 - 67</p>
                            <p className={style.contactInfo}>Horario: 8:00 am - 6:00 pm</p>
                        </div>
                    </section>
                </div>
            </div>

            <div className="row">
            {
                aventuras?.map((aventura) => {
                    return (
                        <CardActivities
                            key={aventura.idProduct}
                            image={aventura.image}
                            name={aventura.name}
                            description={aventura.description}
                            price={aventura.price}
                        />
                    )
                })
            }
            </div>
            

            <Reviews memberId={1} />   
            
            <section className={style.Cajaredes}>
                <Redes socialmedia={arrayRedes}/>
            </section>
            <h2>Ir a Artesanías Mar y Luna</h2>
            <Link to="/artesaniasMarYLuna">
                <button type="button" className="btn btn-primary">Vamos!</button>
            </Link>       
        </>
    );
};