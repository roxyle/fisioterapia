import React from 'react'

const ContForm = () => {
  return (
<div className='bg-gradient-to-t from-white to-90% rounded-xl w-full py-3'>
    <h2 id='form' className='rounded-t-xl font-bold text-4xl title'> Compila il Form per essere ricontattato: </h2>    
    <div className='flex flex-col items-center justify-center
        bg-black bg-opacity-10 rounded-b-xl py-5'>
        <div className=' text-black form-wrapper flex flex-col justify-center items-center'>
            <form>
                <label>
                    <span>* Nome e Cognome:</span>
                    <input type='text' placeholder='es. Mario Rossi'/>
                </label>
                <label>
                    <span>* E-mail:</span>
                    <input type='text' placeholder='es. mario.rossi@dominio.com'/>
                </label>
                <label>
                    <span>* Telefono:</span>
                    <input type='text' placeholder='es. 3473288921'/>
                </label>
                <label>
                    <span>* Messaggio:</span>
                    <textarea 
                    className='min-h-48 max-h-48'
                    cols={60} rows={10} 
                    placeholder='Scrivi qui il tuo messaggio'></textarea>
                </label>
                
            </form>
        </div>
    </div>
</div>
  )
}

export default ContForm