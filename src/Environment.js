import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const source = new RecordSource();
const store = new Store(source);
const network = Network.create((operation, variables) => {
  return fetch('https://api.graph.cool/relay/v1/cjh9jee8y57jn0172g64bc92v', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
});

const environment = new Environment({
  network,
  store
});

export default environment;
