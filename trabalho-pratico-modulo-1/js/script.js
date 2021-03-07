window.addEventListener('load', start);

var currentValue = ''

function start() {

  var inputRange = document.querySelector('#inputRange');
  inputRange.addEventListener('change', render)
}

function render(event) {
  currentValue = event.target.value
  var inputNumber = document.querySelector('#inputNumber');
  inputNumber.value = currentValue
  extensiveNumber(currentValue)
}

function extensiveNumber(value) {

  const size = value.length

  switch (size) {
    case 1:
      convextNumberToText(value[0])
      break;
    case 2:
      convextNumberToText(value[1], value[0])
      break;
    case 3:
      convextNumberToText(value[2], value[1], value[0])
      break;
    default:
      break;
  }
}

function convextNumberToText(first = null, second = null, third = null) {

  var textNumber = ''
  if (first && second && third) {
    textNumber = `${from100to900(third, first)}${from20to99(second, first)}`
  } else if (first && second) {
    textNumber = `${from20to99(second, first)}`
  } else {
    textNumber = `${from1to9(first)}`
  }

  const textValue = document.querySelector('#inputText');
  textValue.value = textNumber
  console.log('textNumber', textNumber)
}

function from1to9(number) {
  switch (number) {
    case '1':
      return 'um'
    case '2':
      return 'dois'
    case '3':
      return 'três'
    case '4':
      return 'quatro'
    case '5':
      return 'cinco'
    case '6':
      return 'seis'
    case '7':
      return 'sete'
    case '8':
      return 'oito'
    case '9':
      return 'nove'
    default:
      return ''
  }

}

function from10to19() {
  var n = ''
  if (currentValue.length === 2) {
    n = `${currentValue[0]}${currentValue[1]}`
  } else if (currentValue.length === 3) {
    n = `${currentValue[1]}${currentValue[2]}`
  }

  switch (n) {
    case '10':
      return 'dez'
    case '11':
      return 'onze'
    case '12':
      return 'doze'
    case '13':
      return 'treze'
    case '14':
      return 'quatoze'
    case '15':
      return 'quinze'
    case '16':
      return 'dezesseis'
    case '17':
      return 'dezesete'
    case '18':
      return 'dezoito'
    case '19':
      return 'dezenove'
    default:
      return `e ${from1to9(n[0])}`
  }
}

function from20to99(size, first = '0') {
  console.log({size, first})
  switch (size) {
    case '1':
      return from10to19(currentValue)
    case '2':
      if (first === '0') return 'vinte '
      else return 'vinte e ' + from1to9(first)
    case '3':
      if (first === '0') return 'trinta '
      else return 'trinta e ' + from1to9(first)
    case '4':
      if (first === '0') return 'quarenta '
      else return 'quarenta e ' + from1to9(first)
    case '5':
      if (first === '0') return 'cinquenta '
      else return 'cinquenta e ' + from1to9(first)
    case '6':
      if (first === '0') return 'sessenta '
      else return 'sessenta e ' + from1to9(first)
    case '7':
      if (first === '0') return 'setenta '
      else return 'setenta e ' + from1to9(first)
    case '8':
      if (first === '0') return 'oitenta '
      else return 'oitenta e ' + from1to9(first)
    case '9':
      if (first === '0') return 'noventa '
      else return 'noventa e ' + from1to9(first)
    default:
      return ''
  }
}

function from100to900(number, first = '0') {
  switch (number) {
    case '1':
      if (first === '0') return 'cem '
      else return 'cento e '+ from1to9(first)
    case '2':
      if (first === '0') return 'dussentos '
      else return 'dussentos e '+ from1to9(first)
    case '3':
      if (first === '0') return 'tressentos '
      else return 'tressentos e '+ from1to9(first)
    case '4':
      if (first === '0') return 'quatrocentos '
      else return 'quatrocentos e '+ from1to9(first)
    case '5':
      if (first === '0') return 'quinhetos '
      else return 'quinhetos e '+ from1to9(first)
    case '6':
      if (first === '0') return 'seicentos '
      else return 'seicentos e '+ from1to9(first)
    case '7':
      if (first === '0') return 'setecentos '
      else return 'setecentos e '+ from1to9(first)
    case '8':
      if (first === '0') return 'oitocentos '
      else return 'oitocentos e ' + from1to9(first)
    case '9':
      if (first === '0') return 'novecentos '
      else return 'novecentos e ' + from1to9(first)
    default:
      return ''
  }

}
