// @flow

import React from 'react';

import chooseLayoutComponent from '../../utility/chooseLayoutComponent';
import * as manifest from '../../static/manifest';
import {withCatalystContext} from '../../context';

import EditForm from './EditForm';

type Props = {
  $c: CatalystContextT,
  entity: AliasT,
  form: AliasFormT,
  formType: string,
  localeOptions: SelectOptionsT,
  type: string,
  typeOptions: SelectOptionsT,
};

const Add = ({
  $c,
  type,
  form,
  typeOptions,
  localeOptions,
  entity,
  formType,
}: Props) => {
  console.log('This is type');
  console.log(type);
  console.log('This is form');
  console.log(form);
  console.log('This is typeOptions');
  console.log(typeOptions);
  console.log('This is localeOptions');
  console.log(localeOptions);
  const LayoutComponent = chooseLayoutComponent(type);
  return (
    <LayoutComponent entity={entity} fullWidth title={l('Add Alias')}>
      {formType === 'add' ? <h2>{l('Add alias')}</h2> : <h2>{l('Edit alias')}</h2>}
      {manifest.js('edit')}
      <EditForm
        entityType={type}
        form={form}
        localeOptions={localeOptions}
        typeId={entity.typeID}
        typeOptions={typeOptions}
        uri={$c.req.uri}
      />
      <div id="guesscase-options" />
    </LayoutComponent>
  );
};

export default withCatalystContext(Add);
