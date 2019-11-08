import { useState } from 'react';

const AddProductFrom = (props) => {
    const [name, setname] = useState('');
    const [Descrition, setDescrition] = useState('');
    const [Price, setPrice] = useState(0);
    const [Quanty, setQuanty] = useState(0);
    const [ImageUrl, setImageUrl] = useState('');

    const heandleCreate = (e) => {
        props.onCreate({ name, Descrition, Price, Quanty, ImageUrl });
    }

    return (
        <div className='add-prodct-from'>
            <label>
                <p>name</p>
                <input type='text' placeholder='name' onChange={(e) => setname(e.target.value)} />
            </label>
            <label>
                <p>Descrition</p>
                <textarea onChange={(e) => setDescrition(e.target.value)} />
            </label>
            <label>
                <p>Price</p>
                <input type='Number' onChange={(e) => setPrice(+e.target.value)} />
            </label>
            <label>
                <p>Quanty</p>
                <input type='Number' onChange={(e) => setQuanty(+e.target.value)} />
            </label>
            <label>
                <p>ImageUrl</p>
                <input type='file' />
            </label>
            <div>
                <button onClick={heandleCreate}>Create</button>
            </div>
            <style jsx>{`
                .add-prodct-from{
                    border: 1px solid #FFB5C5;
                    max-width: 300px;
                    padding: 10px;
                    border-radius: 8px;
                }
                button{
                   background-color: pink;
                   border-radius: 4px;
                   border:1px solid #FFB5C5;
                   padding: 4px;
                   
                }
                p{
                    margin: 0 0 5px 0;
                }
                input{
                    margin-bottom: 5px;
                    border-radius: 4px;
                    border:1px solid #FFB5C5;
                    padding: 4px ;
                    min-width: 200px;
                }
                textarea{
                     margin-bottom: 5px;
                    border-radius:4px;
                    border:1px solid #FFB5C5;
                    padding: 4px ;
                    min-width: 200px;

                }
                `}</style>
        </div>
    )
}
export default AddProductFrom;