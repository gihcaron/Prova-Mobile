//AMANDA

export function Card({title, description, image}){
    return(
        <div style={styles.container}>
            <h2 style={styles.titulo}>{title}</h2>
            <p style={styles.texto}>{description}</p>
            <Image source={require('../assets/4.jpg')}
            style={styles.italy}/>
        </div>
    );
}

const styles ={ 
    container: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: 'black', 
    },
};