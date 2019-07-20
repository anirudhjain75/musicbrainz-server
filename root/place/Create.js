// @flow
import React from 'react';

import Layout from '../layout';
import {withCatalystContext} from '../context';

import EditForm from './EditForm';

type Props = {
  $c: CatalystContextT,
  entityType: string,
  form: PlaceFormT,
  optionsTypeId: SelectOptionsT,
};

const Create = ({$c, form, optionsTypeId, entityType}: Props) => {
  return (
    <Layout fullWidth title={l('Add Place')}>
      <div id="content">
        <h1>{l('Add Place')}</h1>
        <EditForm
          $c={$c}
          entityType={entityType}
          form={form}
          optionsTypeId={optionsTypeId}
        />
      </div>
      <div id="guesscase-options" />
    </Layout>
  );
};

export default withCatalystContext(Create);
