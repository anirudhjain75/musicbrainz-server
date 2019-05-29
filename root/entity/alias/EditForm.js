// @flow
/* eslint-disable react/jsx-no-bind */

import React, {useState, useEffect} from 'react';
import noop from 'lodash/noop';
import ReactDOM from 'react-dom';

import gc from '../../static/scripts/guess-case/MB/GuessCase/Main';
import MB from '../../static/scripts/common/MB';
import DataRangeFieldset from '../../components/DateRangeFieldset';
import {ENTITIES} from '../../static/scripts/common/constants';
import EnterEdit from '../../components/EnterEdit';
import EnterEditNote from '../../components/EnterEditNote';
import FormRowCheckbox from '../../components/FormRowCheckbox';
import FormRowSelect from '../../components/FormRowSelect';
import FormRowNameWithGuesscase from '../../components/FormRowNameWithGuesscase';
import hydrate from '../../utility/hydrate';
import FormRowSortNameWithGuessCase from '../../components/FormRowSortNameWithGuessCase';
import GuessCaseOptions from '../../components/GuessCaseOptions';

type Props = {
  entityType: string,
  form: AliasFormT,
  localeOptions: SelectOptionsT,
  typeId: number | null,
  typeOptions: SelectOptionsT,
  uri: string,
};

const EditForm = ({
  uri,
  form,
  typeOptions,
  localeOptions,
  entityType,
  typeId,
}: Props) => {
  const guess = MB.GuessCase[entityType];

  useEffect(() => {
    const $ = require('jquery');
    const $options = $('#guesscase-options');
    if ($options.length && !$options.data('ui-dialog')) {
      $options.dialog({autoOpen: false, title: l('Guess Case Options')});
      ReactDOM.render(<GuessCaseOptions />, $options[0]);
    }
  }, []);
  const formOptions = (prop) => {
    return {
      grouped: false,
      options: prop,
    };
  };
  const [state, setState] = useState({
    aliasName: form.field.name.value ? form.field.name : {
      ...form.field.name,
      value: '',
    },
    locale: form.field.locale.value ? form.field.locale : {
      ...form.field.locale,
      value: '',
    },
    sortName: form.field.sort_name.value ? form.field.sort_name : {
      ...form.field.sort_name,
      value: '',
    },
    type: form.field.type_id,
  });
  const entityProperties = ENTITIES[entityType];
  const disabler = parseInt(state.type.value, 10) ===
      entityProperties.aliases.search_hint_type;

  const args = [state.aliasName.value];

  if (entityType === 'artist') {
    args.push(typeId !== 2 /* person */);
  }
  return (
    <>
      <p>
        {exp.l('An alias is an alternate name for an entity. They typically contain\
        common mispellings or variations of the name and are also used to improve search results.\
        View the {doc|alias documentation} for more details.', {doc:  '/doc/Aliases'})}
      </p>
      <form action={uri} className="edit-alias" method="post">
        <div className="half-width">
          <fieldset>
            <legend>{l('Alias Details')}</legend>
            <FormRowNameWithGuesscase
              entityType={entityType}
              field={state.aliasName}
              onChangeInput={(e) => {
                // $FlowFixMe
                return setState({
                  ...state,
                  aliasName: {
                    ...state.aliasName,
                    value: e.target.value,
                  },
                });
              }}
              onPressGuessCaseOptions={() => {
                const $ = require('jquery');
                return $('#guesscase-options').dialog('open');
              }}
              onPressGuessCaseTitle={() => {
                // $FlowFixMe
                return setState({
                  ...state,
                  aliasName: {
                    ...state.aliasName,
                    value: guess.guess(state.aliasName.value),
                  },
                });
              }}
              options={noop}
              required
              state={state}
            />
            <FormRowSortNameWithGuessCase
              disabled={disabler}
              entityType={entityType}
              field={state.sortName}
              onChange={(e) => {
                return setState({
                  ...state,
                  sortName: {
                    ...state.sortName,
                    value: e.target.value,
                  },
                });
              }}
              onPressGuessCaseCopy={() => {
                return setState({
                  ...state,
                  sortName: {
                    ...state.sortName,
                    value: state.aliasName.value,
                  },
                });
              }}
              onPressGuessCaseSortName={() => {
                return setState({
                  ...state,
                  sortName: {
                    ...state.sortName,
                    value: guess.sortname.apply(guess, args),
                  },
                });
              }}
              state={state}
              typeId={typeId}
            />
            <FormRowSelect
              allowEmpty
              field={state.locale}
              frozen={disabler}
              label={l('Locale:')}
              // eslint-disable-next-line react/jsx-no-bind
              onChange={(e) => {
                const target = e.target;
                if (target instanceof HTMLInputElement) {
                  return setState({
                    ...state,
                    // $FlowFixMe
                    locale: {
                      ...state.locale,
                      value: target.value,
                    },
                  });
                }
                return undefined;
              }}
              options={formOptions(localeOptions)}
            />
            <span
              id="allow_primary_for_locale"
              style={state.locale.value === '' ? {display: 'none'} : {display: 'block'}}
            >
              <FormRowCheckbox
                disabled={disabler}
                field={form.field.primary_for_locale}
                label={l('This is the primary alias for this locale')}
              />
            </span>
            <FormRowSelect
              allowEmpty
              field={state.type}
              label={l('Type:')}
              // eslint-disable-next-line react/jsx-no-bind
              onChange={(e) => {
                const target = e.target;
                if (target instanceof HTMLInputElement) {
                  setState({
                    ...state,
                    // $FlowFixMe
                    type: {
                      ...state.type,
                      value: target.value,
                    },
                  });
                }
              }}
              options={formOptions(typeOptions)}
            />
          </fieldset>
          <DataRangeFieldset
            disabled={disabler}
            endedLabel={l('This alias is no longer current.')}
            field={form.field.period}
            type="alias"
          />
          <EnterEditNote field={form.field.edit_note} hideHelp />
          <EnterEdit form={form} />
        </div>
      </form>
    </>
  );
};

export default hydrate < Props >('div.edit-form', EditForm);
