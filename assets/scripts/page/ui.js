'use strict'
// const config = require('../config.js')
const store = require('../store')
const api = require('./api.js')

const createPageSuccess = function (data) {
  $('#message').text('Page successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onCreatePageSuccess ran. Data is :', data)
}

const showPageSuccess = function (data) {
  console.log(data)
  const htmltemplate = proposalTemplate({proposals: data.proposals})
  $('.content').append(htmltemplate)
  $('.delete').on('click', onDeleteProposal)
}

const updatePageSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onUpdateSuccess ran. Data is :', data)
}

const deletePageSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onUpdateSuccess ran. Data is :', data)
}

const onShowProposals = function (event) {
  event.preventDefault()
  $('.content').html('')
  proposalApi.showProposals()
    .then(proposalUi.showProposalSuccess)
    .catch(proposalUi.onError)
}

const onUpdateProposal = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  proposalApi.updateProposal(data)
    .then(proposalUi.updateProposalSuccess)
    .catch(proposalUi.failure)
}

// const onGetProposals = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   proposalApi.getProposals()
//     .then(proposalUi.getProposalsSuccess)
//     .catch(proposalUi.failure)
// }

const onClearProposal = (event) => {
  event.preventDefault()
  proposalUi.clearProposal()
}
