/**
 * @flow
 * @relayHash c37a942157b4506ce208c6041ac7a9ee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteNoteItemInput = {
  id: string,
  clientMutationId: string,
};
export type DeleteNoteMutationVariables = {|
  input: DeleteNoteItemInput
|};
export type DeleteNoteMutationResponse = {|
  +deleteNoteItem: ?{|
    +deletedId: ?string
  |}
|};
*/


/*
mutation DeleteNoteMutation(
  $input: DeleteNoteItemInput!
) {
  deleteNoteItem(input: $input) {
    deletedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteNoteItemInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteNoteItem",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteNoteItemInput!"
      }
    ],
    "concreteType": "DeleteNoteItemPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeleteNoteMutation",
  "id": null,
  "text": "mutation DeleteNoteMutation(\n  $input: DeleteNoteItemInput!\n) {\n  deleteNoteItem(input: $input) {\n    deletedId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteNoteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteNoteMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ace9e865ad0ced0067a092d9ac63f132';
module.exports = node;
