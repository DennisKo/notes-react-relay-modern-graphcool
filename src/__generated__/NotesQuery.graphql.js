/**
 * @flow
 * @relayHash 083e20936feccb1ddcd1519ff86a894e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NotesList_viewer$ref = any;
export type NotesQueryVariables = {||};
export type NotesQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: NotesList_viewer$ref
  |}
|};
*/


/*
query NotesQuery {
  viewer {
    ...NotesList_viewer
    id
  }
}

fragment NotesList_viewer on Viewer {
  allNoteItems {
    edges {
      node {
        id
        ...Note_note
      }
    }
  }
}

fragment Note_note on NoteItem {
  id
  text
  createdAt
  updatedAt
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "NotesQuery",
  "id": null,
  "text": "query NotesQuery {\n  viewer {\n    ...NotesList_viewer\n    id\n  }\n}\n\nfragment NotesList_viewer on Viewer {\n  allNoteItems {\n    edges {\n      node {\n        id\n        ...Note_note\n      }\n    }\n  }\n}\n\nfragment Note_note on NoteItem {\n  id\n  text\n  createdAt\n  updatedAt\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NotesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "NotesList_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NotesQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allNoteItems",
            "storageKey": null,
            "args": null,
            "concreteType": "NoteItemConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "NoteItemEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NoteItem",
                    "plural": false,
                    "selections": [
                      v0,
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
                        "name": "createdAt",
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
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '56ac6a5a642a49c6bf16d1a816074212';
module.exports = node;
