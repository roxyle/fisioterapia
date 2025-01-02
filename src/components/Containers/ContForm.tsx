import React, { useState, ChangeEvent, FormEvent, FocusEvent } from 'react';

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

  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateField = (name: string, value: string): string =>
    name === 'name'
      ? value.trim()
        ? ''
        : 'Il nome è obbligatorio.'
      : name === 'email'
      ? !value.trim()
        ? 'L’email è obbligatoria.'
        : !validateEmail(value)
        ? 'Inserisci un indirizzo email valido.'
        : ''
      : name === 'phone'
      ? !value.trim()
        ? 'Il numero di telefono è obbligatorio.'
        : !/^\d{10}$/.test(value)
        ? 'Inserisci un numero di telefono valido (10 cifre).'
        : ''
      : name === 'message'
      ? value.trim()
        ? ''
        : 'Il messaggio è obbligatorio.'
      : '';
  

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmissionStatus('Form inviato con successo!');
          setFormData({ name: '', email: '', phone: '', message: '' }); // Reset del form
          setErrors({ name: '', email: '', phone: '', message: '' }); // Reset degli errori
        } else {
          setSubmissionStatus('Si è verificato un errore durante l’invio del form.');
        }
      } catch (error) {
        console.error('Errore durante l’invio del form:', error);
        setSubmissionStatus('Errore di connessione. Riprova più tardi.');
      }
    }
  };

  return (
    <div className="flex flex-col rounded-xl w-full py-3">
      <h2 id="form" className="rounded-t-xl font-bold text-4xl title">
        Compila il Form per essere ricontattato:
      </h2>
      <div
        className="flex flex-col items-center justify-center
        bg-black bg-opacity-10 rounded-b-xl py-3">
        <div className="text-black form-wrapper flex flex-col justify-center items-center p-3">
          <form onSubmit={handleSubmit} className="py-2">
            <label>
              <span>* Nome e Cognome:</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
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
                onBlur={handleBlur}
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
                onBlur={handleBlur}
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
                onBlur={handleBlur}
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

          {submissionStatus && (
            <p
              className={`mt-4 text-sm ${
                submissionStatus.includes('successo') ? 'text-green-500 bg-black' : 'text-red-500 bg-black'
              }`}
            >
              {submissionStatus}
            </p>
          )}

          <div className="flex flex-col items-center justify-center p-2">
            <p> Se vuoi inviarci una mail, puoi scriverci a: brunonero74@gmail.com </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContForm;
