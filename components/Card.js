//AMANDA

export function Card({title, description, Image}){
    return(
        <div style={styles.container}>
            <h2 style={styles.titulo}>{title}</h2>
            <p style={styles.texto}>{description}</p> 
        </div>
    );
}

const styles ={ 
    container: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: 'red', 
        
    },
};