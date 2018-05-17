import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import { NotesList } from '../NotesList';
import format from 'date-fns/format';

let mockedQueryResponse;

describe('Notes', () => {
  beforeEach(() => {
    mockedQueryResponse = {
      id: 'viewer-fixed',
      allNoteItems: {
        edges: [
          {
            node: {
              id: 'cjha6wm1h49570183tuv450aa',
              text: 'First',
              createdAt: '2018-05-17T07:04:38.000Z',
              updatedAt: '2018-05-17T07:04:38.000Z',
              __typename: 'NoteItem'
            },
            cursor: 'cjha6wm1h49570183tuv450aa'
          },
          {
            node: {
              id: 'cjha6wmam4itd0197kemyk1fq',
              text: 'Second',
              createdAt: '2018-05-17T07:04:38.000Z',
              updatedAt: '2018-05-17T07:04:38.000Z',
              __typename: 'NoteItem'
            },
            cursor: 'cjha6wmam4itd0197kemyk1fq'
          },
          {
            node: {
              id: 'cjha6wmg6495a0183lqarnxam',
              text: 'Third',
              createdAt: '2018-05-17T07:04:39.000Z',
              updatedAt: '2018-05-17T07:04:39.000Z',
              __typename: 'NoteItem'
            },
            cursor: 'cjha6wmg6495a0183lqarnxam'
          },
          {
            node: {
              id: 'cjha6wmn84itg0197jo400obe',
              text: 'Fourth',
              createdAt: '2018-05-17T07:04:39.000Z',
              updatedAt: '2018-05-17T07:04:39.000Z',
              __typename: 'NoteItem'
            },
            cursor: 'cjha6wmn84itg0197jo400obe'
          },
          {
            node: {
              id: 'cjha7xz8s4j7i0197wa35x0k3',
              text: 'Fifth',
              createdAt: '2018-05-17T07:33:41.000Z',
              updatedAt: '2018-05-17T07:33:41.000Z',
              __typename: 'NoteItem'
            },
            cursor: 'cjha7xz8s4j7i0197wa35x0k3'
          }
        ],
        pageInfo: {
          hasPreviousPage: false,
          startCursor: 'cjha6wm1h49570183tuv450aa'
        }
      }
    };
  });
  afterEach(cleanup);

  it('renders a list of notes', () => {
    const { container } = render(<NotesList viewer={mockedQueryResponse} />);
    const notes = container.querySelectorAll('.note-container');
    expect(notes.length).toBe(mockedQueryResponse.allNoteItems.edges.length);
  });

  it('renders text and timestamp of a note', () => {
    const { container } = render(<NotesList viewer={mockedQueryResponse} />);

    const noteTexts = container.querySelectorAll('.note-text');
    const noteTimestamps = container.querySelectorAll('.note-timestamp');
    noteTexts.forEach((note, index) => {
      expect(note).toHaveTextContent(mockedQueryResponse.allNoteItems.edges[index].node.text);
    });
    noteTimestamps.forEach((note, index) => {
      expect(note).toHaveTextContent(
        format(mockedQueryResponse.allNoteItems.edges[index].node.updatedAt, 'DD.MM.YYYY')
      );
    });
  });
});
