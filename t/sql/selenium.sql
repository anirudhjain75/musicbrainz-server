\set ON_ERROR_STOP 1

BEGIN;

-- Skip past $EDITOR_MODBOT and 'editor' below.
SELECT setval('editor_id_seq', 6, FALSE);

-- Skip past special purpose artists.
SELECT setval('artist_id_seq', 3, FALSE);

INSERT INTO area (id, gid, name, type, edits_pending, last_updated, begin_date_year, begin_date_month, begin_date_day, end_date_year, end_date_month, end_date_day, ended, comment) VALUES
    (38, '71bbafaa-e825-3e15-8ca9-017dcad1748b', 'Canada', 1, 0, '2013-05-27 13:15:52.179105+00', NULL, NULL,  NULL,  NULL,  NULL,  NULL, 'f', ''),
    (73, '08310658-51eb-3801-80de-5a0739207115', 'France', 1, 0, '2013-05-27 12:50:32.702645+00', NULL, NULL,  NULL,  NULL,  NULL,  NULL, 'f', ''),
    (107, '2db42837-c832-3c27-b4a3-08198f75693c', 'Japan', 1, 0, '2013-05-27 12:29:56.162248+00', NULL, NULL,  NULL,  NULL,  NULL,  NULL, 'f', ''),
    (222, '489ce91b-6658-3307-9877-795b68554c98', 'United States', 1, 0, '2013-06-15 18:06:39.59323+00', NULL, NULL, NULL, NULL, NULL, NULL, 'f', '');

INSERT INTO area_gid_redirect (gid, new_id, created) VALUES
  ('aafabb17-528e-51e3-9ac8-b8471dacd710', 38, '2013-05-27 13:15:52.179105+00');

INSERT INTO artist (area, begin_area, begin_date_day, begin_date_month, begin_date_year, comment, edits_pending, end_area, end_date_day, end_date_month, end_date_year, ended, gender, gid, id, last_updated, name, sort_name, type) VALUES
    (NULL, NULL, 8, 1, 1947, '', 0, NULL, 10, 1, 2016, '1', 1, '5441c29d-3602-4898-b1a1-b77fa23b8e50', 956, '2016-02-07 10:16:37.066958+00', 'David Bowie', 'Bowie, David', 1),
    (NULL, NULL, 3, 5, 1903, '', 0, NULL, 14, 10, 1977, '1', 1, '2437980f-513a-44fc-80f1-b90d9d7fcf8f', 99, '2016-11-07 12:01:02.968948+00', 'Bing Crosby', 'Crosby, Bing', 1),
    (NULL, NULL, NULL, NULL, NULL, '', 0, NULL, NULL, NULL,  NULL, '0', NULL, '4f74991f-0156-427a-88db-9b2ac293dd42', 1647244, '2018-04-11 10:07:10.225834+00', 'The David Bowie Knives', 'David Bowie Knives, The', 2),
    (222, NULL, NULL, NULL, 1988, '', 0, NULL, NULL, NULL, NULL, 'f', NULL, 'b7ffd2af-418f-4be2-bdd1-22f8b48613da', 347, '2013-12-20 00:09:54.635352+00', 'Nine Inch Nails', 'Nine Inch Nails', 2),
    (NULL, NULL, 14, 9, 1984, '', 0, NULL, NULL, NULL, NULL, 'f', 1, '1155431a-d35e-4863-9ae0-e3c24eb61aa9', 237981, '2016-02-07 18:20:11.786086+00', 'Lethal Bizzle', 'Lethal Bizzle', 1);

INSERT INTO artist_alias (id, artist, name, locale, edits_pending, last_updated, type, sort_name, begin_date_year, begin_date_month, begin_date_day, end_date_year, end_date_month, end_date_day, primary_for_locale, ended) VALUES
  (37382, 237981, 'Lethal B', NULL, 0, '2012-05-15 18:57:13.252186+00', NULL, 'Lethal B', NULL, NULL, NULL, NULL, NULL, NULL, 'f', 'f');

INSERT INTO artist_credit (id, name, artist_count, ref_count) VALUES
    (347, 'Nine Inch Nails', 1, 1),
    (956, 'David Bowie', 1, 2),
    (2196047, 'The David Bowie Knives', 1, 2);

INSERT INTO artist_credit_name (artist_credit, position, artist, name, join_phrase) VALUES
    (347, 0, 347, 'Nine Inch Nails', ''),
    (956, 0, 956, 'David Bowie', ''),
    (2196047, 0, 1647244, 'The David Bowie Knives', '');

INSERT INTO artist_gid_redirect (gid, new_id, created) VALUES
    ('f21a407e-3af9-4539-ab3d-c92a5230dff6', 237981, '2012-04-09 20:07:05.161415+00');

INSERT INTO country_area (area) VALUES
    (73),
    (107),
    (222);

INSERT INTO editor VALUES
    (5, 'editor', 0, 'editor@example.com', NULL, NULL, '2018-03-30 00:39:29.175923-05', '2018-03-30 00:39:30.023663-05', '2018-03-30 00:39:29.175923-05', '2018-03-30 00:39:30.023663-05', NULL, NULL, NULL, '{CRYPT}$2a$10$d.6vAYMxGN56ExVNioQnZuLvSmnm3S5QCeSFWQSAo561aYhAEcLqC', '3a115bc4f05ea9856bd4611b75c80bca', false);

INSERT INTO event (id, gid, name, begin_date_year, begin_date_month, begin_date_day, end_date_year, end_date_month, end_date_day, time, type, cancelled, setlist, comment, edits_pending, last_updated, ended) VALUES
    (1606, 'a43f824a-1679-4453-9722-d9ab51fbc85a', 'MusicBrainz Summit 14', 2014, 9, 26, 2014, 9, 28, NULL, NULL, 'f', NULL, '', 0, '2014-12-18 13:00:34.106501+00', 't');

INSERT INTO event_gid_redirect (gid, new_id, created) VALUES
    ('a428f34a-9761-3544-2279-a58cbf15ba9d', 1606, '2014-12-18 13:00:34.106501+00');

INSERT INTO instrument (id, gid, name, type, edits_pending, last_updated, comment, description) VALUES
    (55, '7ee8ebf5-3aed-4fc8-8004-49f4a8c45a87', 'electric guitar', 2, 0, '2014-08-22 17:09:51.69681+00', '', '');

INSERT INTO instrument_gid_redirect (gid, new_id, created) VALUES
    ('5fbe8ee7-dea3-8cf4-4008-78a54c8a4f94', 55, '2014-08-22 17:09:51.69681+00');

INSERT INTO iso_3166_1 (area, code) VALUES
    (73, 'FR'),
    (107, 'JP'),
    (222, 'US');

INSERT INTO label (id, gid, name, begin_date_year, begin_date_month, begin_date_day, end_date_year, end_date_month, end_date_day, label_code, type, area, comment, edits_pending, last_updated, ended) VALUES
    (399, '4b5cba06-6a79-454c-91f5-3fe220d4950d', 'Nothing Records', 1992, NULL, NULL, 2004, NULL, NULL, NULL, 4, 222, 'US industrial/electronic founded by Trent Reznor', 0, '2012-05-15 19:04:49.109476+00', 'f'),
    (403, 'c9117237-b78b-4e47-b452-c9d94fb34916', 'TVT Records', 1985, NULL, NULL, 2008, 6, NULL, NULL, 4, 222, '', 0, '2012-08-30 19:40:44.521006+00', 't'),
    (620, '2182a316-c4bd-4605-936a-5e2fac52bdd2', 'Interscope Records', 1990, NULL, NULL, NULL, NULL, NULL, 6406, 4, 222, '', 0, '2013-06-10 22:00:24.33737+00', 'f');

INSERT INTO label_gid_redirect (gid, new_id, created) VALUES
    ('8122a316-c4bd-936a-4605-5e2fac52bdd2', 620, '2012-04-09 20:07:05.161415+00');

INSERT INTO link_type (id, parent, child_order, gid, entity_type0, entity_type1, name, description, link_phrase, reverse_link_phrase, long_link_phrase, priority, last_updated, is_deprecated, has_dates, entity0_cardinality, entity1_cardinality) VALUES
--    (74, 73, 1, '98e08c20-8402-4163-8970-53504bb6a1e4', 'release', 'url', 'purchase for download', 'This is used to link to a page where the release can be purchased for download.', 'purchase for download', 'download purchase page for', 'can be purchased for download at', 0, '2013-12-10 13:51:19.794106+00', false, true, 0, 0),
--    (85, 73, 3, '08445ccf-7b99-4438-9f9a-fb9ac18099ee', 'release', 'url', 'streaming music', 'This relationship type is used to link a release to a site where the tracks can be legally streamed for free, e.g. Spotify.', 'stream {video} for free', 'free music {video} streaming page for', '{video} can be streamed for free at', 0, '2014-01-19 02:56:04.116246+00', false, true, 0, 0),
    (666, 188, 0, 'baf4b924-088c-41b3-8b49-7a4d1d5f3be9', 'artist', 'url', 'musicmoz', '', 'MusicMoz', 'MusicMoz page for', 'has a MusicMoz page at', 0, '2017-09-11 04:00:09.052103+00', true, false, 0, 0);

INSERT INTO link (id, link_type, begin_date_year, begin_date_month, begin_date_day, end_date_year, end_date_month, end_date_day, attribute_count, created, ended) VALUES
    (6313, 74, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2011-05-16 15:03:23.368437+00', false),
    (6330, 85, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2011-05-16 15:03:23.368437+00', false);


INSERT INTO place (id, gid, name, type, address, area, coordinates, comment, edits_pending, last_updated, begin_date_year, begin_date_month, begin_date_day, end_date_year, end_date_month, end_date_day, ended) VALUES
    (1161, '88f4fdcb-c7a7-4df3-bd7d-9b02a8cb2a32', 'Many Rooms Music', 1, 'Agoura, California', NULL, NULL, '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'f');

INSERT INTO place_gid_redirect (gid, new_id, created) VALUES
    ('bcdf4f88-7a7c-3fd4-d7db-23a2bc8a20b9', 1161, '2012-04-09 20:07:05.161415+00');

INSERT INTO recording (id, gid, name, artist_credit, length, comment, edits_pending, last_updated, video) VALUES
    (164872, '96f64611-49df-4e54-84e7-0f9a30f01766', 'mr self destruct', 347, 270573, '', 0, '2017-09-29 09:00:51.064128+00', 'f'),
    (164873, '429f0b1a-0293-4793-993b-0bb5f73567f2', 'Piggy', 347, 264426, '', 0, '2017-01-16 21:00:48.187704+00', 'f'),
    (20937085, '0f42ab32-22cd-4dcf-927b-a8d9a183d68b', 'Travelling Man', 347, 270573, '', 0, '2017-05-15 20:36:38.082509+00', 'f');

INSERT INTO recording_gid_redirect (gid, new_id, created) VALUES
    ('23ba24f0-dc22-fcd4-b729-b86d381a9d8a', 20937085, '2012-04-09 20:07:05.161415+00');

INSERT INTO release_group (id, gid, name, artist_credit, type, comment) VALUES
    (94299, 'df295d32-f18f-333d-a94c-e168c6323a9a', 'Demons', 2196047, 2, ''),
    (1581583, '1fd18f5b-9a92-41fd-a590-da6b5cc60d85', '★', 956, 1, 'Blackstar'),
    (1954919, '566b08ae-2b02-4fdb-a5d8-6a54fd16df27', 'Weapons of Mass Seduction', 2196047, 1, '');

INSERT INTO release_group_gid_redirect (gid, new_id, created) VALUES
    ('23d592fd-f81f-d333-c49a-a9a3236c861e', 94299, '2012-04-09 20:07:05.161415+00');

INSERT INTO release (id, gid, name, artist_credit, release_group, status, packaging, language, script, barcode, comment, quality) VALUES
    (26, 'dd245091-b21e-48a3-b59a-f9b8ed8a0469', 'Demons', 2196047, 94299, 1, NULL, 120, 28, NULL, '', -1),
    (1693299, '24d4159a-99d9-425d-a7b8-1b9ec0261a33', '★', 956, 1581583, 1, 3, 120, 28, '888751738621', '', -1),
    (2154808, '1bda2f85-0576-4077-b3fa-0fc939079b61', 'Weapons of Mass Seduction', 2196047, 1954919, 1, NULL, 120, 28, NULL, '', -1);

INSERT INTO medium (id, release, position, format, name, edits_pending, last_updated, track_count) VALUES
    (1690850, 1693299, 1, 1, '', 0, '2015-05-18 20:20:39.009738+00', 14);

INSERT INTO release_gid_redirect (gid, new_id, created) VALUES
    ('190542dd-e12b-3a84-a95b-9640a8de8b9f', 26, '2012-04-09 20:07:05.161415+00');

INSERT INTO series (id, gid, name, comment, type, ordering_attribute, ordering_type, edits_pending, last_updated) VALUES
    (3238, 'e4ac76d6-712b-4ef5-b84a-9c37e63e05d3', 'Post Marked Stamps', '', 1, 788, 1, 0, '2015-05-19 04:24:35.787606+00');

INSERT INTO series_gid_redirect (gid, new_id, created) VALUES
    ('6d67ca4e-b217-5fe4-a48b-3d50e36e73c9', 3238, '2012-04-09 20:07:05.161415+00');

INSERT INTO track (id, gid, recording, medium, position, number, name, artist_credit, length, edits_pending, last_updated, is_data_track) VALUES
    (18674665, '14786f5a-0aa9-42c5-a28d-0194477090ec', 20937085, 1690850, 1, 1, '2 + 2 = 5 (The Lukewarm.)', 347, 199386, 0, '2015-05-18 20:20:39.009738+00', 'f');

INSERT INTO track_gid_redirect (gid, new_id, created) VALUES
    ('a5f68741-9aa0-5c24-d82a-ce0907744910', 18674665, '2012-04-09 20:07:05.161415+00');

INSERT INTO url (id, gid, url, edits_pending, last_updated) VALUES
    (29540, 'bf309ba1-b07c-426e-90df-ca5d651ae7a0', 'https://www.imdb.com/name/nm0195982/', 0, '2011-05-16 16:31:52+00'),
    (4948549, '86d65e08-8331-4614-a387-816abdba0045', 'http://thedavidbowieknives.bandcamp.com/album/weapons-of-mass-seduction', 0, '2018-04-11 10:09:59.527876+00');

INSERT INTO url_gid_redirect (gid, new_id, created) VALUES
    ('1ab903fb-c70b-e624-fd09-0a7ea156d5ac', 29540, '2011-05-16 16:31:52+00');

INSERT INTO l_release_url (id, link, entity0, entity1, edits_pending, last_updated, link_order, entity0_credit, entity1_credit) VALUES
    (2036110, 6313, 2154808, 4948549, 0, '2018-04-11 10:09:59.527876+00', 0, '', ''),
    (2036111, 6330, 2154808, 4948549, 0, '2018-04-11 10:09:59.527876+00', 0, '', '');

INSERT INTO work (id, gid, name, type, comment, edits_pending, last_updated) VALUES
    (346907, '4491f749-d06a-348c-aa58-a288d2eafa5f', 'Starman', 17, '', 0, '2017-04-01 20:00:18.388559+00'),
    (12610030, '69cd3461-089e-4138-adc2-f3a1907a5013', 'The Night Is Over', 17, '', 0, '2013-04-17 11:06:22.012835+00');

INSERT INTO work_gid_redirect (gid, new_id, created) VALUES
    ('1643dc96-e980-8314-2cda-3105a7091a3f', 12610030, '2013-04-17 11:06:22.012835+00');

COMMIT;
