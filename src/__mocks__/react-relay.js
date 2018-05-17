import ReactRelay from 'react-relay';

module.exports = {
  ...ReactRelay,
  createFragmentContainer: Component => Component
};
