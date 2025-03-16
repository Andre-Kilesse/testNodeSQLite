import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { inAxios } from '../config_axios';

const InclusaoLivros = () => {
    const { register, handleSubmit, reset } = useForm();

    const [aviso, setAviso] = useState('')

    const salvar = async (campos) => {
        try{
            const response = await inAxios.post('livros', campos)
            setAviso(`Ok! Livro cadastrado com código ${response.data.id}`)
        }catch (error){
            setAviso(`Erro... Livro não cadastrado: ${error}`)
        }

        setTimeout(() => {
            setAviso('')
        }, 5000)

        reset({titulo: '', autor: '', foto: '', ano: '', preco: ''})
    };

    return (
        <form onSubmit={handleSubmit(salvar)} className="container">
            <h2 className="fst-italic mt-3">Inclusão</h2>

            <div className="form-group mt-2">
                <label htmlFor="titulo">Título:</label>
                <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    {...register("titulo", { required: true })}
                    autoFocus
                />
            </div>

            <div className="form-group mt-2">
                <label htmlFor="autor">Autor:</label>
                <input
                    type="text"
                    className="form-control"
                    id="autor"
                    {...register("autor", { required: true })}
                />
            </div>

            <div className="form-group mt-2">
                <label htmlFor="foto">URL da Foto:</label>
                <input
                    type="url"
                    className="form-control"
                    id="foto"
                    {...register("foto", { required: true })}
                />
            </div>

            <div className="row mt-2">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="ano">Ano de Publicação:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="ano"
                            {...register("ano", { required: true })}
                        />
                    </div>
                </div>

                <div className="col-sm-8">
                    <div className="form-group">
                        <label htmlFor="preco">Preço R$:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="preco"
                            step={0.01}
                            {...register("preco", { required: true })}
                        />
                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">Enviar</button>
            <button type="reset" className="btn btn-danger mt-3 ms-3">Limpar</button>

            <div className={aviso.startsWith('Ok!') ? 'alert alert-success mt-2' : aviso.startsWith('Erro') ? 'alert-danger mt-2' : ''}>{aviso}</div>
        </form>

    );
};

export default InclusaoLivros;
