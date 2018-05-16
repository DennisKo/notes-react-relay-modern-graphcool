/**
 * @flow
 * @relayHash beac645b5a3fbad6fd9ece28b0c443b3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateNoteItemInput = {
  id: string,
  text?: ?string,
  clientMutationId: string,
};
export type EditNoteMutationVariables = {|
  input: UpdateNoteItemInput
|};
export type EditNoteMutationResponse = {|
  +updateNoteItem: ?{|
    +noteItem: ?{|
      +createdAt: any,
      +id: string,
      +text: string,
      +updatedAt: any,
    |}
  |}
|};
*/


/*
mutation EditNoteMutation(
  $input: UpdateNoteItemInput!
) {
  updateNoteItem(input: $input) {
    noteItem {
      createdAt
      id
      text
      updatedAt
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateNoteItemInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateNoteItem",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateNoteItemInput!"
      }
    ],
    "concreteType": "UpdateNoteItemPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "noteItem",
        "storageKey": null,
        "args": null,
        "concreteType": "NoteItem",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "createdAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "text",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "updatedAt",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "EditNoteMutation",
  "id": null,
  "text": "mutation EditNoteMutation(\n  $input: UpdateNoteItemInput!\n) {\n  updateNoteItem(input: $input) {\n    noteItem {\n      createdAt\n      id\n      text\n      updatedAt\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EditNoteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "EditNoteMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fc8c4d141cebaed55034fd75670338da';
module.exports = node;
