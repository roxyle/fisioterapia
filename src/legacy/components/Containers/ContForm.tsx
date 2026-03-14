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
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false); // Stato per la checkbox
  const [isPrivacyPopupOpen, setIsPrivacyPopupOpen] = useState(false); // Stato per il popup

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateField = (name: string, value: string): string =>
    name === 'name'
      ? value.trim()
        ? ''
        : 'Il nome è obbligatorio.'
      : name === 'email'
      ? !value.trim()
        ? "L'email è obbligatoria."
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

    if (validateForm() && isPrivacyChecked) {
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
          setIsPrivacyChecked(false); // Reset checkbox
        } else {
          setSubmissionStatus("Si è verificato un errore durante l'invio del form.");
        }
      } catch (error) {
        console.error("Errore durante l'invio del form:", error);
        setSubmissionStatus('Errore di connessione. Riprova più tardi.');
      }
    }
  };

  return (
    
    <div className="flex flex-col rounded-xl w-full py-3">
      <h2 id="form" className="rounded-t-xl font-bold text-4xl title">
        Compila il Form per essere ricontattato:
      </h2>

            {/* Popup Informativa Privacy */}
            {isPrivacyPopupOpen && (
        <div className="inset-0 flex items-center justify-center z-50 h-[200px] m-10 p-5">
          <div className="bg-white p-6 rounded-lg text-black text-pretty shadow-md shadow-black">
            <h2 className="text-xl font-bold mb-4">Informativa Privacy</h2>
            {/* <p className="text-sm">
            Informativa privacy ai sensi degli artt. 13-14 del Regolamento Europeo “Privacy” (GDPR)
I dati personali da Lei inseriti, sono trattati da Studio di fisioterapia - Via Caduti sul Lavoro 38 - 81100 Caserta (CE) - +393392476524 in qualità di Titolare, per finalità connesse alla fornitura dei servizi da Lei richiesti (a titolo esemplificativo: richiedere informazioni, registrarsi al sito per ricevere vantaggi e offerte, ottenere preventivi, effettuare pagamenti, acquistare beni e riceverli presso un domicilio da Lei indicato, effettuare una prenotazione, scambiare documenti).

Inoltre, i dati da Lei forniti, potrebbero essere trattati, solo su Suo esplicito consenso, al fine di inviarLe comunicazioni di natura commerciale via email o sms relativamente ai servizi offerti dal Titolare.

Nel primo caso, la base giuridica del trattamento è l'esecuzione di un accordo; nel secondo caso è il consenso. I trattamenti avverranno con modalità elettroniche e verranno messi a disposizione delle terze parti (Responsabili Esterni del trattamento) nell’ambito dell’Unione Europea o in Paesi extra UE, regolarmente contrattualizzate e che offrono adeguate garanzie di sicurezza, necessarie per la fornitura di servizi essenziali al soddisfacimento delle Sue esigenze. Tali Responsabili Esterni, il cui elenco è disponibile dietro richiesta, possono appartenere a categorie di soggetti che supportano il Titolare nell’erogazione dei servizi offerti tramite il presente sito (quali, a titolo esemplificativo: sviluppatori software e gestori di siti web, spedizionieri).

Inoltre saranno trattati per finalità di analisi statistiche e di marketing diretto, in maniera anonima, come meglio specificato dalla cookie policy. Trattasi pertanto di trattamenti legittimi e necessari ad assicurarLe un servizio che risponda alle Sue aspettative. I dati saranno conservati per tutta la durata dei servizi da Lei richiesti o per periodi superiori solo se previsti dalle norme. In ogni momento Lei potrà esercitare i diritti previsti agli articoli 15-22 del GDPR contattando il titolare del presente sito.

Per modificare o cancellare i soli dati che sono archiviati sui sistemi che erogano il presente sito, cliccare qui. Le informazioni da lei inserite nel form (compreso il suo indirizzo email) potranno essere comunicate a una società terza che agirà in qualità di Responsabile esterno e che supporta il Titolare nella gestione del sito e nell’evasione della sua richiesta.

Nel caso di richiesta di cancellazione dei suoi dati, La informiamo che potrebbe non essere più possibile continuare a fornirLe il servizio richiestoci.

La informiamo, infine, che potrà proporre reclamo all'Autorità Garante per la Protezione dei Dati, qualora ritenesse siano stati violati i suoi diritti.
            </p> */}
            <div className="max-h-[400px] overflow-y-auto">
            <p className="text-sm whitespace-pre-line leading-relaxed">
  {`Informativa privacy ai sensi degli artt. 13-14 del Regolamento Europeo "Privacy" (GDPR)

I dati personali da Lei inseriti sono trattati da Studio di fisioterapia - Via Caduti sul Lavoro 38 - 81100 Caserta (CE) - +393392476524 in qualita' di Titolare, per finalita' connesse alla fornitura dei servizi da Lei richiesti (es. richiedere informazioni, registrarsi al sito, ottenere preventivi, effettuare pagamenti, acquistare beni, effettuare prenotazioni, scambiare documenti).

Inoltre, i dati da Lei forniti potrebbero essere trattati, solo su Suo esplicito consenso, al fine di inviarLe comunicazioni di natura commerciale via email o SMS relativamente ai servizi offerti dal Titolare.

- Nel primo caso, la base giuridica del trattamento e' l'esecuzione di un accordo.
- Nel secondo caso e' il consenso.

I trattamenti avverranno con modalita' elettroniche e potranno essere condivisi con terze parti (Responsabili Esterni) nell’ambito dell’Unione Europea o in Paesi extra-UE, che offrono adeguate garanzie di sicurezza. Tali soggetti (es. sviluppatori software, gestori del sito, spedizionieri) sono contrattualizzati e il loro elenco e' disponibile su richiesta.
I dati saranno utilizzati anche per analisi statistiche e marketing diretto in forma anonima, come indicato nella cookie policy. Si tratta di trattamenti legittimi e necessari per garantire un servizio all’altezza delle Sue aspettative.
I dati saranno conservati per il tempo necessario all’erogazione dei servizi o secondo quanto previsto dalla legge.

In qualsiasi momento potra' esercitare i Suoi diritti ai sensi degli artt. 15–22 del GDPR contattando il Titolare.
Per modificare o cancellare i dati archiviati nei sistemi del presente sito, cliccare qui.
Le informazioni inserite nel form (incluso l’indirizzo email) potranno essere comunicate a una societa' terza, nominata Responsabile esterno, che supporta il Titolare nella gestione tecnica del sito e delle richieste.

In caso di richiesta di cancellazione, il servizio potrebbe non essere piu' erogabile.

Infine, si informa che potra' proporre reclamo all'Autorita' Garante per la Protezione dei Dati, qualora ritenga che i Suoi diritti siano stati violati.`}
</p>
</div>
            <button onClick={() => setIsPrivacyPopupOpen(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Chiudi
            </button>
          </div>
        </div>
      )}

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

              {errors.name && <p className="text-red-500 text-sm">
                                {errors.name}
                              </p>
              }

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

              {errors.email && <p className="text-red-500 text-sm">
                                  {errors.email}
                                </p>
              }

            </label>
            <label>
              <span>* Telefono:</span>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="es. 3392476524"
                className="border border-gray-300 p-2 rounded"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </label>
            <label>
              <span>* Messaggio:</span>
              <textarea name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="min-h-48 max-h-48 p-3 border border-gray-300 rounded"
                cols={60}
                rows={10}
                placeholder="Scrivi qui il tuo messaggio"
              ></textarea>

              {errors.message && <p className="text-red-500 text-sm">
                                    {errors.message}
                                  </p>
              }

            </label>
            
            <label className="py-3 flex flex-row items-baseline justify-center gap-2">
              <input type="checkbox"
                checked={isPrivacyChecked}
                onChange={() => setIsPrivacyChecked(!isPrivacyChecked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-pretty">
              Spunta questa casella per dichiarare di aver letto l'

                <button type="button"
                  onClick={() => setIsPrivacyPopupOpen(true)}
                  className="text-blue-500 underline">
                  informativa sulla privacy
                </button> 
                
                ed autorizzare lo Studio al trattamento dei tuoi dati per le finalità indicate
              </span>
            </label>


            <button
              type="submit"
              disabled={!isPrivacyChecked}
              className={`bg-blue-500 text-white py-2 px-4 rounded 
                ${ !isPrivacyChecked && 'opacity-50 cursor-not-allowed'} hover:bg-blue-600`}
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
            <p> Se vuoi inviarci una mail, puoi scriverci a: brunonero74@gmail.com 

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContForm;
