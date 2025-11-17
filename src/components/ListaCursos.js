import React, { useState, useEffect } from 'react';

function ListaCursos(){
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchCursos = async () => {
            try{
                const response = await fetch('https://drivetech-api.onrender.com/api/cursos');
                const data = await response.json();
                setCursos(data); // Salva os dados no estado
                setLoading(false); // Termina o carregamento
            }catch (error) {
                console.error('Erro ao buscar cursos:', error);
                setLoading(false);
            }
        };

        fetchCursos();
    }, []);

    if(loading) {
        return<p>Carregando Cursos...</p>;
    }

    return(
        <div className="lista-de-cursos-container">
      <h2>Nossos Cursos</h2>
      <ul className="cursos-lista">
        {cursos.map(curso => (
          <li key={curso.id} className="curso-item">
            <strong>{curso.nome}</strong>
            <p>Duração: {curso.duracao}</p>
            <p>Preço: {curso.preco}</p>
          </li>
        ))}
      </ul>
    </div>
    );
}

export default ListaCursos;