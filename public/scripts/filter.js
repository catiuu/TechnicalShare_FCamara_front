const oFilter = (function () {
  var input
  var cards = document.getElementsByClassName('cards')
  var card = []

  for (let i = 0; i < cards.length; i++) {
    card[i] = document.getElementById(cards[i].id)
    // seleciona todos os cards e salva na array
    card[i].card = card[i].getElementsByClassName('card')

    if (card[i].card.length > 0) {
      // Seleciona todos os data attributes de um card da array
      card[i].data = card[i].card[i].querySelectorAll('[data-filter]')
    } // finaliza o if

    for (let j = 0; j < card[i].data.length; j++) {
      input = document.getElementById(card[i].id + j.toString())
      card[i].input = []
      if (input != null) {
        card[i].input[j] = document.getElementById(card[i].id + j.toString())
        card[i].input[j].addEventListener('keyup', function () {
          runFilter(card[i].id)
        })
      } // fim do if
    } // fim do loop
  } // fim do loop

  function runFilter(parCardName) {
    // Declara variáveis
    var cardContainer, card, i, data, p, nMaxData, nResult, prefixInputId
    var data = [],
      input = [],
      filter = [],
      txtValue = []
    let isDisplay = true

    // cardContainer
    cardContainer = document.getElementById(parCardName)
    prefixInputId = parCardName
    card = cardContainer.querySelectorAll('.card')

    // Conta data attributes do cardContainer
    if (card.length > 1) {
      data = card[0].querySelectorAll('[data-filter]')
      nMaxData = data.length
    } // fim do if

    // Re-conta data attributes do cardContainer
    for (i = 0; i < nMaxData; i++) {
      // Se for diferente de nulo
      if (document.getElementById(prefixInputId + i.toString()) != null) {
        // atribui o input
        input[i] = document.getElementById(prefixInputId + i.toString())
        // cria o filtro com o valor do input
        filter[i] = input[i].value.toUpperCase()
      } else {
        nMaxData = i
      } // fim do if
    } // fim do loop

    // card - Loop por todos os cards e esconde os que não batem com a pesquisa
    for (i = 0; i < card.length; i++) {
      isDisplay = true
      for (j = 0; j < nMaxData; j++) {
        p = card[i].getElementsByTagName('p')[j]
        txtValue = p.textContent || p.innerText
        if (filter[j] != '') {
          nResult = txtValue.toUpperCase().indexOf(filter[j])
          if (nResult <= -1) {
            isDisplay = false
          } //end if
        } //end if
      } //end loop

      if (isDisplay) {
        card[i].style.display = ''
      } else {
        card[i].style.display = 'none'
      } //end if
    } //end loop
  } //end method
})()
