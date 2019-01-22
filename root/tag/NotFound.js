/*
 * @flow
 * Copyright (C) 2018 Shamroy Pellew
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import React from 'react';

import NotFound from '../components/NotFound';
import {l} from '../static/scripts/common/i18n';

const TagNotFound = ({tag}: {|+tag: string|}) => (
  <NotFound title={l('Tag Not Used')}>
    <p>
      {l('No MusicBrainz entities have yet been tagged with "{tag}".', {tag: tag})}
    </p>
    <p>
      {l('If you wish to use this tag, please {url|search} for the entity first and apply the tag using the sidebar.',
        {url: '/search'})}
    </p>
  </NotFound>
);

export default TagNotFound;
