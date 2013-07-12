-- Automatically generated, do not edit.
\unset ON_ERROR_STOP

DROP TRIGGER b_upd_area ON area;
DROP TRIGGER b_upd_area_alias ON area_alias;
DROP TRIGGER unique_primary_for_locale ON area_alias;
DROP TRIGGER search_hint ON area_alias;
DROP TRIGGER end_date_implies_ended ON area;
DROP TRIGGER a_ins_artist ON artist;
DROP TRIGGER b_upd_artist ON artist;
DROP TRIGGER b_del_artist_special ON artist;
DROP TRIGGER end_date_implies_ended ON artist;
DROP TRIGGER b_upd_artist_alias ON artist_alias;
DROP TRIGGER replace_old_sub_on_add ON editor_subscribe_collection;
DROP TRIGGER del_collection_sub_on_delete ON editor_collection;
DROP TRIGGER del_collection_sub_on_private ON editor_collection;
DROP TRIGGER unique_primary_for_locale ON artist_alias;
DROP TRIGGER search_hint ON artist_alias;
DROP TRIGGER b_upd_artist_tag ON artist_tag;
DROP TRIGGER b_upd_editor ON editor;
DROP TRIGGER a_ins_editor ON editor;
DROP TRIGGER b_upd_l_area_area ON l_area_area;
DROP TRIGGER b_upd_l_area_artist ON l_area_artist;
DROP TRIGGER b_upd_l_area_label ON l_area_label;
DROP TRIGGER b_upd_l_area_recording ON l_area_recording;
DROP TRIGGER b_upd_l_area_release ON l_area_release;
DROP TRIGGER b_upd_l_area_release_group ON l_area_release_group;
DROP TRIGGER b_upd_l_area_url ON l_area_url;
DROP TRIGGER b_upd_l_area_work ON l_area_work;
DROP TRIGGER b_upd_l_artist_artist ON l_artist_artist;
DROP TRIGGER b_upd_l_artist_label ON l_artist_label;
DROP TRIGGER b_upd_l_artist_recording ON l_artist_recording;
DROP TRIGGER b_upd_l_artist_release ON l_artist_release;
DROP TRIGGER b_upd_l_artist_release_group ON l_artist_release_group;
DROP TRIGGER b_upd_l_artist_url ON l_artist_url;
DROP TRIGGER b_upd_l_artist_work ON l_artist_work;
DROP TRIGGER b_upd_l_label_label ON l_label_label;
DROP TRIGGER b_upd_l_label_recording ON l_label_recording;
DROP TRIGGER b_upd_l_label_release ON l_label_release;
DROP TRIGGER b_upd_l_label_release_group ON l_label_release_group;
DROP TRIGGER b_upd_l_label_url ON l_label_url;
DROP TRIGGER b_upd_l_label_work ON l_label_work;
DROP TRIGGER b_upd_l_recording_recording ON l_recording_recording;
DROP TRIGGER b_upd_l_recording_release ON l_recording_release;
DROP TRIGGER b_upd_l_recording_release_group ON l_recording_release_group;
DROP TRIGGER b_upd_l_recording_url ON l_recording_url;
DROP TRIGGER b_upd_l_recording_work ON l_recording_work;
DROP TRIGGER b_upd_l_release_release ON l_release_release;
DROP TRIGGER b_upd_l_release_release_group ON l_release_release_group;
DROP TRIGGER b_upd_l_release_url ON l_release_url;
DROP TRIGGER b_upd_l_release_work ON l_release_work;
DROP TRIGGER b_upd_l_release_group_release_group ON l_release_group_release_group;
DROP TRIGGER b_upd_l_release_group_url ON l_release_group_url;
DROP TRIGGER b_upd_l_release_group_work ON l_release_group_work;
DROP TRIGGER b_upd_l_url_url ON l_url_url;
DROP TRIGGER b_upd_l_url_work ON l_url_work;
DROP TRIGGER b_upd_l_work_work ON l_work_work;
DROP TRIGGER a_ins_label ON label;
DROP TRIGGER b_del_label_special ON label;
DROP TRIGGER b_upd_label ON label;
DROP TRIGGER end_date_implies_ended ON label;
DROP TRIGGER b_upd_label_alias ON label_alias;
DROP TRIGGER unique_primary_for_locale ON label_alias;
DROP TRIGGER search_hint ON label_alias;
DROP TRIGGER b_upd_label_tag ON label_tag;
DROP TRIGGER end_date_implies_ended ON link;
DROP TRIGGER b_upd_link_attribute ON link_attribute;
DROP TRIGGER b_upd_link_attribute_type ON link_attribute_type;
DROP TRIGGER b_upd_link_type ON link_type;
DROP TRIGGER b_upd_link_type_attribute_type ON link_type_attribute_type;
DROP TRIGGER b_upd_medium ON medium;
DROP TRIGGER b_upd_medium_cdtoc ON medium_cdtoc;
DROP TRIGGER a_ins_recording ON recording;
DROP TRIGGER a_upd_recording ON recording;
DROP TRIGGER a_del_recording ON recording;
DROP TRIGGER b_upd_recording ON recording;
DROP TRIGGER b_upd_recording_tag ON recording_tag;
DROP TRIGGER a_ins_release ON release;
DROP TRIGGER a_upd_release ON release;
DROP TRIGGER a_del_release ON release;
DROP TRIGGER b_upd_release ON release;
DROP TRIGGER a_ins_release_event ON release_country;
DROP TRIGGER a_upd_release_event ON release_country;
DROP TRIGGER a_del_release_event ON release_country;
DROP TRIGGER a_ins_release_event ON release_unknown_country;
DROP TRIGGER a_upd_release_event ON release_unknown_country;
DROP TRIGGER a_del_release_event ON release_unknown_country;
DROP TRIGGER b_upd_release_label ON release_label;
DROP TRIGGER a_ins_release_group ON release_group;
DROP TRIGGER a_upd_release_group ON release_group;
DROP TRIGGER a_del_release_group ON release_group;
DROP TRIGGER b_upd_release_group ON release_group;
DROP TRIGGER b_upd_release_group_tag ON release_group_tag;
DROP TRIGGER b_upd_tag_relation ON tag_relation;
DROP TRIGGER a_ins_track ON track;
DROP TRIGGER a_upd_track ON track;
DROP TRIGGER a_del_track ON track;
DROP TRIGGER b_upd_track ON track;
DROP TRIGGER remove_orphaned_tracks ON track;
DROP TRIGGER b_upd_url ON url;
DROP TRIGGER a_ins_work ON work;
DROP TRIGGER b_upd_work ON work;
DROP TRIGGER b_upd_work_alias ON work_alias;
DROP TRIGGER unique_primary_for_locale ON work_alias;
DROP TRIGGER search_hint ON work_alias;
DROP TRIGGER b_upd_work_tag ON work_tag;
DROP TRIGGER inserting_edits_requires_confirmed_email_address ON edit;
DROP TRIGGER a_upd_edit ON edit;
DROP TRIGGER a_ins_edit_artist ON edit_artist;
DROP TRIGGER a_ins_edit_artist ON edit_label;
DROP TRIGGER ensure_work_attribute_type_allows_text ON work_attribute;
DROP TRIGGER remove_unused_links ON l_artist_artist;
DROP TRIGGER remove_unused_links ON l_artist_label;
DROP TRIGGER remove_unused_links ON l_artist_recording;
DROP TRIGGER remove_unused_links ON l_artist_release;
DROP TRIGGER remove_unused_links ON l_artist_release_group;
DROP TRIGGER remove_unused_links ON l_artist_url;
DROP TRIGGER remove_unused_links ON l_artist_work;
DROP TRIGGER remove_unused_links ON l_label_label;
DROP TRIGGER remove_unused_links ON l_label_recording;
DROP TRIGGER remove_unused_links ON l_label_release;
DROP TRIGGER remove_unused_links ON l_label_release_group;
DROP TRIGGER remove_unused_links ON l_label_url;
DROP TRIGGER remove_unused_links ON l_label_work;
DROP TRIGGER remove_unused_links ON l_recording_recording;
DROP TRIGGER remove_unused_links ON l_recording_release;
DROP TRIGGER remove_unused_links ON l_recording_release_group;
DROP TRIGGER remove_unused_links ON l_recording_url;
DROP TRIGGER remove_unused_links ON l_recording_work;
DROP TRIGGER remove_unused_links ON l_release_release;
DROP TRIGGER remove_unused_links ON l_release_release_group;
DROP TRIGGER remove_unused_links ON l_release_url;
DROP TRIGGER remove_unused_links ON l_release_work;
DROP TRIGGER remove_unused_links ON l_release_group_release_group;
DROP TRIGGER remove_unused_links ON l_release_group_url;
DROP TRIGGER remove_unused_links ON l_release_group_work;
DROP TRIGGER remove_unused_links ON l_url_url;
DROP TRIGGER remove_unused_links ON l_url_work;
DROP TRIGGER remove_unused_links ON l_work_work;
DROP TRIGGER url_gc_a_upd_l_artist_url ON l_artist_url;
DROP TRIGGER url_gc_a_del_l_artist_url ON l_artist_url;
DROP TRIGGER url_gc_a_upd_l_label_url ON l_label_url;
DROP TRIGGER url_gc_a_del_l_label_url ON l_label_url;
DROP TRIGGER url_gc_a_upd_l_recording_url ON l_recording_url;
DROP TRIGGER url_gc_a_del_l_recording_url ON l_recording_url;
DROP TRIGGER url_gc_a_upd_l_release_url ON l_release_url;
DROP TRIGGER url_gc_a_del_l_release_url ON l_release_url;
DROP TRIGGER url_gc_a_upd_l_release_group_url ON l_release_group_url;
DROP TRIGGER url_gc_a_del_l_release_group_url ON l_release_group_url;
DROP TRIGGER url_gc_a_upd_l_url_url ON l_url_url;
DROP TRIGGER url_gc_a_del_l_url_url ON l_url_url;
DROP TRIGGER url_gc_a_upd_l_url_work ON l_url_work;
DROP TRIGGER url_gc_a_del_l_url_work ON l_url_work;
DROP TRIGGER delete_unused_tag ON tag;
DROP TRIGGER delete_unused_tag ON artist_tag;
DROP TRIGGER delete_unused_tag ON label_tag;
DROP TRIGGER delete_unused_tag ON release_group_tag;
DROP TRIGGER delete_unused_tag ON work_tag;
