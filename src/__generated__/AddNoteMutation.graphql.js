/**
 * @flow
 * @relayHash b8b3d1082987a7617bfc71bd3416a98a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateNoteItemInput = {
  text: string,
  clientMutationId: string,
};
export type AddNoteMutationVariables = {|
  input: CreateNoteItemInput
|};
export type AddNoteMutationResponse = {|
  +createNoteItem: ?{|
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
mutation AddNoteMutation(
  $input: CreateNoteItemInput!
) {
  createNoteItem(input: $input) {
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
    "type": "CreateNoteItemInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createNoteItem",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateNoteItemInput!"
      }
    ],
    "concreteType": "CreateNoteItemPayload",
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
  "name": "AddNoteMutation",
  "id": null,
  "text": "mutation AddNoteMutation(\n  $input: CreateNoteItemInput!\n) {\n  createNoteItem(input: $input) {\n    noteItem {\n      createdAt\n      id\n      text\n      updatedAt\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddNoteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AddNoteMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '90de46194b24cc3cc8fc17e2fe576a2e';
module.exports = node;
