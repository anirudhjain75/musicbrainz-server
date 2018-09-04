/*
 * @flow
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import genericDiff from 'generic-diff';

const INSERT: 1 = 1;
const EQUAL: 2 = 2;
const DELETE: 3 = 3;
const CHANGE: 4 = 4;

export type EditType =
  | typeof INSERT
  | typeof EQUAL
  | typeof DELETE
  | typeof CHANGE;

const CLASS_MAP = {
  [INSERT]: 'diff-only-b',
  [EQUAL]: '',
  [DELETE]: 'diff-only-a',
  [CHANGE]: '',
};

export {INSERT, EQUAL, DELETE, CHANGE, CLASS_MAP};

type GenericEditDiff<T> = {|
  +added: boolean,
  +items: $ReadOnlyArray<T>,
  +removed: boolean,
|};

export type EditDiff<T> = {|
  +newItems: $ReadOnlyArray<T>,
  +oldItems: $ReadOnlyArray<T>,
  +type: EditType,
|};

function getChangeType(diff) {
  if (!diff.added && !diff.removed) {
    return EQUAL;
  }
  return diff.added ? INSERT : DELETE;
}

// Combines adjacent (DELETE, INSERT) diffs into a single CHANGE diff.
export default function editDiff<T>(
  oldSide: $ReadOnlyArray<T>,
  newSide: $ReadOnlyArray<T>,
  eqFunc?: (T, T) => boolean,
): $ReadOnlyArray<EditDiff<T>> {
  const diffs: $ReadOnlyArray<GenericEditDiff<T>> =
    genericDiff(oldSide, newSide, eqFunc);
  const normalized = [];

  for (let i = 0; i < diffs.length; i++) {
    const diff = diffs[i];

    let changeType = getChangeType(diff);

    let nextDiff;
    if ((i + 1) < diffs.length) {
      nextDiff = diffs[i + 1];
    }

    let oldItems = [];
    let newItems = [];

    switch (changeType) {
      case INSERT:
        newItems = diff.items;
        break;

      case EQUAL:
        oldItems = diff.items;
        newItems = diff.items;
        break;

      case DELETE:
        oldItems = diff.items;

        if (nextDiff && getChangeType(nextDiff) === INSERT) {
          i++; // skip next
          changeType = CHANGE;
          newItems = nextDiff.items;
        }
        break;
    }

    normalized.push({type: changeType, oldItems, newItems});
  }

  return normalized;
}
