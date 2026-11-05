'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'nom' | 'prenom' | 'email' | 'telephone' | 'sujet' | 'message', string>>
}

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const get = (k: string) => String(formData.get(k) ?? '').trim()
  const data = {
    nom: get('nom'),
    prenom: get('prenom'),
    email: get('email'),
    telephone: get('telephone'),
    sujet: get('sujet'),
    message: get('message'),
  }

  const errors: ContactState['errors'] = {}
  if (data.nom.length < 2) errors.nom = 'Veuillez saisir votre nom.'
  if (data.prenom.length < 2) errors.prenom = 'Veuillez saisir votre prénom.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Adresse email invalide.'
  if (data.telephone && !/^[+\d\s().-]{8,20}$/.test(data.telephone)) errors.telephone = 'Numéro de téléphone invalide.'
  if (data.sujet.length < 3) errors.sujet = 'Veuillez préciser le sujet.'
  if (data.message.length < 10) errors.message = 'Le message doit contenir au moins 10 caractères.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Veuillez corriger les champs indiqués.', errors }
  }

  // MVP : le message est validé ici ; l'enregistrement en base (collection "Messages") sera branché plus tard.
  return {
    status: 'success',
    message: `Merci ${data.prenom}, votre message a bien été envoyé. Nous vous répondrons à ${data.email}.`,
  }
}
