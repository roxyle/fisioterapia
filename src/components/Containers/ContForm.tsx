import React, { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: formData.name.trim()
        ? ''
        : 'Il nome è obbligatorio.',
      email: !formData.email.trim()
        ? 'L’email è obbligatoria.'
        : !validateEmail(formData.email)
        ? 'Inserisci un indirizzo email valido.'
        : '',
      phone: !formData.phone.trim()
        ? 'Il numero di telefono è obbligatorio.'
        : !/^\d{10}$/.test(formData.phone)
        ? 'Inserisci un numero di telefono valido (10 cifre).'
        : '',
      message: formData.message.trim()
        ? ''
        : 'Il messaggio è obbligatorio.',
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    validateForm() && alert('Form inviato con successo!');
  };

  return (
    <div className="rounded-xl w-full py-3">
      <h2 id="form" className="rounded-t-xl font-bold text-4xl title">
        Compila il Form per essere ricontattato:
      </h2>
      <div
        className="flex flex-col items-center justify-center
        bg-black bg-opacity-10 rounded-b-xl py-5"
      >
        <div className="text-black form-wrapper flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label>
              <span>* Nome e Cognome:</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="es. Mario Rossi"
                className="border border-gray-300 p-2 rounded"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </label>
            <label>
              <span>* E-mail:</span>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="es. mario.rossi@dominio.com"
                className="border border-gray-300 p-2 rounded"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </label>
            <label>
              <span>* Telefono:</span>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="es. 3473288921"
                className="border border-gray-300 p-2 rounded"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </label>
            <label>
              <span>* Messaggio:</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-48 max-h-48 p-3 border border-gray-300 rounded"
                cols={60}
                rows={10}
                placeholder="Scrivi qui il tuo messaggio"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Invia
            </button>
          </form>
        </div>
        <p> Se vuoi inviarci una mail, puoi scriverci a: brunonero74@gmail.com </p>
      </div>
    </div>
  );
};

export default ContForm;
