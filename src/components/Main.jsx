import React from 'react';
import ItemCount from './ItemCount';

const Main = () => {
    let athlonIMG = './img/athlon200ge.jpg';
    let athlonTitle = 'Athlon 200ge';
    let athlonSocket = 'AM4';
    let athlonDescr = 'El AMD Athlon 200GE es un procesador de gama baja basado en Raven Ridge, pero que da un rendimiento muy bueno para uso de ofimática, emuladores y navegación por la red. También lo vemos muy interesante para centros multimedia (HTPC) de bajo coste por su interesante tarjeta gráfica VEGA integrada.';
  
    const Athlon = { id: 1, img: athlonIMG, title: athlonTitle, socket: athlonSocket, descr: athlonDescr };
    
    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 offset-md-2'>
                        <img src={Athlon.img} alt={Athlon.title} className='img-fluid'/>
                    </div>
                    <div className='col-md-4'>
                        <h2>{Athlon.title}</h2>

                        <p>{Athlon.socket}</p>

                        <p>{Athlon.descr}</p>

                        <ItemCount stock={5} initial={1} onAdd={0} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;
