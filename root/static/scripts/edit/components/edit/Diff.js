/*
 * @flow
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';

import DiffSide from './DiffSide';
import {INSERT, DELETE} from '../../utility/editDiff';

export type DiffProps = {|
  +label: string,
  +newText: string,
  +oldText: string,
|};

type Props = {|
  ...DiffProps,
  +split: string,
|};

const Diff = ({label, newText, oldText, split = ''}: Props) => (
  oldText === newText ? null : (
    <tr>
      <th>{label}</th>
      <td className="old">
        <DiffSide
          filter={DELETE}
          newText={newText}
          oldText={oldText}
          split={split}
        />
      </td>
      <td className="new">
        <DiffSide
          filter={INSERT}
          newText={newText}
          oldText={oldText}
          split={split}
        />
      </td>
    </tr>
  )
);

export default Diff;
