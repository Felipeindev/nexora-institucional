export type ContactPayload = { nome: string; email: string; empresa: string; mensagem: string }
/** PONTO DE INTEGRAÇÃO FUTURA: substitua por uma chamada real (API, Formspree, Resend etc.).
 *  Atualmente NENHUMA mensagem é enviada. */
export async function submitContact(_payload: ContactPayload): Promise<void> {
  await new Promise(r => setTimeout(r, 700))
}
