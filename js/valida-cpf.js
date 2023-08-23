export default function eUmCPF(campo) {
  const cpf = campo.value.replace(/\.|-/g, '')
  validaRepetidos(cpf)
  console.log(validaRepetidos(cpf))
}

function validaRepetidos(cpf) {
  const numerosRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ]

  return numerosRepetidos.includes(cpf)
}
