/**
 * @flow
 * @relayHash 85b2991f75831c64429e6072149b663d
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
  id
  allNoteItems(last: 100, orderBy: createdAt_ASC) {
    edges {
      node {
        id
        ...Note_note
        __typename
      }
      cursor
    }
    pageInfo {
      hasPreviousPage
      startCursor
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
  "text": "query NotesQuery {\n  viewer {\n    ...NotesList_viewer\n    id\n  }\n}\n\nfragment NotesList_viewer on Viewer {\n  id\n  allNoteItems(last: 100, orderBy: createdAt_ASC) {\n    edges {\n      node {\n        id\n        ...Note_note\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Note_note on NoteItem {\n  id\n  text\n  createdAt\n  updatedAt\n}\n",
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
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allNoteItems",
            "storageKey": "allNoteItems(last:100,orderBy:\"createdAt_ASC\")",
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 100,
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "createdAt_ASC",
                "type": "NoteItemOrderBy"
              }
            ],
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
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasPreviousPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "startCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allNoteItems",
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 100,
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "createdAt_ASC",
                "type": "NoteItemOrderBy"
              }
            ],
            "handle": "connection",
            "key": "NotesList_allNoteItems",
            "filters": []
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '56ac6a5a642a49c6bf16d1a816074212';
module.exports = node;
