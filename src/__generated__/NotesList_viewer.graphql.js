/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Note_note$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NotesList_viewer$ref: FragmentReference;
export type NotesList_viewer = {|
  +allNoteItems: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +id: string,
        +$fragmentRefs: Note_note$ref,
      |}
    |}>
  |},
  +$refType: NotesList_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "NotesList_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
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
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "Note_note",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'edc279539f1760e633ebad2af07df4f4';
module.exports = node;
