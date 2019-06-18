/*
 * @flow
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';
import zip from 'lodash/zip';

import editDiff, {
  INSERT,
  EQUAL,
  DELETE,
  CHANGE,
  CLASS_MAP,
} from './editDiff';
import DiffSide from '../components/edit/DiffSide';
import EntityLink from '../../common/components/EntityLink';

function cmpArtistCreditNames(a, b) {
  return (
    a.artist.id === b.artist.id &&
    a.name === b.name &&
    a.joinPhrase === b.joinPhrase
  );
}

type ArtistLinkProps = {|
  +content?: React.Node,
  +credit: ArtistCreditNameT,
  +nameVariation?: boolean,
|};

const ArtistLink = ({content, credit, nameVariation}: ArtistLinkProps) => (
  <EntityLink
    content={content || credit.name}
    entity={credit.artist}
    nameVariation={nameVariation}
  />
);

export default function diffArtistCredits(
  oldArtistCredit: ArtistCreditT,
  newArtistCredit: ArtistCreditT,
) {
  const diffs = editDiff(
    oldArtistCredit,
    newArtistCredit,
    cmpArtistCreditNames,
  );

  const oldNames = [];
  const newNames = [];

  for (let i = 0; i < diffs.length; i++) {
    const diff = diffs[i];

    switch (diff.type) {
      case EQUAL:
        diff.oldItems.forEach(function (credit) {
          const link = <ArtistLink credit={credit} />;
          oldNames.push(link, credit.joinPhrase);
          newNames.push(link, credit.joinPhrase);
        });
        break;

      case CHANGE:
        // $FlowFixMe - zip doesn't like $ReadOnlyArray
        zip(diff.oldItems, diff.newItems).forEach(function (pair) {
          const oldCredit = pair[0] || {artist: null, joinPhrase: '', name: ''};
          const newCredit = pair[1] || {artist: null, joinPhrase: '', name: ''};

          const oldJoin = (
            <DiffSide
              filter={DELETE}
              newText={newCredit.joinPhrase}
              oldText={oldCredit.joinPhrase}
              split="\s+"
            />
          );

          const newJoin = (
            <DiffSide
              filter={INSERT}
              newText={newCredit.joinPhrase}
              oldText={oldCredit.joinPhrase}
              split="\s+"
            />
          );

          oldNames.push(
            <ArtistLink
              credit={oldCredit}
              content={
                <DiffSide
                  filter={DELETE}
                  newText={newCredit.name}
                  oldText={oldCredit.name}
                  split="\s+"
                />
              }
              nameVariation={oldCredit.artist.name !== oldCredit.name}
            />,
            oldJoin,
          );

          newNames.push(
            <ArtistLink
              credit={newCredit}
              content={
                <DiffSide
                  filter={INSERT}
                  newText={newCredit.name}
                  oldText={oldCredit.name}
                  split="\s+"
                />
              }
              nameVariation={newCredit.artist.name !== newCredit.name}
            />,
            newJoin,
          );
        });

        break;

      case DELETE:
        oldNames.push(...diff.oldItems.map(credit => (
          <span className={CLASS_MAP[DELETE]}>
            <ArtistLink credit={credit} />
            {credit.joinPhrase}
          </span>
        )));
        break;

      case INSERT:
        newNames.push(...diff.newItems.map(credit => (
          <span className={CLASS_MAP[INSERT]}>
            <ArtistLink credit={credit} />
            {credit.joinPhrase}
          </span>
        )));
        break;
    }
  }

  return {
    old: React.createElement(React.Fragment, null, ...oldNames),
    new: React.createElement(React.Fragment, null, ...newNames),
  };
}
